// ─── Shared ──────────────────────────────────────────────────────────────────

export interface Category {
  id: "writing-lessons" | "writing-of-the-week" | "group-discussion";
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
  {
    id: "group-discussion",
    title: "Group Discussion",
    description: "Discussion questions to get students talking and thinking together.",
    color: "#8b5cf6",
    icon: "D",
  },
];

// ─── Writing Lessons (slide format) ──────────────────────────────────────────

export interface Slide {
  id: number;
  title: string;
  summary: string;
  content: SlideContent;
}

export interface SlideTranslation {
  body: string;
  tip?: string;
}

export interface SlideContent {
  type: "walt" | "success" | "learn" | "practice" | "apply" | "recap" | "evaluate" | "think" | "discussion"
      | "hook" | "part-overview" | "info" | "example-slide" | "script-structure" | "checklist";
  body: string;
  examples?: string[];
  tip?: string;
  links?: { label: string; url: string }[];
  translations?: {
    zh?: SlideTranslation;  // Chinese Simplified
    vi?: SlideTranslation;  // Vietnamese
  };
}

export interface Lesson {
  id: string;
  category: "writing-lessons" | "group-discussion";
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

  // ─── Narrative to Production Script ──────────────────────────────
  {
    id: "narrative-to-script",
    category: "writing-lessons",
    title: "Narrative to Production Script",
    description: "Learn how to convert a narrative scene into a correctly formatted production script.",
    color: "#4f86f7",
    slides: [
      {
        id: 0,
        title: "Which one would you use?",
        summary: "Hook — narrative vs script",
        content: {
          type: "hook",
          body: "Read both versions of the **same scene**. Which one would you rather have if you were an actor?\n\n**Narrative:**\n\"Tom walked in nervously and told the class he had something important to say.\"\n\n**Script:**\nINT. CLASSROOM – MORNING\nTOM:  (walking in, nervous)  I need to tell you something.\n\nTurn and talk: What's different? Which one tells the actor exactly what to do?",
          tip: "Scripts are written FOR actors — every detail needs to be visible or speakable.",
          links: [
            { label: "📺 Inside Out (YouTube)", url: "https://www.youtube.com/watch?v=tZ7Z8Gp-yaE" },
            { label: "📺 Monsters Inc. (YouTube)", url: "https://www.youtube.com/watch?v=U9CSwpefX-Q" },
          ],
        },
      },
      {
        id: 1,
        title: "WALT",
        summary: "What we are learning",
        content: {
          type: "walt",
          body: "We Are Learning To write a **production script** by converting a narrative story into script format.",
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
            "1. I can write character names in capital letters followed by a colon.",
            "2. I can write stage directions in (brackets) to show actions and feelings.",
            "3. I can write a scene heading that shows the setting.",
            "4. I can write dialogue that sounds like real speech — no speech marks.",
          ],
        },
      },
      {
        id: 3,
        title: "Narrative vs Script: What's Different?",
        summary: "Key differences",
        content: {
          type: "learn",
          body: "A narrative tells the story to the reader. A script tells the actor what to do.",
          examples: [
            "1. Narrative:  \"Tom walked in nervously and said he had something important to say.\"",
            "2. Script:     TOM: (walking in, nervous)  I need to tell you something.",
            "3. Scripts do not use speech marks.",
            "4. Scripts add a scene heading:  INT. CLASSROOM, MORNING",
            "   INT. (Interior) = inside     |     EXT. (Exterior) = outside",
          ],
          tip: "In a script, every word is either said out loud or shown on stage.",
        },
      },
      {
        id: 4,
        title: "4 Key Elements of a Script",
        summary: "What every script needs",
        content: {
          type: "learn",
          body: "Every production script must include these four things:",
          examples: [
            "1. CHARACTER NAMES in capital letters, followed by a colon.  e.g.  TANE:",
            "2. Stage directions in (brackets) to show actions and feelings.  e.g.  (nervously) or (walking in)",
            "3. A scene heading that shows where and when.  e.g.  INT. CLASSROOM, MORNING",
            "4. Dialogue that sounds like real speech. No speech marks. No \"he said\" or \"she whispered\".",
          ],
          tip: "If any of these four are missing, it is not a complete production script.",
        },
      },
      {
        id: 5,
        title: "Practice 1 — Simple Conversion",
        summary: "Practice 1: basic layout",
        content: {
          type: "practice",
          body: "Read the narrative below. Convert it into a production script using correct layout.\n\nNarrative:\n\"Leilani asked Sione if he had seen her pencil case. He said no, but suggested she check under the table. She looked and found it.\"",
          examples: [
            "Example script:",
            "LEILANI:  Have you seen my pencil case?",
            "SIONE:  No. Did you check under the table?",
            "LEILANI:  (looking under the table)  Oh — found it!",
          ],
          tip: "Focus on the basics: CAPITAL NAME, colon, no speech marks.",
        },
      },
      {
        id: 6,
        title: "Practice 2 — Add Stage Directions",
        summary: "Practice 2: stage directions",
        content: {
          type: "practice",
          body: "This scene is more complex. Convert it and add at least 3 stage directions in (brackets).\n\nNarrative:\n\"Tane burst into the classroom, out of breath. He told Aroha the bus had broken down and he'd run the whole way. Aroha laughed and handed him a water bottle. Tane thanked her, then noticed the test papers on the desks and his expression changed.\"",
          examples: [
            "Example script:",
            "INT. CLASSROOM – MORNING",
            "TANE:  (running in, out of breath)  The bus broke down. I ran the whole way.",
            "AROHA:  (laughing)  You ran? The whole way?",
            "TANE:  (nodding, exhausted)  Every step.",
            "AROHA:  (handing him a water bottle)  Here. Drink.",
            "TANE:  (taking it, then freezing)  Wait — are those test papers?",
          ],
          tip: "Start with the scene heading. Add (brackets) before or after dialogue — wherever they make most sense.",
        },
      },
      {
        id: 7,
        title: "Practice 3 — Full Scene Workshop",
        summary: "Practice 3: full scene",
        content: {
          type: "practice",
          body: "Convert this full scene into a production script. Include a scene heading, stage directions, and at least 3 characters.\n\nNarrative:\n\"It was the morning of the science fair. Mele walked in and saw that someone had knocked over her model. She looked around the room. Rangi was standing nearby looking guilty. Their teacher, Ms Fono, came in and asked what had happened. Mele started to say something, but Rangi interrupted and admitted it was an accident — he had been trying to move it so it wouldn't fall. Mele hesitated, then said it was okay.\"",
          tip: "This one is yours to complete. Take your time — a great script needs detail.",
        },
      },
      {
        id: 9,
        title: "Recap: 4 Things Every Script Needs",
        summary: "Recap",
        content: {
          type: "recap",
          body: "Remember these four things every time you write a script:",
          examples: [
            "1. Character names in capital letters, followed by a colon.  e.g.  TANE:",
            "2. Stage directions in (brackets) to show actions and feelings.  e.g.  (nervously)",
            "3. A scene heading that shows the setting.  e.g.  INT. CLASSROOM, MORNING",
            "4. Dialogue that sounds like real speech. No speech marks.",
          ],
        },
      },
      {
        id: 10,
        title: "So... Can You?",
        summary: "Evaluation",
        content: {
          type: "evaluate",
          body: "Look at your completed script. Give yourself a score from 1 to 4 for each:",
          examples: [
            "All character names in CAPITAL LETTERS — 1 / 2 / 3 / 4",
            "Stage directions in (brackets) — 1 / 2 / 3 / 4",
            "Dialogue sounds like natural speech — 1 / 2 / 3 / 4",
            "No speech marks used anywhere — 1 / 2 / 3 / 4",
            "Scene heading is correct — 1 / 2 / 3 / 4",
          ],
          tip: "4 = done correctly every time.  2 = done sometimes.  1 = needs fixing.",
        },
      },
      {
        id: 11,
        title: "Think About It...",
        summary: "Thinking question",
        content: {
          type: "think",
          body: "Can a script tell a story just as powerfully as a narrative?\n\nOr does it lose something when you take away the description?",
          tip: "Think about what a script can do that a narrative can't — and what it can't do that a narrative can.",
        },
      },
    ],
  },

  // ─── Group Discussion ─────────────────────────────────────────────
  {
    id: "t2-day1",
    category: "group-discussion",
    title: "T2 Day 1",
    description: "Discussion questions to kick off Term 2 — reconnect, big questions, and goal setting.",
    color: "#8b5cf6",
    slides: [
      {
        id: 1,
        title: "Reconnect",
        summary: "Holiday highlight in 3 words",
        content: {
          type: "discussion",
          body: "Holiday highlight in exactly 3 words — go!",
          tip: "Share with a partner first, then a few to the class.",
          translations: {
            zh: { body: "用三个词概括你假期中最难忘的事——开始！", tip: "先和同伴分享，然后再和全班同学分享。" },
            vi: { body: "Điểm nổi bật của kỳ nghỉ trong đúng 3 từ — bắt đầu!", tip: "Chia sẻ với bạn bên cạnh trước, sau đó chia sẻ với cả lớp." },
          },
        },
      },
      {
        id: 2,
        title: "Reconnect",
        summary: "Rate your holidays",
        content: {
          type: "discussion",
          body: "Rate your holidays 1 to 10 and explain why.",
          tip: "Quick whole-class sharing.",
          translations: {
            zh: { body: "给你的假期打1到10分，并说明原因。", tip: "快速与全班同学分享。" },
            vi: { body: "Đánh giá kỳ nghỉ của bạn từ 1 đến 10 và giải thích lý do.", tip: "Chia sẻ nhanh với cả lớp." },
          },
        },
      },
      {
        id: 3,
        title: "Big Question",
        summary: "Liked or respected?",
        content: {
          type: "discussion",
          body: "Is it better to be liked or respected?\n\nCan you have both?",
          translations: {
            zh: { body: "被喜欢和被尊重，哪个更重要？\n\n两者可以兼得吗？" },
            vi: { body: "Được yêu thích hay được tôn trọng thì tốt hơn?\n\nBạn có thể có cả hai không?" },
          },
        },
      },
      {
        id: 4,
        title: "Big Question",
        summary: "Change one school rule",
        content: {
          type: "discussion",
          body: "If you could change one rule at school, what would it be — and why?",
          translations: {
            zh: { body: "如果你可以改变学校的一条规定，你会改变什么——为什么？" },
            vi: { body: "Nếu bạn có thể thay đổi một quy tắc ở trường, đó sẽ là gì — và tại sao?" },
          },
        },
      },
      {
        id: 5,
        title: "Big Question",
        summary: "Smartest or kindest?",
        content: {
          type: "discussion",
          body: "Would you rather be the smartest person in the room or the kindest?\n\nWhy?",
          translations: {
            zh: { body: "你更愿意成为房间里最聪明的人，还是最善良的人？\n\n为什么？" },
            vi: { body: "Bạn muốn là người thông minh nhất hay tốt bụng nhất trong phòng?\n\nTại sao?" },
          },
        },
      },
      {
        id: 6,
        title: "Big Question",
        summary: "Social media: good or harm?",
        content: {
          type: "discussion",
          body: "Is social media doing more good or more harm for people our age?",
          translations: {
            zh: { body: "对于我们这个年龄段的人来说，社交媒体是利多还是弊多？" },
            vi: { body: "Mạng xã hội đang mang lại nhiều lợi ích hay tác hại hơn cho người ở độ tuổi chúng ta?" },
          },
        },
      },
      {
        id: 7,
        title: "Big Question",
        summary: "Students have a say?",
        content: {
          type: "discussion",
          body: "Should students have a say in what they learn at school?",
          translations: {
            zh: { body: "学生应该对学校的学习内容有发言权吗？" },
            vi: { body: "Học sinh có nên có tiếng nói trong việc quyết định nội dung học ở trường không?" },
          },
        },
      },
      {
        id: 8,
        title: "Term 2 Goal Setting",
        summary: "One thing to get better at",
        content: {
          type: "discussion",
          body: "One thing I want to get better at this term.",
          tip: "Share with a partner first, then share out to the class.",
          translations: {
            zh: { body: "这学期我想提升的一件事。", tip: "先和同伴分享，然后再向全班分享。" },
            vi: { body: "Một điều tôi muốn cải thiện trong học kỳ này.", tip: "Chia sẻ với bạn bên cạnh trước, sau đó chia sẻ với cả lớp." },
          },
        },
      },
      {
        id: 9,
        title: "Term 2 Goal Setting",
        summary: "T1 challenge to tackle differently",
        content: {
          type: "discussion",
          body: "What is something that was hard in Term 1 that you want to tackle differently this term?",
          tip: "Share with a partner first, then share out to the class.",
          translations: {
            zh: { body: "在第一学期，有什么困难是你希望这学期以不同方式来应对的？", tip: "先和同伴分享，然后再向全班分享。" },
            vi: { body: "Có điều gì khó khăn trong Học kỳ 1 mà bạn muốn giải quyết theo cách khác trong học kỳ này?", tip: "Chia sẻ với bạn bên cạnh trước, sau đó chia sẻ với cả lớp." },
          },
        },
      },
    ],
  },

  {
    id: "discussion-apr23",
    category: "group-discussion",
    title: "Apr 23 Discussion",
    description: "Five discussion questions on values, school, the world, personal reflection, and hypotheticals.",
    color: "#8b5cf6",
    slides: [
      {
        id: 1,
        title: "Values",
        summary: "Is it ever okay to lie?",
        content: {
          type: "discussion",
          body: "Is it ever okay to lie?\n\nIf yes — when?",
          translations: {
            zh: { body: "撒谎有时候是可以的吗？\n\n如果是——什么时候？" },
            vi: { body: "Có khi nào nói dối là được phép không?\n\nNếu có — khi nào?" },
          },
        },
      },
      {
        id: 2,
        title: "School & Learning",
        summary: "What is the point of homework?",
        content: {
          type: "discussion",
          body: "What is the point of homework?\n\nIs it actually helping you — or not?",
          translations: {
            zh: { body: "做作业的意义是什么？\n\n它真的对你有帮助吗——还是没有？" },
            vi: { body: "Mục đích của bài tập về nhà là gì?\n\nNó có thực sự giúp ích cho bạn không — hay không?" },
          },
        },
      },
      {
        id: 3,
        title: "Big Picture",
        summary: "Fix one problem in the world",
        content: {
          type: "discussion",
          body: "If you could fix one problem in the world right now, what would it be — and why?",
          translations: {
            zh: { body: "如果你现在能解决世界上的一个问题，那会是什么——为什么？" },
            vi: { body: "Nếu bạn có thể giải quyết một vấn đề trên thế giới ngay bây giờ, đó sẽ là gì — và tại sao?" },
          },
        },
      },
      {
        id: 4,
        title: "Personal Reflection",
        summary: "Something you think differently about now",
        content: {
          type: "discussion",
          body: "What is something you believed a year ago that you think differently about now?",
          translations: {
            zh: { body: "一年前你相信的某件事，现在你的想法是否已经改变了？" },
            vi: { body: "Có điều gì bạn tin tưởng một năm trước mà bây giờ bạn nghĩ khác đi không?" },
          },
        },
      },
      {
        id: 5,
        title: "Hypothetical",
        summary: "Swap lives with anyone for a week",
        content: {
          type: "discussion",
          body: "If you could swap lives with anyone for one week — real or fictional — who would it be and why?",
          translations: {
            zh: { body: "如果你可以和任何人交换一周的生活——真实的或虚构的——你会选谁？为什么？" },
            vi: { body: "Nếu bạn có thể hoán đổi cuộc sống với bất kỳ ai trong một tuần — thật hay hư cấu — đó sẽ là ai và tại sao?" },
          },
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
