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

    // TODO: Replace with real Grok API call once API key is available
    // Example structure for the prompt:
    const prompt = `You are a mysterious Halloween tarot reader. The querent asks: "${question}"

They drew a three-card spread (Past, Present, Future):

${cards.map((c, i) => `${i + 1}. ${c.position}: ${c.card.name} (${c.reversed ? "Reversed" : "Upright"}) - Keywords: ${c.card.keywords.join(", ")}`).join("\n")}

Provide a insightful, atmospheric interpretation in English. Structure it as:
- Overall message
- Past
- Present  
- Future
- Final advice

Keep the tone mystical, warm, and Halloween-themed without being scary.`;

    // Placeholder response until Grok API is connected
    const mockInterpretation = `**Overall Message**  
The cards reveal a path of transformation under the Halloween moon. Your question about "${question}" is met with both mystery and clarity.

**Past**  
${cards[0].card.name} (${cards[0].reversed ? "Reversed" : "Upright"}): This card speaks of what has led you here...

**Present**  
${cards[1].card.name} (${cards[1].reversed ? "Reversed" : "Upright"}): In this moment, the energy is...

**Future**  
${cards[2].card.name} (${cards[2].reversed ? "Reversed" : "Upright"}): Looking ahead, the cards suggest...

**Final Advice**  
Trust the turning of the Wheel. The spirits of the season whisper that change is already in motion.`;

    return NextResponse.json({
      interpretation: mockInterpretation,
      promptUsed: prompt, // for debugging
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to interpret" }, { status: 500 });
  }
}
