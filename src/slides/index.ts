export interface Slide {
  id: number;
  title: string;
  summary: string;
  content: SlideContent;
}

export interface SlideContent {
  type: "intro" | "rule" | "example" | "practice" | "summary";
  body: string;
  examples?: string[];
  tip?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "What is a Full Stop?",
    summary: "Introduction to full stops",
    content: {
      type: "intro",
      body: "A **full stop** ( . ) is a punctuation mark used at the end of a sentence.",
      tip: "In American English, it is called a **period**. In British English, it is called a **full stop**.",
    },
  },
  {
    id: 2,
    title: "When Do We Use a Full Stop?",
    summary: "Rules for using full stops",
    content: {
      type: "rule",
      body: "We use a full stop at the end of a **statement** (a sentence that gives information).",
      examples: [
        "The cat sat on the mat.",
        "She likes to read books.",
        "The sun rises in the east.",
      ],
    },
  },
  {
    id: 3,
    title: "Full Stop vs. Other Punctuation",
    summary: "Comparing punctuation marks",
    content: {
      type: "rule",
      body: "Different sentences need different punctuation marks at the end.",
      examples: [
        "I like dogs. → Full stop (statement)",
        "Do you like dogs? → Question mark (question)",
        "What a big dog! → Exclamation mark (strong feeling)",
      ],
      tip: "Always ask: Is this a statement, a question, or an exclamation?",
    },
  },
  {
    id: 4,
    title: "Let's Look at Examples",
    summary: "Correct & incorrect examples",
    content: {
      type: "example",
      body: "Can you spot which sentences have the correct punctuation?",
      examples: [
        "✅  My name is Tom.",
        "❌  My name is Tom (missing full stop)",
        "✅  She went to school.",
        "❌  She went to school? (wrong punctuation — not a question)",
      ],
    },
  },
  {
    id: 5,
    title: "Practice Time!",
    summary: "Add the missing full stops",
    content: {
      type: "practice",
      body: "Add a full stop to each sentence below:",
      examples: [
        "1. The dog is very big___",
        "2. I love eating pizza___",
        "3. We went to the park yesterday___",
        "4. Birds can fly___",
      ],
      tip: "Check each sentence — does it give information? Then it needs a full stop!",
    },
  },
  {
    id: 6,
    title: "Remember!",
    summary: "Key takeaways",
    content: {
      type: "summary",
      body: "Here is what we learned today:",
      examples: [
        "📌 A full stop ( . ) goes at the END of a statement.",
        "📌 It tells the reader the sentence is finished.",
        "📌 Questions end with ? and exclamations end with !",
        "📌 Every sentence needs an ending punctuation mark.",
      ],
      tip: "Great job today! Keep practising your full stops! ✏️",
    },
  },
];
