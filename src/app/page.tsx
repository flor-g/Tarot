"use client";

import { useState } from "react";
import { drawThreeCards, DrawnCard } from "@/lib/draw";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [cards, setCards] = useState<DrawnCard[] | null>(null);
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDraw = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setInterpretation(null);

    const drawn = drawThreeCards();
    setCards(drawn);

    try {
      const res = await fetch("/api/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, cards: drawn }),
      });
      const data = await res.json();
      setInterpretation(data.interpretation);
    } catch (e) {
      setInterpretation("The spirits are silent for now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-orange-950 text-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-2 tracking-wider text-orange-400 drop-shadow-lg">
          Halloween Tarot
        </h1>
        <p className="text-center text-purple-300 mb-10 italic">
          Ask the cards under the full moon...
        </p>

        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 shadow-2xl">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What question burns in your heart tonight?"
            className="w-full bg-black/40 border border-purple-500/50 rounded-lg p-4 text-orange-100 placeholder-purple-400 focus:outline-none focus:border-orange-400 resize-none h-28"
          />

          <button
            onClick={handleDraw}
            disabled={loading || !question.trim()}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-purple-700 hover:from-orange-500 hover:to-purple-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-all shadow-lg"
          >
            {loading ? "Consulting the cards..." : "Draw Three Cards"}
          </button>
        </div>

        {cards && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((drawn, i) => (
              <div
                key={i}
                className="bg-black/70 border border-orange-500/40 rounded-xl p-5 text-center shadow-xl"
              >
                <div className="text-sm text-purple-300 uppercase tracking-widest mb-2">
                  {drawn.position}
                </div>
                <div className="text-2xl font-bold text-orange-300 mb-1">
                  {drawn.card.name}
                </div>
                <div className="text-sm text-orange-400">
                  {drawn.reversed ? "Reversed" : "Upright"}
                </div>
                <div className="mt-3 text-xs text-purple-200">
                  {drawn.card.keywords.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        )}

        {interpretation && (
          <div className="mt-10 bg-black/70 border border-purple-500/40 rounded-xl p-6 prose prose-invert max-w-none">
            <h2 className="text-2xl text-orange-400 mb-4">The Reading</h2>
            <div className="whitespace-pre-wrap text-orange-100 leading-relaxed">
              {interpretation}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
