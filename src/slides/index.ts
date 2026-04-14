// ─── Shared ──────────────────────────────────────────────────────────────────

export interface Category {
  id: "writing-lessons" | "writing-of-the-week";
  title: string;
  description: string;
  color: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "writing-lessons",
    title: "Writing Lessons",
    description: "Step-by-step lessons on grammar, punctuation, and writing skills.",
    color: "#4f86f7",
    icon: "L",
  },
  {
    id: "writing-of-the-week",
    title: "Writing of the Week",
    description: "Weekly writing activities and different text types to explore.",
    color: "#10b981",
    icon: "W",
  },
];

// ─── Writing Lessons (slide format) ──────────────────────────────────────────

export interface Slide {
  id: number;
  title: string;
  summary: string;
  content: SlideContent;
}

export interface SlideContent {
  type: "walt" | "success" | "learn" | "practice" | "apply" | "recap" | "evaluate" | "think";
  body: string;
  examples?: string[];
  tip?: string;
}

export interface Lesson {
  id: string;
  category: "writing-lessons";
  title: string;
  description: string;
  color: string;
  slides: Slide[];
}

// ─── Writing of the Week (instruction sheet format) ──────────────────────────

export interface WritingSheet {
  id: string;
  category: "writing-of-the-week";
  title: string;
  description: string;
  color: string;
  walt: string;
  instructions: string[];       // Teacher voice, numbered steps
  sentenceStarters: string[];
  wordBank: string[];
  examples: SheetExample[];     // Shown on page 2
}

export interface SheetExample {
  label: string;   // e.g. "Example Script"
  text: string;    // The actual example text (use \n for line breaks)
  note?: string;   // Optional annotation / teacher comment
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const lessons: Lesson[] = [
  {
    id: "full-stop",
    category: "writing-lessons",
    title: "Full Stop",
    description: "Learn when and how to use a full stop at the end of a sentence.",
    color: "#4f86f7",
    slides: [
      {
        id: 1,
        title: "WALT",
        summary: "What we are learning",
        content: {
          type: "walt",
          body: "We Are Learning To use a full stop ( . ) correctly at the end of a sentence.",
        },
      },
      {
        id: 2,
        title: "Success Criteria",
        summary: "I can...",
        content: {
          type: "success",
          body: "By the end of this lesson, you will be able to:",
          examples: [
            "I can explain what a full stop is.",
            "I can use a full stop at the end of a statement.",
            "I can tell the difference between a full stop, a question mark, and an exclamation mark.",
          ],
        },
      },
      {
        id: 3,
        title: "What is a Full Stop?",
        summary: "Explanation and examples",
        content: {
          type: "learn",
          body: "A full stop ( . ) is a punctuation mark that goes at the end of a statement — a sentence that gives information. It tells the reader: this sentence is finished.",
          examples: [
            "The sun is hot.",
            "I have a dog.",
            "She reads every night.",
          ],
          tip: "In American English it is called a period. In British English it is called a full stop. Same thing!",
        },
      },
      {
        id: 4,
        title: "Practice 1 — Spot the Full Stop",
        summary: "Practice 1: spot the full stop",
        content: {
          type: "practice",
          body: "Which sentences have a full stop in the right place? Give a thumbs up or thumbs down.",
          examples: [
            "1.  My cat is fluffy.",
            "2.  I like ice cream",
            "3.  The sky is blue.",
            "4.  Do you like pizza.",
          ],
          tip: "Remember — a full stop goes at the end of a statement, not a question!",
        },
      },
      {
        id: 5,
        title: "Practice 2 — Add the Full Stop",
        summary: "Practice 2: add missing full stops",
        content: {
          type: "practice",
          body: "Copy each sentence and add a full stop in the right place.",
          examples: [
            "1.  The bird sat on the branch ___",
            "2.  We played football at lunch ___",
            "3.  My mum makes the best soup ___",
            "4.  There are eight planets in our solar system ___",
          ],
        },
      },
      {
        id: 6,
        title: "Practice 3 — Fix the Mistakes",
        summary: "Practice 3: fix the punctuation",
        content: {
          type: "practice",
          body: "Each sentence has a punctuation mistake. Rewrite it correctly.",
          examples: [
            "1.  the dog ran into the garden",
            "2.  She went to the shop?",
            "3.  my favourite colour is green",
            "4.  We had a great time at the beach",
          ],
          tip: "Check: capital letter at the start AND full stop at the end.",
        },
      },
      {
        id: 7,
        title: "Apply It!",
        summary: "Independent writing activity",
        content: {
          type: "apply",
          body: "Write 5 sentences about your morning. Each sentence must have a capital letter at the start and a full stop at the end.\n\nYou have 5 to 10 minutes. Go!",
          tip: "Example:  I woke up at seven o'clock.  I had toast for breakfast.",
        },
      },
      {
        id: 8,
        title: "What Did We Learn?",
        summary: "Recap",
        content: {
          type: "recap",
          body: "Let's remember what we covered today:",
          examples: [
            "A full stop ( . ) goes at the end of a statement.",
            "A statement is a sentence that gives information.",
            "Every sentence needs a capital letter at the start.",
            "Statements end with .     Questions end with ?     Exclamations end with !",
          ],
        },
      },
      {
        id: 9,
        title: "So... Can You?",
        summary: "Evaluation",
        content: {
          type: "evaluate",
          body: "Let's check what you have learned. Give yourself a score:",
          examples: [
            "Can you explain what a full stop is?",
            "Can you use a full stop at the end of a statement?",
            "Can you tell the difference between  .  ?  and  !",
          ],
          tip: "Be honest with yourself — it helps you know what to practise next.",
        },
      },
      {
        id: 10,
        title: "Think About It...",
        summary: "Thinking question",
        content: {
          type: "think",
          body: "What do you think would happen if we stopped using full stops in writing?\n\nTry reading this:\n\n\"I went to school I saw my friend we played a game it was so fun I want to do it again tomorrow\"",
          tip: "How does it feel to read? Why do full stops matter?",
        },
      },
    ],
  },
];

export const writingSheets: WritingSheet[] = [
  {
    id: "script-writing",
    category: "writing-of-the-week",
    title: "Script Writing",
    description: "Write a short script for a play or scene using correct layout.",
    color: "#10b981",
    walt: "We Are Learning To write a script for a play or short scene.",
    instructions: [
      "Think of two characters. Who are they? Where are they? What are they talking about?",
      "Write each character's name in CAPITAL LETTERS, followed by a colon ( : ).",
      "Write what your character says right after their name. Do not use speech marks in a script.",
      "Add stage directions to show how a character moves, feels, or speaks. Put them in brackets like this: (nervously) or (walking to the door).",
      "Write at least 6 lines of dialogue. Make it sound like a real conversation — short and natural.",
      "Add at least 2 stage directions anywhere in your script.",
      "Read your script back. Does it make sense? Does it sound like something people would really say?",
    ],
    sentenceStarters: [
      "(looking worried) ...",
      "(quietly) ...",
      "(turning around) ...",
      "I think we should ...",
      "But what about ...",
      "That is not fair because ...",
      "Wait, I have an idea ...",
      "Are you sure that ...",
    ],
    wordBank: [
      "nervously", "quietly", "loudly", "sadly", "excitedly",
      "angrily", "carefully", "suddenly", "whispers", "shouts",
      "argues", "suggests", "agrees", "disagrees", "replies",
      "sighs", "laughs", "pauses", "nods", "exits",
    ],
    examples: [
      {
        label: "Example Script",
        text: "SAM:  (looking out of the window)  It is raining again.\nLILY:  We cannot go to the park then.\nSAM:  (turning around)  We could play a board game instead.\nLILY:  But we played that yesterday. Can we do something different?\nSAM:  (sitting down)  How about we make something? Like a den?\nLILY:  (excitedly)  Yes! Let us use the sofa cushions.",
        note: "Notice: character names are in CAPITALS, stage directions are in brackets, and there are no speech marks.",
      },
      {
        label: "What a Good Script Looks Like",
        text: "CHARACTER NAME:  (stage direction)  Dialogue goes here.\nOTHER CHARACTER:  Their reply goes here.\nCHARACTER NAME:  (another stage direction)  More dialogue.",
        note: "Use this layout every time. Character name first, then the colon, then what they say.",
      },
    ],
  },
];
