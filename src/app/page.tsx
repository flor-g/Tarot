"use client";

import { useState } from "react";
import { drawThreeCards, DrawnCard } from "@/lib/draw";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [cards, setCards] = useState<DrawnCard[] | null>(null);
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleDraw = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setInterpretation(null);
    setError(null);
    setRevealed(false);

    const drawn = drawThreeCards();
    setCards(drawn);

    // Brief pause so the cards appear face-down first
    setTimeout(() => setRevealed(true), 400);

    try {
      const res = await fetch("/api/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, cards: drawn }),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || "The spirits are silent for now. Please try again.");
        return;
      }

      setInterpretation(data.interpretation);
    } catch {
      setError("The spirits are silent for now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="starfield" />
      <div className="moon" />

      <main className="relative min-h-screen text-[#FEF3C7]">
        <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
          {/* Header */}
          <header className="text-center mb-12">
            <h1
              className="text-6xl md:text-7xl font-normal tracking-wide text-[#F97316] drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]"
              style={{ fontFamily: "var(--font-creepster), cursive" }}
            >
              Halloween Tarot
            </h1>
            <p className="mt-3 text-lg md:text-xl text-[#FBBF24]/80 italic tracking-wide">
              Ask the cards under the full moon...
            </p>
          </header>

          {/* Question form */}
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#F97316]/40 glow-orange shadow-2xl">
            <label className="block text-sm uppercase tracking-widest text-[#FBBF24]/70 mb-3">
              Your Question
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What question burns in your heart tonight?"
              className="w-full bg-black/50 border border-[#6B21A8]/60 rounded-xl p-4 text-[#FEF3C7] placeholder-[#6B21A8]/60 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]/50 resize-none h-32 transition-all"
            />

            <button
              onClick={handleDraw}
              disabled={loading || !question.trim()}
              className="btn-draw mt-5 w-full bg-gradient-to-r from-[#F97316] via-[#B91C1C] to-[#6B21A8] hover:from-[#FB923C] hover:via-[#DC2626] hover:to-[#7C3AED] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-lg text-lg tracking-wide"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Consulting the cards...
                </span>
              ) : (
                "Draw Three Cards"
              )}
            </button>
          </div>

          {/* Cards */}
          {cards && (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((drawn, i) => (
                <div
                  key={i}
                  className="card-enter bg-black/80 border border-[#F97316]/50 rounded-2xl p-5 text-center shadow-2xl flex flex-col items-center glow-purple"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-[#FBBF24] mb-4 font-medium">
                    {drawn.position}
                  </div>

                  <div className={`card-flip w-full max-w-[220px] ${revealed ? "flipped" : ""}`}>
                    <div className="card-inner aspect-[2/3] relative">
                      {/* Back */}
                      <div className="card-face card-back absolute inset-0 rounded-xl" />

                      {/* Front */}
                      <div className="card-face absolute inset-0">
                        <img
                          src={drawn.card.image}
                          alt={drawn.card.name}
                          className={`w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-700 ${
                            drawn.reversed ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-5 text-xl font-bold text-[#F97316]"
                    style={{ fontFamily: "var(--font-creepster), cursive" }}
                  >
                    {drawn.card.name}
                  </div>
                  <div className="text-sm text-[#FBBF24] mt-1">
                    {drawn.reversed ? "Reversed" : "Upright"}
                  </div>
                  <div className="mt-2 text-xs text-[#C4B5FD] tracking-wide">
                    {drawn.card.keywords.join(" · ")}
                  </div>
                  <p className="mt-3 text-sm text-[#FEF3C7]/90 leading-relaxed text-left">
                    {drawn.reversed
                      ? drawn.card.reversedMeaning
                      : drawn.card.uprightMeaning}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-12 bg-red-950/70 border border-red-500/50 rounded-2xl p-6 glow-orange">
              <h2 className="text-xl text-red-300 mb-2" style={{ fontFamily: "var(--font-creepster), cursive" }}>
                Reading Unavailable
              </h2>
              <p className="text-[#FEF3C7]">{error}</p>
              {error.includes("XAI_API_KEY") && (
                <p className="mt-3 text-sm text-[#C4B5FD]">
                  Add the environment variable in your Vercel project settings and redeploy.
                </p>
              )}
            </div>
          )}

          {/* Interpretation */}
          {interpretation && (
            <div className="mt-12 bg-black/80 border border-[#6B21A8]/50 rounded-2xl p-6 md:p-8 glow-purple">
              <h2
                className="text-3xl text-[#F97316] mb-5 text-center"
                style={{ fontFamily: "var(--font-creepster), cursive" }}
              >
                The Reading
              </h2>
              <div className="whitespace-pre-wrap text-[#FEF3C7] leading-relaxed text-base md:text-lg">
                {interpretation}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
