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
  category: "writing-lessons" | "writing-of-the-week";
  title: string;
  description: string;
  color: string;
  slides: Slide[];
}

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

export const lessons: Lesson[] = [
  // ─── Writing Lessons ─────────────────────────────────────────────
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

  // ─── Writing of the Week ─────────────────────────────────────────
  {
    id: "script-writing",
    category: "writing-of-the-week",
    title: "Script Writing",
    description: "Explore how to write a script for a play or short scene.",
    color: "#10b981",
    slides: [
      {
        id: 1,
        title: "WALT",
        summary: "What we are learning",
        content: {
          type: "walt",
          body: "We Are Learning To write a script for a play or short scene.",
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
            "I can explain what a script is and when it is used.",
            "I can set out a script correctly with character names and stage directions.",
            "I can write dialogue that sounds like a real conversation.",
          ],
        },
      },
      {
        id: 3,
        title: "What is a Script?",
        summary: "Explanation and examples",
        content: {
          type: "learn",
          body: "A script is a piece of writing for a play, film, or TV show. Instead of telling a story, it shows what characters say and do.\n\nA script has three main parts:",
          examples: [
            "Character name — who is speaking (written in capital letters)",
            "Dialogue — what the character says",
            "Stage directions — what the character does (written in brackets)",
          ],
          tip: "Scripts do not use speech marks. The character name tells you who is speaking.",
        },
      },
      {
        id: 4,
        title: "Practice 1 — Read the Script",
        summary: "Practice 1: read and identify",
        content: {
          type: "practice",
          body: "Read the script below. Find the character name, the dialogue, and the stage direction.",
          examples: [
            "SAM:  (looking out of the window)  It is raining again.",
            "LILY:  We cannot go to the park then.",
            "SAM:  (turning around)  We could play a board game instead.",
            "LILY:  Great idea!",
          ],
          tip: "Can you spot the stage directions? They are always in brackets.",
        },
      },
      {
        id: 5,
        title: "Practice 2 — Fix the Layout",
        summary: "Practice 2: fix the script layout",
        content: {
          type: "practice",
          body: "This script has layout mistakes. How would you fix each line?",
          examples: [
            "1.  tom said he was hungry.",
            "2.  (Anna walks in) Anna: hello everyone",
            "3.  MUM: where have you been? she looked worried.",
            "4.  BEN sits down. I am so tired.",
          ],
          tip: "Character names go in CAPITALS. Stage directions go in (brackets). No speech marks needed.",
        },
      },
      {
        id: 6,
        title: "Practice 3 — Continue the Script",
        summary: "Practice 3: write the next lines",
        content: {
          type: "practice",
          body: "Read the start of this script. Write the next 3 to 4 lines to continue it.",
          examples: [
            "TEACHER:  (standing at the board)  Right, class. Today we have a surprise.",
            "ALEX:  What kind of surprise?",
            "TEACHER:  We are going on a trip to the science museum.",
            "ALEX:  (to the person next to them)  ...",
          ],
          tip: "Think about how the characters feel. Use a stage direction to show it.",
        },
      },
      {
        id: 7,
        title: "Apply It!",
        summary: "Independent writing activity",
        content: {
          type: "apply",
          body: "Write a short script about two friends who disagree about what to do after school.\n\nYour script must have:\n- At least 2 characters\n- At least 6 lines of dialogue\n- At least 2 stage directions\n\nYou have 5 to 10 minutes. Go!",
          tip: "Give your characters names and think about how they speak. Do they use short sentences or long ones?",
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
            "A script is writing for a play, film, or TV show.",
            "Character names are written in CAPITAL LETTERS.",
            "Stage directions are written in (brackets).",
            "Scripts do not use speech marks.",
            "Dialogue should sound like a natural conversation.",
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
            "Can you explain what a script is?",
            "Can you set out a script with character names and stage directions?",
            "Can you write dialogue that sounds like a real conversation?",
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
          body: "How is writing a script different from writing a story?\n\nThink about:\n- What does a script leave out that a story includes?\n- What does a script show that a story does not?",
          tip: "There is no right or wrong answer. Just think and share your ideas.",
        },
      },
    ],
  },
];
