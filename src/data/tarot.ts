export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  imagePrompt: string;
  image: string;
}

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    nameEn: "The Fool",
    keywords: ["new beginnings", "innocence", "spontaneity", "free spirit"],
    uprightMeaning: "New beginnings, innocence, adventure, and taking a leap of faith.",
    reversedMeaning: "Recklessness, risk-taking, or holding back due to fear.",
    imagePrompt: "The Fool tarot card, Halloween style, young wanderer with a small bag stepping off a cliff under a full moon, pumpkin and bat motifs, dark mystical atmosphere, digital art",
    image: "/cards/00-the-fool.jpg"
  },
  {
    id: 1,
    name: "The Magician",
    nameEn: "The Magician",
    keywords: ["manifestation", "power", "skill", "concentration"],
    uprightMeaning: "Manifestation, resourcefulness, power, and inspired action.",
    reversedMeaning: "Manipulation, poor planning, or untapped talents.",
    imagePrompt: "The Magician tarot card, Halloween style, sorcerer with wand and tools on a table, glowing runes, bats flying, orange and purple lighting, mystical digital illustration",
    image: "/cards/01-the-magician.jpg"
  },
  {
    id: 2,
    name: "The High Priestess",
    nameEn: "The High Priestess",
    keywords: ["intuition", "mystery", "subconscious", "inner voice"],
    uprightMeaning: "Intuition, sacred knowledge, divine feminine, and the subconscious mind.",
    reversedMeaning: "Secrets, disconnected from intuition, or withdrawal.",
    imagePrompt: "The High Priestess tarot card, Halloween style, veiled woman between two pillars with crescent moon, black cats and pumpkins, deep purple and silver tones, mysterious digital art",
    image: "/cards/02-the-high-priestess.jpg"
  },
  {
    id: 3,
    name: "The Empress",
    nameEn: "The Empress",
    keywords: ["abundance", "nurturing", "fertility", "beauty"],
    uprightMeaning: "Femininity, beauty, nature, nurturing, and abundance.",
    reversedMeaning: "Creative block, dependence on others, or emptiness.",
    imagePrompt: "The Empress tarot card, Halloween style, regal woman in a forest of autumn leaves and pumpkins, crown of leaves, warm orange glow, abundant and mystical digital painting",
    image: "/cards/03-the-empress.jpg"
  },
  {
    id: 4,
    name: "The Emperor",
    nameEn: "The Emperor",
    keywords: ["authority", "structure", "control", "father figure"],
    uprightMeaning: "Authority, establishment, structure, and a father figure.",
    reversedMeaning: "Domination, excessive control, or lack of discipline.",
    imagePrompt: "The Emperor tarot card, Halloween style, stern king on a throne of bones and stone, bats and jack-o-lanterns, dark red and gold, authoritative mystical art",
    image: "/cards/04-the-emperor.jpg"
  },
  {
    id: 5,
    name: "The Hierophant",
    nameEn: "The Hierophant",
    keywords: ["tradition", "conformity", "spiritual guidance", "beliefs"],
    uprightMeaning: "Spiritual wisdom, religious beliefs, conformity, and tradition.",
    reversedMeaning: "Personal beliefs, freedom, or challenging the status quo.",
    imagePrompt: "The Hierophant tarot card, Halloween style, priest in robes holding keys, gothic cathedral background with pumpkins, purple and black, spiritual digital illustration",
    image: "/cards/05-the-hierophant.jpg"
  },
  {
    id: 6,
    name: "The Lovers",
    nameEn: "The Lovers",
    keywords: ["love", "harmony", "relationships", "choices"],
    uprightMeaning: "Love, harmony, relationships, values alignment, and choices.",
    reversedMeaning: "Self-love, disharmony, imbalance, or misalignment of values.",
    imagePrompt: "The Lovers tarot card, Halloween style, couple under a moonlit sky with bats and autumn trees, romantic yet spooky, warm and cool contrast, digital art",
    image: "/cards/06-the-lovers.jpg"
  },
  {
    id: 7,
    name: "The Chariot",
    nameEn: "The Chariot",
    keywords: ["control", "willpower", "victory", "determination"],
    uprightMeaning: "Control, willpower, success, action, and determination.",
    reversedMeaning: "Self-discipline, opposition, or lack of direction.",
    imagePrompt: "The Chariot tarot card, Halloween style, warrior in a chariot pulled by black cats or spectral horses, pumpkins lining the path, triumphant dark atmosphere, digital painting",
    image: "/cards/07-the-chariot.jpg"
  },
  {
    id: 8,
    name: "Strength",
    nameEn: "Strength",
    keywords: ["courage", "patience", "compassion", "inner strength"],
    uprightMeaning: "Strength, courage, persuasion, influence, and compassion.",
    reversedMeaning: "Inner strength, self-doubt, or low energy.",
    imagePrompt: "Strength tarot card, Halloween style, woman gently closing a lion's mouth, surrounded by bats and glowing pumpkins, soft orange light, powerful yet gentle digital art",
    image: "/cards/08-strength.jpg"
  },
  {
    id: 9,
    name: "The Hermit",
    nameEn: "The Hermit",
    keywords: ["introspection", "solitude", "guidance", "searching"],
    uprightMeaning: "Soul-searching, introspection, being alone, and inner guidance.",
    reversedMeaning: "Isolation, loneliness, or withdrawal from others.",
    imagePrompt: "The Hermit tarot card, Halloween style, cloaked figure with a lantern on a mountain path at night, fog and bats, deep blues and oranges, solitary mystical digital illustration",
    image: "/cards/09-the-hermit.jpg"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameEn: "Wheel of Fortune",
    keywords: ["change", "cycles", "fate", "luck"],
    uprightMeaning: "Good luck, karma, life cycles, destiny, and a turning point.",
    reversedMeaning: "Bad luck, resistance to change, or breaking cycles.",
    imagePrompt: "Wheel of Fortune tarot card, Halloween style, large spinning wheel with symbols, jack-o-lanterns and bats around it, cosmic purple and orange, mystical digital art",
    image: "/cards/10-wheel-of-fortune.jpg"
  },
  {
    id: 11,
    name: "Justice",
    nameEn: "Justice",
    keywords: ["fairness", "truth", "cause and effect", "law"],
    uprightMeaning: "Justice, fairness, truth, cause and effect, and law.",
    reversedMeaning: "Unfairness, lack of accountability, or dishonesty.",
    imagePrompt: "Justice tarot card, Halloween style, figure holding scales and sword, gothic hall with pumpkin decorations, balanced composition, dark and golden tones, digital painting",
    image: "/cards/11-justice.jpg"
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameEn: "The Hanged Man",
    keywords: ["suspension", "sacrifice", "new perspective", "waiting"],
    uprightMeaning: "Pause, surrender, letting go, and new perspectives.",
    reversedMeaning: "Delays, resistance, stalling, or indecision.",
    imagePrompt: "The Hanged Man tarot card, Halloween style, figure hanging upside down from a tree with autumn leaves and bats, calm expression, mystical purple lighting, digital art",
    image: "/cards/12-the-hanged-man.jpg"
  },
  {
    id: 13,
    name: "Death",
    nameEn: "Death",
    keywords: ["endings", "change", "transformation", "transition"],
    uprightMeaning: "Endings, change, transformation, and transition.",
    reversedMeaning: "Resistance to change, personal transformation, or stagnation.",
    imagePrompt: "Death tarot card, Halloween style, skeletal figure on a dark horse, scythe, field of pumpkins under blood moon, transformative and eerie, digital illustration",
    image: "/cards/13-death.jpg"
  },
  {
    id: 14,
    name: "Temperance",
    nameEn: "Temperance",
    keywords: ["balance", "moderation", "patience", "harmony"],
    uprightMeaning: "Balance, moderation, patience, and purpose.",
    reversedMeaning: "Imbalance, excess, or self-healing.",
    imagePrompt: "Temperance tarot card, Halloween style, angel pouring liquid between cups, autumn forest with pumpkins, soft glowing light, harmonious mystical digital art",
    image: "/cards/14-temperance.jpg"
  },
  {
    id: 15,
    name: "The Devil",
    nameEn: "The Devil",
    keywords: ["bondage", "addiction", "materialism", "shadow self"],
    uprightMeaning: "Shadow self, attachment, addiction, restriction, and sexuality.",
    reversedMeaning: "Releasing limiting beliefs, exploring dark thoughts, or detachment.",
    imagePrompt: "The Devil tarot card, Halloween style, horned figure with chains, two bound people, fiery orange and black, bats and jack-o-lanterns, dark digital painting",
    image: "/cards/15-the-devil.jpg"
  },
  {
    id: 16,
    name: "The Tower",
    nameEn: "The Tower",
    keywords: ["sudden change", "upheaval", "chaos", "revelation"],
    uprightMeaning: "Sudden change, upheaval, chaos, revelation, and awakening.",
    reversedMeaning: "Personal transformation, fear of change, or averting disaster.",
    imagePrompt: "The Tower tarot card, Halloween style, tall tower struck by lightning, people falling, stormy night with bats and pumpkins, dramatic orange and black, digital art",
    image: "/cards/16-the-tower.jpg"
  },
  {
    id: 17,
    name: "The Star",
    nameEn: "The Star",
    keywords: ["hope", "faith", "purpose", "renewal"],
    uprightMeaning: "Hope, faith, purpose, renewal, and spirituality.",
    reversedMeaning: "Lack of faith, despair, or disconnection.",
    imagePrompt: "The Star tarot card, Halloween style, woman pouring water under a starry night sky with crescent moon, bats and soft pumpkins, hopeful purple and gold, digital illustration",
    image: "/cards/17-the-star.jpg"
  },
  {
    id: 18,
    name: "The Moon",
    nameEn: "The Moon",
    keywords: ["illusion", "intuition", "fear", "subconscious"],
    uprightMeaning: "Illusion, fear, anxiety, subconscious, and intuition.",
    reversedMeaning: "Release of fear, repressed emotion, or inner confusion.",
    imagePrompt: "The Moon tarot card, Halloween style, full moon over a path with wolf and dog, crayfish, bats flying, deep blue and silver with orange accents, mysterious digital art",
    image: "/cards/18-the-moon.jpg"
  },
  {
    id: 19,
    name: "The Sun",
    nameEn: "The Sun",
    keywords: ["positivity", "fun", "warmth", "success"],
    uprightMeaning: "Positivity, fun, warmth, success, and vitality.",
    reversedMeaning: "Inner child, feeling down, or overly optimistic.",
    imagePrompt: "The Sun tarot card, Halloween style, bright sun with a child on a white horse, sunflowers mixed with pumpkins, joyful yet slightly spooky, warm golden and orange digital painting",
    image: "/cards/19-the-sun.jpg"
  },
  {
    id: 20,
    name: "Judgement",
    nameEn: "Judgement",
    keywords: ["reflection", "reckoning", "awakening", "absolution"],
    uprightMeaning: "Judgement, rebirth, inner calling, and absolution.",
    reversedMeaning: "Self-doubt, inner critic, or ignoring the call.",
    imagePrompt: "Judgement tarot card, Halloween style, angel with trumpet above rising figures, gothic graveyard with pumpkins, purple sky, redemptive mystical digital art",
    image: "/cards/20-judgement.jpg"
  },
  {
    id: 21,
    name: "The World",
    nameEn: "The World",
    keywords: ["completion", "accomplishment", "travel", "fulfillment"],
    uprightMeaning: "Completion, integration, accomplishment, and travel.",
    reversedMeaning: "Seeking personal closure, short-cuts, or delays.",
    imagePrompt: "The World tarot card, Halloween style, dancer in a wreath of leaves and pumpkins, four corner creatures as bats and cats, cosmic background, triumphant digital illustration",
    image: "/cards/21-the-world.jpg"
  }
];
