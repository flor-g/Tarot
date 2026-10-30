#!/usr/bin/env node
// Standalone test for the Grok tarot interpretation (no Next.js needed)
// Usage: XAI_API_KEY=yourkey node test-interpret.mjs "Your question here"

const question = process.argv[2] || "What does the future hold for my creative projects?";

const mockCards = [
  {
    position: "Past",
    reversed: false,
    card: { name: "The Fool", keywords: ["beginnings", "innocence", "spontaneity"] }
  },
  {
    position: "Present",
    reversed: true,
    card: { name: "The Magician", keywords: ["manifestation", "resourcefulness", "power"] }
  },
  {
    position: "Future",
    reversed: false,
    card: { name: "The Star", keywords: ["hope", "faith", "purpose"] }
  }
];

const prompt = `You are a mysterious Halloween tarot reader. The querent asks: "${question}"

They drew a three-card spread (Past, Present, Future):

${mockCards.map((c, i) => `${i + 1}. ${c.position}: ${c.card.name} (${c.reversed ? "Reversed" : "Upright"}) - Keywords: ${c.card.keywords.join(", ")}`).join("\n")}

Provide a insightful, atmospheric interpretation in English. Structure it as:
- Overall message
- Past
- Present  
- Future
- Final advice

Keep the tone mystical, warm, and Halloween-themed without being scary.`;

async function main() {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    console.error("Error: XAI_API_KEY environment variable is not set.");
    console.error("Set it with: export XAI_API_KEY=your_key_here");
    process.exit(1);
  }

  console.log("Calling xAI API with model grok-4...\n");

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
          content: "You are a wise, atmospheric tarot interpreter with a Halloween spirit. Respond only with the structured reading.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("API error:", response.status, err);
    process.exit(1);
  }

  const data = await response.json();
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

  if (!interpretation && data.output_text) interpretation = data.output_text;

  console.log("=== Interpretation ===\n");
  console.log(interpretation || "No text extracted. Raw response keys: " + Object.keys(data).join(", "));
}

main().catch(console.error);
