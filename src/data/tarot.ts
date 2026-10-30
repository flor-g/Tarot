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

export const minorArcana: TarotCard[] = [
  // Wands
  { id: 22, name: "Ace of Wands", nameEn: "Ace of Wands", keywords: ["inspiration", "new opportunities", "growth", "potential"], uprightMeaning: "Inspiration, new opportunities, growth, and potential.", reversedMeaning: "Lack of energy, delays, or missed opportunities.", imagePrompt: "Ace of Wands geometric Halloween", image: "/cards/wands-ace.jpg" },
  { id: 23, name: "Two of Wands", nameEn: "Two of Wands", keywords: ["planning", "progress", "decisions", "discovery"], uprightMeaning: "Future planning, progress, decisions, and discovery.", reversedMeaning: "Fear of unknown, lack of planning, or bad decisions.", imagePrompt: "Two of Wands geometric Halloween", image: "/cards/wands-2.jpg" },
  { id: 24, name: "Three of Wands", nameEn: "Three of Wands", keywords: ["expansion", "foresight", "overseas opportunities"], uprightMeaning: "Looking ahead, expansion, and rapid growth.", reversedMeaning: "Obstacles, delays, or lack of foresight.", imagePrompt: "Three of Wands geometric Halloween", image: "/cards/wands-3.jpg" },
  { id: 25, name: "Four of Wands", nameEn: "Four of Wands", keywords: ["celebration", "harmony", "home", "community"], uprightMeaning: "Celebration, harmony, home, and community.", reversedMeaning: "Lack of support, transience, or conflict at home.", imagePrompt: "Four of Wands geometric Halloween", image: "/cards/wands-4.jpg" },
  { id: 26, name: "Five of Wands", nameEn: "Five of Wands", keywords: ["conflict", "competition", "tension", "diversity"], uprightMeaning: "Conflict, competition, tension, and diversity of opinion.", reversedMeaning: "Avoiding conflict, or inner conflict.", imagePrompt: "Five of Wands geometric Halloween", image: "/cards/wands-5.jpg" },
  { id: 27, name: "Six of Wands", nameEn: "Six of Wands", keywords: ["success", "public recognition", "progress", "self-confidence"], uprightMeaning: "Success, public recognition, progress, and self-confidence.", reversedMeaning: "Private achievement, fall from grace, or lack of recognition.", imagePrompt: "Six of Wands geometric Halloween", image: "/cards/wands-6.jpg" },
  { id: 28, name: "Seven of Wands", nameEn: "Seven of Wands", keywords: ["challenge", "competition", "protection", "perseverance"], uprightMeaning: "Challenge, competition, protection, and perseverance.", reversedMeaning: "Giving up, overwhelmed, or lack of confidence.", imagePrompt: "Seven of Wands geometric Halloween", image: "/cards/wands-7.jpg" },
  { id: 29, name: "Eight of Wands", nameEn: "Eight of Wands", keywords: ["speed", "action", "air travel", "movement"], uprightMeaning: "Speed, action, air travel, and movement.", reversedMeaning: "Delays, frustration, or holding off.", imagePrompt: "Eight of Wands geometric Halloween", image: "/cards/wands-8.jpg" },
  { id: 30, name: "Nine of Wands", nameEn: "Nine of Wands", keywords: ["resilience", "courage", "persistence", "test of faith"], uprightMeaning: "Resilience, courage, persistence, and a test of faith.", reversedMeaning: "Exhaustion, giving up, or paranoia.", imagePrompt: "Nine of Wands geometric Halloween", image: "/cards/wands-9.jpg" },
  { id: 31, name: "Ten of Wands", nameEn: "Ten of Wands", keywords: ["burden", "responsibility", "hard work", "completion"], uprightMeaning: "Burden, extra responsibility, hard work, and completion.", reversedMeaning: "Inability to delegate, or release of burdens.", imagePrompt: "Ten of Wands geometric Halloween", image: "/cards/wands-10.jpg" },
  { id: 32, name: "Page of Wands", nameEn: "Page of Wands", keywords: ["inspiration", "ideas", "discovery", "limitless potential"], uprightMeaning: "Inspiration, ideas, discovery, and limitless potential.", reversedMeaning: "Lack of direction, procrastination, or bad news.", imagePrompt: "Page of Wands geometric Halloween", image: "/cards/wands-page.jpg" },
  { id: 33, name: "Knight of Wands", nameEn: "Knight of Wands", keywords: ["energy", "passion", "lust", "action"], uprightMeaning: "Energy, passion, inspired action, and adventure.", reversedMeaning: "Haste, scattered energy, or delays.", imagePrompt: "Knight of Wands geometric Halloween", image: "/cards/wands-knight.jpg" },
  { id: 34, name: "Queen of Wands", nameEn: "Queen of Wands", keywords: ["courage", "confidence", "independence", "determination"], uprightMeaning: "Courage, confidence, independence, and determination.", reversedMeaning: "Selfishness, jealousy, or insecurity.", imagePrompt: "Queen of Wands geometric Halloween", image: "/cards/wands-queen.jpg" },
  { id: 35, name: "King of Wands", nameEn: "King of Wands", keywords: ["natural-born leader", "vision", "entrepreneur", "honour"], uprightMeaning: "Natural-born leader, vision, entrepreneur, and honour.", reversedMeaning: "Impulsiveness, haste, or ruthless ambition.", imagePrompt: "King of Wands geometric Halloween", image: "/cards/wands-king.jpg" },
  // Cups
  { id: 36, name: "Ace of Cups", nameEn: "Ace of Cups", keywords: ["love", "new relationships", "compassion", "creativity"], uprightMeaning: "Love, new relationships, compassion, and creativity.", reversedMeaning: "Self-love, intuition, or repressed emotions.", imagePrompt: "Ace of Cups geometric Halloween", image: "/cards/cups-ace.jpg" },
  { id: 37, name: "Two of Cups", nameEn: "Two of Cups", keywords: ["unified love", "partnership", "mutual attraction"], uprightMeaning: "Unified love, partnership, and mutual attraction.", reversedMeaning: "Self-love, break-up, or imbalance.", imagePrompt: "Two of Cups geometric Halloween", image: "/cards/cups-2.jpg" },
  { id: 38, name: "Three of Cups", nameEn: "Three of Cups", keywords: ["celebration", "friendship", "creativity", "collaborations"], uprightMeaning: "Celebration, friendship, creativity, and collaborations.", reversedMeaning: "Independence, alone time, or gossip.", imagePrompt: "Three of Cups geometric Halloween", image: "/cards/cups-3.jpg" },
  { id: 39, name: "Four of Cups", nameEn: "Four of Cups", keywords: ["meditation", "contemplation", "apathy", "reevaluation"], uprightMeaning: "Meditation, contemplation, apathy, and reevaluation.", reversedMeaning: "Retreat, withdrawal, or acceptance.", imagePrompt: "Four of Cups geometric Halloween", image: "/cards/cups-4.jpg" },
  { id: 40, name: "Five of Cups", nameEn: "Five of Cups", keywords: ["regret", "failure", "disappointment", "pessimism"], uprightMeaning: "Regret, failure, disappointment, and pessimism.", reversedMeaning: "Personal setbacks, self-forgiveness, or moving on.", imagePrompt: "Five of Cups geometric Halloween", image: "/cards/cups-5.jpg" },
  { id: 41, name: "Six of Cups", nameEn: "Six of Cups", keywords: ["revisiting the past", "childhood memories", "innocence", "joy"], uprightMeaning: "Revisiting the past, childhood memories, innocence, and joy.", reversedMeaning: "Living in the past, forgiveness, or missing home.", imagePrompt: "Six of Cups geometric Halloween", image: "/cards/cups-6.jpg" },
  { id: 42, name: "Seven of Cups", nameEn: "Seven of Cups", keywords: ["opportunities", "choices", "wishful thinking", "illusion"], uprightMeaning: "Opportunities, choices, wishful thinking, and illusion.", reversedMeaning: "Alignment, personal values, or overwhelmed by choices.", imagePrompt: "Seven of Cups geometric Halloween", image: "/cards/cups-7.jpg" },
  { id: 43, name: "Eight of Cups", nameEn: "Eight of Cups", keywords: ["disappointment", "abandonment", "withdrawal", "escapism"], uprightMeaning: "Disappointment, abandonment, withdrawal, and escapism.", reversedMeaning: "Avoidance, fear of change, or walking away.", imagePrompt: "Eight of Cups geometric Halloween", image: "/cards/cups-8.jpg" },
  { id: 44, name: "Nine of Cups", nameEn: "Nine of Cups", keywords: ["contentment", "satisfaction", "gratitude", "wish come true"], uprightMeaning: "Contentment, satisfaction, gratitude, and wish come true.", reversedMeaning: "Inner happiness, materialism, or dissatisfaction.", imagePrompt: "Nine of Cups geometric Halloween", image: "/cards/cups-9.jpg" },
  { id: 45, name: "Ten of Cups", nameEn: "Ten of Cups", keywords: ["divine love", "blissful relationships", "harmony", "alignment"], uprightMeaning: "Divine love, blissful relationships, harmony, and alignment.", reversedMeaning: "Disconnection, misaligned values, or struggling relationships.", imagePrompt: "Ten of Cups geometric Halloween", image: "/cards/cups-10.jpg" },
  { id: 46, name: "Page of Cups", nameEn: "Page of Cups", keywords: ["creative opportunities", "intuitive messages", "curiosity", "possibility"], uprightMeaning: "Creative opportunities, intuitive messages, curiosity, and possibility.", reversedMeaning: "New ideas, doubting intuition, or creative blocks.", imagePrompt: "Page of Cups geometric Halloween", image: "/cards/cups-page.jpg" },
  { id: 47, name: "Knight of Cups", nameEn: "Knight of Cups", keywords: ["creativity", "romance", "charm", "imagination"], uprightMeaning: "Creativity, romance, charm, and imagination.", reversedMeaning: "Overactive imagination, unrealistic, or jealousy.", imagePrompt: "Knight of Cups geometric Halloween", image: "/cards/cups-knight.jpg" },
  { id: 48, name: "Queen of Cups", nameEn: "Queen of Cups", keywords: ["compassionate", "caring", "emotionally stable", "intuitive"], uprightMeaning: "Compassionate, caring, emotionally stable, and intuitive.", reversedMeaning: "Inner feelings, self-care, or co-dependency.", imagePrompt: "Queen of Cups geometric Halloween", image: "/cards/cups-queen.jpg" },
  { id: 49, name: "King of Cups", nameEn: "King of Cups", keywords: ["emotionally balanced", "compassionate", "diplomatic"], uprightMeaning: "Emotionally balanced, compassionate, and diplomatic.", reversedMeaning: "Self-compassion, inner feelings, or moodiness.", imagePrompt: "King of Cups geometric Halloween", image: "/cards/cups-king.jpg" },
  // Swords
  { id: 50, name: "Ace of Swords", nameEn: "Ace of Swords", keywords: ["breakthroughs", "new ideas", "mental clarity", "success"], uprightMeaning: "Breakthroughs, new ideas, mental clarity, and success.", reversedMeaning: "Inner clarity, re-thinking an idea, or clouded judgement.", imagePrompt: "Ace of Swords geometric Halloween", image: "/cards/swords-ace.jpg" },
  { id: 51, name: "Two of Swords", nameEn: "Two of Swords", keywords: ["difficult decisions", "weighing up options", "an impasse", "avoidance"], uprightMeaning: "Difficult decisions, weighing up options, an impasse, and avoidance.", reversedMeaning: "Indecision, confusion, or information overload.", imagePrompt: "Two of Swords geometric Halloween", image: "/cards/swords-2.jpg" },
  { id: 52, name: "Three of Swords", nameEn: "Three of Swords", keywords: ["heartbreak", "emotional pain", "sorrow", "grief", "hurt"], uprightMeaning: "Heartbreak, emotional pain, sorrow, grief, and hurt.", reversedMeaning: "Negative self-talk, releasing pain, or optimism.", imagePrompt: "Three of Swords geometric Halloween", image: "/cards/swords-3.jpg" },
  { id: 53, name: "Four of Swords", nameEn: "Four of Swords", keywords: ["rest", "relaxation", "meditation", "contemplation", "recuperation"], uprightMeaning: "Rest, relaxation, meditation, contemplation, and recuperation.", reversedMeaning: "Exhaustion, burn-out, or stagnation.", imagePrompt: "Four of Swords geometric Halloween", image: "/cards/swords-4.jpg" },
  { id: 54, name: "Five of Swords", nameEn: "Five of Swords", keywords: ["conflict", "disagreements", "competition", "defeat", "winning at all costs"], uprightMeaning: "Conflict, disagreements, competition, defeat, and winning at all costs.", reversedMeaning: "Reconciliation, making amends, or past resentment.", imagePrompt: "Five of Swords geometric Halloween", image: "/cards/swords-5.jpg" },
  { id: 55, name: "Six of Swords", nameEn: "Six of Swords", keywords: ["transition", "change", "rite of passage", "releasing baggage"], uprightMeaning: "Transition, change, rite of passage, and releasing baggage.", reversedMeaning: "Personal transition, resistance to change, or unfinished business.", imagePrompt: "Six of Swords geometric Halloween", image: "/cards/swords-6.jpg" },
  { id: 56, name: "Seven of Swords", nameEn: "Seven of Swords", keywords: ["betrayal", "deception", "getting away with something", "acting strategically"], uprightMeaning: "Betrayal, deception, getting away with something, and acting strategically.", reversedMeaning: "Imposter syndrome, self-deceit, or coming clean.", imagePrompt: "Seven of Swords geometric Halloween", image: "/cards/swords-7.jpg" },
  { id: 57, name: "Eight of Swords", nameEn: "Eight of Swords", keywords: ["negative thoughts", "self-imposed restriction", "imprisonment", "victim mentality"], uprightMeaning: "Negative thoughts, self-imposed restriction, imprisonment, and victim mentality.", reversedMeaning: "Self-limiting beliefs, inner critic, or releasing negative thoughts.", imagePrompt: "Eight of Swords geometric Halloween", image: "/cards/swords-8.jpg" },
  { id: 58, name: "Nine of Swords", nameEn: "Nine of Swords", keywords: ["anxiety", "worry", "fear", "depression", "nightmares"], uprightMeaning: "Anxiety, worry, fear, depression, and nightmares.", reversedMeaning: "Inner turmoil, deep-seated fears, or secrets.", imagePrompt: "Nine of Swords geometric Halloween", image: "/cards/swords-9.jpg" },
  { id: 59, name: "Ten of Swords", nameEn: "Ten of Swords", keywords: ["painful endings", "deep wounds", "betrayal", "loss", "crisis"], uprightMeaning: "Painful endings, deep wounds, betrayal, loss, and crisis.", reversedMeaning: "Recovery, regeneration, or resisting an inevitable end.", imagePrompt: "Ten of Swords geometric Halloween", image: "/cards/swords-10.jpg" },
  { id: 60, name: "Page of Swords", nameEn: "Page of Swords", keywords: ["new ideas", "curiosity", "thirst for knowledge", "new ways of communicating"], uprightMeaning: "New ideas, curiosity, thirst for knowledge, and new ways of communicating.", reversedMeaning: "Self-expression, all talk and no action, or haphazard action.", imagePrompt: "Page of Swords geometric Halloween", image: "/cards/swords-page.jpg" },
  { id: 61, name: "Knight of Swords", nameEn: "Knight of Swords", keywords: ["ambitious", "action-oriented", "driven to succeed", "fast-thinking"], uprightMeaning: "Ambitious, action-oriented, driven to succeed, and fast-thinking.", reversedMeaning: "Restless, unfocused, or impulsive.", imagePrompt: "Knight of Swords geometric Halloween", image: "/cards/swords-knight.jpg" },
  { id: 62, name: "Queen of Swords", nameEn: "Queen of Swords", keywords: ["independent", "unbiased judgement", "clear boundaries", "direct communication"], uprightMeaning: "Independent, unbiased judgement, clear boundaries, and direct communication.", reversedMeaning: "Overly-emotional, easily influenced, or cold-hearted.", imagePrompt: "Queen of Swords geometric Halloween", image: "/cards/swords-queen.jpg" },
  { id: 63, name: "King of Swords", nameEn: "King of Swords", keywords: ["mental clarity", "intellectual power", "authority", "truth"], uprightMeaning: "Mental clarity, intellectual power, authority, and truth.", reversedMeaning: "Quiet power, inner truth, or misuse of power.", imagePrompt: "King of Swords geometric Halloween", image: "/cards/swords-king.jpg" },
  // Pentacles
  { id: 64, name: "Ace of Pentacles", nameEn: "Ace of Pentacles", keywords: ["a new financial or career opportunity", "manifestation", "abundance"], uprightMeaning: "A new financial or career opportunity, manifestation, and abundance.", reversedMeaning: "Lost opportunity, lack of planning, or bad investment.", imagePrompt: "Ace of Pentacles geometric Halloween", image: "/cards/pentacles-ace.jpg" },
  { id: 65, name: "Two of Pentacles", nameEn: "Two of Pentacles", keywords: ["multiple priorities", "time management", "prioritisation", "adaptability"], uprightMeaning: "Multiple priorities, time management, prioritisation, and adaptability.", reversedMeaning: "Over-committed, disorganisation, or reprioritisation.", imagePrompt: "Two of Pentacles geometric Halloween", image: "/cards/pentacles-2.jpg" },
  { id: 66, name: "Three of Pentacles", nameEn: "Three of Pentacles", keywords: ["teamwork", "collaboration", "learning", "implementation"], uprightMeaning: "Teamwork, collaboration, learning, and implementation.", reversedMeaning: "Disharmony, misalignment, or working alone.", imagePrompt: "Three of Pentacles geometric Halloween", image: "/cards/pentacles-3.jpg" },
  { id: 67, name: "Four of Pentacles", nameEn: "Four of Pentacles", keywords: ["saving money", "security", "conservatism", "scarcity", "control"], uprightMeaning: "Saving money, security, conservatism, scarcity, and control.", reversedMeaning: "Over-spending, greed, or self-protection.", imagePrompt: "Four of Pentacles geometric Halloween", image: "/cards/pentacles-4.jpg" },
  { id: 68, name: "Five of Pentacles", nameEn: "Five of Pentacles", keywords: ["financial loss", "poverty", "lack mindset", "isolation", "worry"], uprightMeaning: "Financial loss, poverty, lack mindset, isolation, and worry.", reversedMeaning: "Recovery from financial loss, spiritual poverty, or isolation.", imagePrompt: "Five of Pentacles geometric Halloween", image: "/cards/pentacles-5.jpg" },
  { id: 69, name: "Six of Pentacles", nameEn: "Six of Pentacles", keywords: ["giving", "receiving", "sharing wealth", "generosity", "charity"], uprightMeaning: "Giving, receiving, sharing wealth, generosity, and charity.", reversedMeaning: "Self-care, unpaid debts, or one-sided charity.", imagePrompt: "Six of Pentacles geometric Halloween", image: "/cards/pentacles-6.jpg" },
  { id: 70, name: "Seven of Pentacles", nameEn: "Seven of Pentacles", keywords: ["long-term view", "sustainable results", "perseverance", "investment"], uprightMeaning: "Long-term view, sustainable results, perseverance, and investment.", reversedMeaning: "Lack of long-term vision, limited success, or impatience.", imagePrompt: "Seven of Pentacles geometric Halloween", image: "/cards/pentacles-7.jpg" },
  { id: 71, name: "Eight of Pentacles", nameEn: "Eight of Pentacles", keywords: ["apprenticeship", "repetitive tasks", "mastery", "skill development"], uprightMeaning: "Apprenticeship, repetitive tasks, mastery, and skill development.", reversedMeaning: "Self-development, perfectionism, or lack of focus.", imagePrompt: "Eight of Pentacles geometric Halloween", image: "/cards/pentacles-8.jpg" },
  { id: 72, name: "Nine of Pentacles", nameEn: "Nine of Pentacles", keywords: ["abundance", "luxury", "self-sufficiency", "financial independence"], uprightMeaning: "Abundance, luxury, self-sufficiency, and financial independence.", reversedMeaning: "Self-worth, over-investment in work, or hustling.", imagePrompt: "Nine of Pentacles geometric Halloween", image: "/cards/pentacles-9.jpg" },
  { id: 73, name: "Ten of Pentacles", nameEn: "Ten of Pentacles", keywords: ["wealth", "financial security", "family", "long-term success", "contribution"], uprightMeaning: "Wealth, financial security, family, long-term success, and contribution.", reversedMeaning: "The dark side of wealth, financial failure, or loneliness.", imagePrompt: "Ten of Pentacles geometric Halloween", image: "/cards/pentacles-10.jpg" },
  { id: 74, name: "Page of Pentacles", nameEn: "Page of Pentacles", keywords: ["manifestation", "financial opportunity", "skill development"], uprightMeaning: "Manifestation, financial opportunity, and skill development.", reversedMeaning: "Lack of progress, procrastination, or learn from failure.", imagePrompt: "Page of Pentacles geometric Halloween", image: "/cards/pentacles-page.jpg" },
  { id: 75, name: "Knight of Pentacles", nameEn: "Knight of Pentacles", keywords: ["hard work", "productivity", "routine", "conservatism"], uprightMeaning: "Hard work, productivity, routine, and conservatism.", reversedMeaning: "Self-discipline, boredom, or feeling stuck.", imagePrompt: "Knight of Pentacles geometric Halloween", image: "/cards/pentacles-knight.jpg" },
  { id: 76, name: "Queen of Pentacles", nameEn: "Queen of Pentacles", keywords: ["nurturing", "practical", "providing financially", "a working parent"], uprightMeaning: "Nurturing, practical, providing financially, and a working parent.", reversedMeaning: "Financial independence, self-care, or work-home conflict.", imagePrompt: "Queen of Pentacles geometric Halloween", image: "/cards/pentacles-queen.jpg" },
  { id: 77, name: "King of Pentacles", nameEn: "King of Pentacles", keywords: ["wealth", "business", "leadership", "security", "discipline", "abundance"], uprightMeaning: "Wealth, business, leadership, security, discipline, and abundance.", reversedMeaning: "Financially inept, obsessed with wealth, or stubborn.", imagePrompt: "King of Pentacles geometric Halloween", image: "/cards/pentacles-king.jpg" }
];

export const fullDeck: TarotCard[] = [...majorArcana, ...minorArcana];
