import { majorArcana, TarotCard } from "@/data/tarot";

export interface DrawnCard {
  card: TarotCard;
  reversed: boolean;
  position: "Past" | "Present" | "Future";
}

export function drawThreeCards(): DrawnCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);

  const positions: ("Past" | "Present" | "Future")[] = ["Past", "Present", "Future"];

  return selected.map((card, index) => ({
    card,
    reversed: Math.random() > 0.5,
    position: positions[index],
  }));
}
