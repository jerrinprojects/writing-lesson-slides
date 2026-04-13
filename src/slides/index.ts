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
  title: string;
  description: string;
  color: string;
  slides: Slide[];
}

export const lessons: Lesson[] = [
  {
    id: "full-stop",
    title: "Full Stop",
    description: "Learn when and how to use a full stop at the end of a sentence.",
    color: "#4f86f7",
    slides: [
      {
        id: 1,
        title: "WALT",
        summary: "What we're learning",
        content: {
          type: "walt",
          body: "We Are Learning To use a **full stop** ( . ) correctly at the end of a sentence.",
        },
      },
      {
        id: 2,
        title: "Success Criteria",
        summary: "I can…",
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
        summary: "Explanation + examples",
        content: {
          type: "learn",
          body: "A **full stop** ( . ) is a punctuation mark that goes at the end of a **statement** — a sentence that gives information. It tells the reader: \"This sentence is finished.\"",
          examples: [
            "The sun is hot.",
            "I have a dog.",
            "She reads every night.",
          ],
          tip: "In American English it is called a **period**. In British English it is called a **full stop**. Same thing!",
        },
      },
      {
        id: 4,
        title: "Practice 1 — Spot the Full Stop",
        summary: "Practice 1: spot the full stop",
        content: {
          type: "practice",
          body: "Which sentences have a full stop in the right place? Give a thumbs up 👍 or thumbs down 👎.",
          examples: [
            "1. My cat is fluffy.",
            "2. I like ice cream",
            "3. The sky is blue.",
            "4. Do you like pizza.",
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
            "1. The bird sat on the branch___",
            "2. We played football at lunch___",
            "3. My mum makes the best soup___",
            "4. There are eight planets in our solar system___",
          ],
        },
      },
      {
        id: 6,
        title: "Practice 3 — Fix the Mistakes",
        summary: "Practice 3: fix the punctuation",
        content: {
          type: "practice",
          body: "Each sentence below has a punctuation mistake. Rewrite it correctly.",
          examples: [
            "1. the dog ran into the garden  →  (two mistakes!)",
            "2. She went to the shop?  →  (wrong punctuation)",
            "3. my favourite colour is green  →  (two mistakes!)",
            "4. We had a great time at the beach  →  (missing something)",
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
          body: "Write **5 sentences** about your morning. Each sentence must have a capital letter at the start and a full stop at the end.\n\nYou have 5–10 minutes. Go!",
          tip: "Example: \"I woke up at seven o'clock. I had toast for breakfast.\"",
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
            "📌 A full stop ( . ) goes at the END of a statement.",
            "📌 A statement is a sentence that gives information.",
            "📌 Every sentence needs a capital letter at the start.",
            "📌 Statements → .     Questions → ?     Exclamations → !",
          ],
        },
      },
      {
        id: 9,
        title: "So… Can You?",
        summary: "Evaluation",
        content: {
          type: "evaluate",
          body: "Let's check! Give yourself a score: 🌟 = Yes!   ⭐ = Getting there   ☆ = Need more practice",
          examples: [
            "🔲  Can you explain what a full stop is?",
            "🔲  Can you use a full stop at the end of a statement?",
            "🔲  Can you tell the difference between . ? and !",
          ],
          tip: "Be honest with yourself — it helps you know what to practise next!",
        },
      },
      {
        id: 10,
        title: "Think About It…",
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
