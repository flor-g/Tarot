import { NextRequest, NextResponse } from "next/server";
import { DrawnCard } from "@/lib/draw";

export async function POST(req: NextRequest) {
  try {
    const { question, cards } = await req.json() as {
      question: string;
      cards: DrawnCard[];
    };

    if (!question || !cards || cards.length !== 3) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "XAI_API_KEY is not set on the server. Add it to your .env.local or deployment environment variables." },
        { status: 500 }
      );
    }

    const prompt = `The querent asks: "${question}"

They have drawn a three-card spread (Past, Present, Future):

${cards.map((c, i) => `${i + 1}. ${c.position}: ${c.card.name} (${c.reversed ? "Reversed" : "Upright"}) — Keywords: ${c.card.keywords.join(", ")}`).join("\n")}

Speak the reading in the language and spirit of Carl Jung’s Red Book. Let the cards be living figures of the soul. Address the querent as one who has descended into the depths. Use the voice of active imagination: mythic, alchemical, and intimate. Invoke the tension between the spirit of the times and the spirit of the depths. Let Philemon, the soul, the anima/animus, the shadow, and the Self appear where they are called. Do not explain Jung; embody the Red Book’s way of seeing.

Structure the reading exactly as:
- Overall message
- Past
- Present
- Future
- Final advice

Keep the tone solemn, luminous, and true to the Red Book — neither academic nor casual.`;

    const response = await fetch("https://api.x.ai/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4",
        input: [
          {
            role: "system",
            content: "You are an interpreter who speaks from the depths in the manner of Carl Jung’s Red Book. Your voice is that of the soul addressing itself through symbols. You do not lecture; you reveal. Respond only with the structured reading.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("xAI API error:", response.status, errText);
      return NextResponse.json(
        { error: "Failed to get interpretation from Grok", details: errText },
        { status: 502 }
      );
    }

    const data = await response.json();

    // Extract text from Responses API shape
    let interpretation = "";
    if (data.output && Array.isArray(data.output)) {
      for (const item of data.output) {
        if (item.type === "message" && Array.isArray(item.content)) {
          for (const content of item.content) {
            if (content.type === "output_text" && content.text) {
              interpretation += content.text;
            }
          }
        }
      }
    }

    // Fallbacks for different response shapes
    if (!interpretation && typeof data.output_text === "string") {
      interpretation = data.output_text;
    }
    if (!interpretation && data.choices?.[0]?.message?.content) {
      interpretation = data.choices[0].message.content;
    }
    if (!interpretation) {
      interpretation = "The cards returned an unexpected response. Please try again.";
      console.error("Unexpected xAI response shape:", JSON.stringify(data).slice(0, 500));
    }

    return NextResponse.json({ interpretation });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to interpret" }, { status: 500 });
  }
}
