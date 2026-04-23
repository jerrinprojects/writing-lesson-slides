// ─── Shared ──────────────────────────────────────────────────────────────────

export interface Category {
  id: "writing-lessons" | "writing-of-the-week" | "group-discussion" | "inquiry";
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
  {
    id: "inquiry",
    title: "Inquiry",
    description: "Project-based learning — research, create, and present.",
    color: "#f59e0b",
    icon: "I",
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
  translations?: {
    zh?: SlideTranslation;  // Chinese Simplified
    vi?: SlideTranslation;  // Vietnamese
  };
}

export interface Lesson {
  id: string;
  category: "writing-lessons" | "group-discussion" | "inquiry";
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

// ─── Inquiry ──────────────────────────────────────────────────────────────────

export const inquiryLessons: Lesson[] = [
  {
    id: "grown-from-the-ground",
    category: "inquiry",
    title: "Grown From the Ground",
    description: "Create a multi-episode podcast about a staple food from a culture of your choice.",
    color: "#f59e0b",
    slides: [

      // ── HOOK ─────────────────────────────────────────────────────
      {
        id: 1,
        title: "Listen to This...",
        summary: "Hook — listen first",
        content: {
          type: "hook",
          body: "Your teacher is about to play a short clip from a real podcast.\n\nWhile you listen, think:\n\nWhat do you notice? How does it make you feel? What makes you want to keep listening?",
          tip: "Podcasts like Brains On! and But Why reach millions of listeners every week — made by real teams, just like yours will be.",
        },
      },
      {
        id: 2,
        title: "What is a Podcast?",
        summary: "What is a podcast?",
        content: {
          type: "info",
          body: "A podcast is a recorded audio show — like a radio programme, but on demand. Anyone can make one, and anyone can listen.",
          examples: [
            "Brains On! — science explained in a fun and surprising way",
            "But Why: A Podcast for Curious Kids — listeners ask questions, experts answer",
            "Wow in the World — two hosts explore weird and wonderful science",
          ],
          tip: "Millions of people listen to podcasts while cooking, travelling, or relaxing. Your podcast could reach your classmates — or beyond.",
        },
      },
      {
        id: 3,
        title: "Your Mission",
        summary: "The project overview",
        content: {
          type: "hook",
          body: "You are going to create your own podcast series called **Grown From the Ground**.\n\n2–3 people per group. 4 episodes and a pilot.",
          examples: [
            "Topic: a staple food from a culture of your choice",
            "You will research, write, record, and edit your own show",
            "Each episode tells a different part of the story",
          ],
        },
      },

      // ── PART 1 ───────────────────────────────────────────────────
      {
        id: 4,
        title: "Part 1 — Set Up Your Show",
        summary: "Part 1 overview",
        content: {
          type: "part-overview",
          body: "Before you record anything, you need to build your team and your brand.",
          examples: [
            "Step 1: Choose your culture",
            "Step 2: Name your team and your podcast",
            "Step 3: Listen to real podcasts",
            "Step 4: Record Episode 0 — your pilot",
          ],
        },
      },
      {
        id: 5,
        title: "Step 1 — Choose Your Culture",
        summary: "Choose your culture",
        content: {
          type: "info",
          body: "Pick one country or cultural group that your podcast will focus on. This will be the heart of your whole series.",
          examples: [
            "Korean — Vietnamese — Mexican — Lebanese — Indian — Nigerian — Italian — Filipino",
            "It can be YOUR culture or one you are genuinely curious about",
            "Make sure there is enough to research — food, farming, and traditions",
          ],
          tip: "The best choice is one your whole team finds genuinely interesting. Curiosity makes better podcasts.",
        },
      },
      {
        id: 6,
        title: "How to Choose — Ask Yourselves",
        summary: "Questions to help you decide",
        content: {
          type: "info",
          body: "Not sure which culture to pick? Talk through these questions as a team:",
          examples: [
            "Does anyone in our group have a personal connection to this culture?",
            "Is there a food from this culture we find interesting or want to know more about?",
            "Can we find enough information — books, websites, people to talk to?",
            "Would this make an interesting story for our listeners?",
          ],
        },
      },
      {
        id: 7,
        title: "Step 2 — Name Your Team and Podcast",
        summary: "Team name and podcast name",
        content: {
          type: "info",
          body: "Your team name is who you are as a group. Your podcast name is the title of your show — it should hint at what the show is about.",
          examples: [
            "Team name example: The Root Crew / Ground Level / The Harvest Squad",
            "Podcast name example: Soil and Soul / Seeds and Stories / The Harvest Hour",
            "Write your team name and podcast name at the top of your planning document",
          ],
        },
      },
      {
        id: 8,
        title: "What Makes a Great Podcast Name?",
        summary: "Tips for a great podcast name",
        content: {
          type: "info",
          body: "A great podcast name does three things:",
          examples: [
            "Short and easy to remember — no more than 4 words",
            "Gives a clue about the content — what is this show about?",
            "Sounds interesting when you say it out loud",
          ],
          tip: "Say your podcast name out loud. Does it sound like something you would want to listen to?",
        },
      },
      {
        id: 9,
        title: "Step 3 — Listen and Learn",
        summary: "Listen to real podcasts",
        content: {
          type: "info",
          body: "Before you record your own podcast, listen to how the professionals do it. Your teacher will play a short clip. As you listen, fill in your observation notes.",
          examples: [
            "Brains On! — notice how they hook you in the first 20 seconds",
            "But Why — notice how they explain complicated ideas simply",
            "Wow in the World — notice how two hosts talk to each other naturally",
          ],
        },
      },
      {
        id: 10,
        title: "What to Listen For",
        summary: "Observation checklist",
        content: {
          type: "info",
          body: "As you listen, pay attention to these four things:",
          examples: [
            "The hook — how do they grab your attention in the first 20 seconds?",
            "The tone — are they serious, funny, curious, excited?",
            "Explanation — how do they make a hard idea easy to understand?",
            "The ending — how do they finish and make you want to come back?",
          ],
          tip: "The best podcasters make it sound like they are talking TO you — not reading AT you.",
        },
      },
      {
        id: 11,
        title: "Episode 0 — Your Pilot (2–3 min)",
        summary: "Pilot episode structure",
        content: {
          type: "script-structure",
          body: "Your pilot is a short introduction to your show. It tells listeners who you are and what your podcast is about.",
          examples: [
            "Introduce your team — names and a fun fact about each person",
            "Say your podcast name and describe what the show is about in one sentence",
            "Tell listeners which culture you chose — and why you chose it",
            "End with: \"In our next episode, we will be talking about...\"",
          ],
          tip: "Your pilot does not need to be perfect. It just needs to be YOU — real, enthusiastic, and clear.",
        },
      },

      // ── WHAT EVERY EPISODE NEEDS ──────────────────────────────────
      {
        id: 12,
        title: "Every Episode Needs This Structure",
        summary: "Podcast episode structure",
        content: {
          type: "script-structure",
          body: "Every episode of your podcast should follow the same basic structure. Learn this — then use it every time.",
          examples: [
            "Hook — a question, a fact, or a sound in the first 20–30 seconds",
            "Introduction — who you are and what today's episode is about",
            "Main Content — your research, explained clearly in your own words",
            "Fun Fact — one surprising thing most people do not know",
            "Outro — \"Thanks for listening. Next time we will cover...\"",
          ],
        },
      },
      {
        id: 13,
        title: "Writing Your Script",
        summary: "How to write a podcast script",
        content: {
          type: "info",
          body: "Write out everything you plan to say — word for word. Then practise reading it out loud before you record.",
          examples: [
            "Write the way you TALK — not the way you write an essay",
            "Use short sentences. They are easier to say and easier to hear.",
            "Example: \"Did you know one corn plant produces over 600 kernels? Wild, right?\"",
            "Each team member should have clear lines — no one should be silent",
          ],
          tip: "If it sounds strange when you say it out loud, rewrite it until it sounds natural.",
        },
      },
      {
        id: 14,
        title: "Recording Tips",
        summary: "How to record well",
        content: {
          type: "info",
          body: "Good audio makes a huge difference. Follow these steps every time you record:",
          examples: [
            "Find a quiet space — away from noise, fans, and other conversations",
            "Hold the mic or phone 10–15 cm from your mouth",
            "Speak slowly and clearly — slower than you think you need to",
            "Do a 10-second test recording and listen back before the full take",
            "If you make a mistake, pause and start that sentence again — you can edit it later",
          ],
        },
      },
      {
        id: 15,
        title: "Tools You Need",
        summary: "Equipment and apps",
        content: {
          type: "info",
          body: "You do not need expensive equipment. Here is what to use:",
          examples: [
            "Recording: phone voice memo / iPad / GarageBand / Audacity (free)",
            "Script: Google Docs — shared with your whole team",
            "Music: YouTube Audio Library or Pixabay — both free and royalty-free",
            "Headphones: to listen back and check the quality of your recording",
          ],
          tip: "GarageBand (free on iPad and Mac) lets you record, add music, and edit — all in one place.",
        },
      },

      // ── PART 2 ───────────────────────────────────────────────────
      {
        id: 16,
        title: "Part 2 — Episode 1: Our Culture's Staple",
        summary: "Part 2 overview",
        content: {
          type: "part-overview",
          body: "Research the most important vegetable or fruit in your chosen culture. Then record Episode 1.",
          examples: [
            "Step 1: Choose your staple food",
            "Step 2: Research its history and cultural importance",
            "Step 3: Write and record Episode 1",
          ],
        },
      },
      {
        id: 17,
        title: "Step 1 — Choose Your Staple Food",
        summary: "Choose a staple food",
        content: {
          type: "info",
          body: "Pick one vegetable or fruit that is central to your chosen culture — something that has been grown and eaten there for a long time.",
          examples: [
            "Korea → Cabbage (used to make kimchi)",
            "Mexico → Corn — maize (used in tortillas, tamales, and more)",
            "Vietnam → Rice (eaten at almost every meal)",
            "Lebanon → Chickpeas (used in hummus, falafel, and stews)",
            "India → Eggplant — aubergine (used in dozens of traditional dishes)",
          ],
        },
      },
      {
        id: 18,
        title: "Research Questions — Episode 1",
        summary: "Research questions for Episode 1",
        content: {
          type: "info",
          body: "Use these questions to guide your research:",
          examples: [
            "What is this food called in the original language of that culture?",
            "How long has it been grown there — years, centuries, thousands of years?",
            "Why is it so important? (geography, climate, history)",
            "How would life in that culture change if this food disappeared?",
            "Are there any interesting stories, myths, or legends connected to it?",
          ],
          tip: "Use at least 3 different sources. If two sources disagree, mention it in your podcast — that is great content.",
        },
      },
      {
        id: 19,
        title: "Example — Corn in Mexico",
        summary: "Example: corn in Mexico",
        content: {
          type: "example-slide",
          body: "Here is what strong research looks like for Episode 1:",
          examples: [
            "Corn (maize) has been grown in Mexico for over 9,000 years",
            "It appears in almost every meal — tortillas, tamales, pozole, atole",
            "The ancient Aztecs called corn \"the gift of the gods\" — it was sacred",
            "Mexico has over 64 native varieties of corn — each region has its own",
            "Without corn, Mexican food and culture as we know it would not exist",
          ],
          tip: "Specific numbers, names, and surprising details make a podcast interesting. Vague statements do not.",
        },
      },
      {
        id: 20,
        title: "Episode 1 — Script Structure",
        summary: "Episode 1 script structure",
        content: {
          type: "script-structure",
          body: "Use this structure when writing your Episode 1 script:",
          examples: [
            "Hook: a surprising fact or question about your staple food",
            "Introduce the food and the culture — who, what, where",
            "Explain why it is a staple — history, geography, tradition",
            "Fun fact: one thing most listeners would not know",
            "Outro: \"Next time, we will explain exactly how this plant grows...\"",
          ],
        },
      },
      {
        id: 21,
        title: "Episode 1 — Before You Record",
        summary: "Episode 1 checklist",
        content: {
          type: "checklist",
          body: "Check every item before you press record:",
          examples: [
            "Script written and read aloud at least twice",
            "Every team member knows their lines",
            "All facts checked with a reliable source",
            "Background music chosen and ready",
            "10-second test recording done and listened back",
            "Recording space is quiet",
          ],
        },
      },

      // ── PART 3 ───────────────────────────────────────────────────
      {
        id: 22,
        title: "Part 3 — Episode 2: How It Grows",
        summary: "Part 3 overview",
        content: {
          type: "part-overview",
          body: "Research the growing conditions for your staple food. Then record Episode 2.",
          examples: [
            "Step 1: Learn what your plant needs to grow",
            "Step 2: Research traditional and modern farming methods",
            "Step 3: Write and record Episode 2",
          ],
        },
      },
      {
        id: 23,
        title: "What Does a Plant Need to Grow?",
        summary: "Five growing conditions",
        content: {
          type: "info",
          body: "Every plant has specific requirements. Research all five for your staple food:",
          examples: [
            "Soil type — sandy, clay, loamy, rich in nutrients",
            "Temperature — what range does it grow in? What temperature kills it?",
            "Water — how much per week? Does it like wet or dry conditions?",
            "Sunlight — full sun, partial shade, or low light?",
            "pH level — acidic (below 7), neutral (7), or alkaline (above 7)?",
          ],
          tip: "pH affects what nutrients a plant can absorb from the soil. Most vegetables prefer a pH between 6 and 7.",
        },
      },
      {
        id: 24,
        title: "Research Questions — Episode 2",
        summary: "Research questions for Episode 2",
        content: {
          type: "info",
          body: "Use these questions to guide your research:",
          examples: [
            "What type of soil does this plant grow best in?",
            "What climate does it need — tropical, temperate, arid, or cool?",
            "When is it planted and when is it harvested? How long does it take?",
            "How was it traditionally farmed — by hand, with animals, in terraces?",
            "How is it farmed today — by machine, in greenhouses, on large plantations?",
          ],
        },
      },
      {
        id: 25,
        title: "Example — Rice in Vietnam",
        summary: "Example: rice in Vietnam",
        content: {
          type: "example-slide",
          body: "Here is what strong research looks like for Episode 2:",
          examples: [
            "Rice needs flooded paddy fields — roots sit in standing water during growth",
            "Grows best in warm tropical climate: 20–35°C, humid",
            "Planted in the wet season, harvested after 3–6 months",
            "Prefers slightly acidic soil — pH around 5.5 to 6.5",
            "Traditionally planted and harvested by hand in terraced hill fields",
            "Some modern farms now use machinery, but many small family farms still use traditional methods",
          ],
        },
      },
      {
        id: 26,
        title: "Traditional vs Modern Farming",
        summary: "Compare farming methods",
        content: {
          type: "info",
          body: "For your podcast, compare how this food was grown in the past and how it is grown today:",
          examples: [
            "Traditional: hand tools, seasonal planting, natural compost, small-scale",
            "Modern: machinery, chemical fertilisers, pesticides, year-round production",
            "Traditional is often more sustainable — but produces less food",
            "Modern farming feeds more people — but can damage the environment",
            "Question for your podcast: which approach do you think is better — and why?",
          ],
          tip: "This is a great place to include your team's own opinion. Podcasts are more interesting when hosts share a point of view.",
        },
      },
      {
        id: 27,
        title: "Episode 2 — Script Structure",
        summary: "Episode 2 script structure",
        content: {
          type: "script-structure",
          body: "Use this structure when writing your Episode 2 script:",
          examples: [
            "Hook: \"Have you ever wondered how [food] actually gets from the ground to your plate?\"",
            "Walk through the five growing conditions: soil, temperature, water, sunlight, pH",
            "Describe how it was traditionally farmed",
            "Compare traditional vs modern farming — include your team's opinion",
            "Outro: \"Next episode, we find out what happens after it is harvested...\"",
          ],
        },
      },

      // ── PART 4 ───────────────────────────────────────────────────
      {
        id: 28,
        title: "Part 4 — Episode 3: From Ground to Table",
        summary: "Part 4 overview",
        content: {
          type: "part-overview",
          body: "Research how your staple food is cooked, eaten, and celebrated. Then record Episode 3.",
          examples: [
            "Step 1: Find out how the food is used in traditional cooking",
            "Step 2: Research its cultural meaning — festivals, family, ceremonies",
            "Step 3: (Optional) Interview someone from that culture",
            "Step 4: Write and record Episode 3",
          ],
        },
      },
      {
        id: 29,
        title: "Research Questions — Episode 3",
        summary: "Research questions for Episode 3",
        content: {
          type: "info",
          body: "Use these questions to guide your research:",
          examples: [
            "What are the most famous traditional dishes that use this ingredient?",
            "Is it eaten differently in different regions or communities?",
            "Does it have a special meaning at festivals, ceremonies, or family gatherings?",
            "Is there a story, legend, or tradition connected to how it is grown or eaten?",
            "Has its role in the culture changed over time?",
          ],
        },
      },
      {
        id: 30,
        title: "Example — Cabbage in Korea",
        summary: "Example: cabbage in Korea",
        content: {
          type: "example-slide",
          body: "Here is what strong research looks like for Episode 3:",
          examples: [
            "Cabbage is the main ingredient in kimchi — Korea's most iconic food",
            "Kimchi is eaten at almost every meal: breakfast, lunch, and dinner",
            "Every November, families gather to make kimchi together — called Kimjang",
            "Kimjang was recognised by UNESCO as an Intangible Cultural Heritage in 2013",
            "Over 200 varieties of kimchi exist — each region has its own recipe",
          ],
          tip: "Cultural meaning is what makes this episode special. Do not just list facts — explain WHY the food matters to real people.",
        },
      },
      {
        id: 31,
        title: "Optional — Interview Someone",
        summary: "Guest interview tips",
        content: {
          type: "info",
          body: "The strongest podcasts include real voices. Ask someone from your chosen culture these questions:",
          examples: [
            "What do you remember eating as a child that used this ingredient?",
            "How did your family grow or buy this food?",
            "What does this food mean to you or your family?",
            "Is there a memory or story connected to this food that you would share?",
          ],
          tip: "Record the interview on your phone. Even a 30-second clip in someone's own words makes powerful content.",
        },
      },
      {
        id: 32,
        title: "Episode 3 — Script Structure",
        summary: "Episode 3 script structure",
        content: {
          type: "script-structure",
          body: "Use this structure when writing your Episode 3 script:",
          examples: [
            "Hook: describe a dish so vividly the listener can almost taste it",
            "Introduce the most important traditional recipes or uses",
            "Explain the cultural meaning — celebrations, family, memory",
            "Guest segment (if you have an interview): introduce them, play the clip",
            "Fun fact + Outro: \"In our final episode, we bring this all back to our own classroom...\"",
          ],
        },
      },

      // ── PART 5 ───────────────────────────────────────────────────
      {
        id: 33,
        title: "Part 5 — Episode 4: Can We Grow It?",
        summary: "Part 5 overview",
        content: {
          type: "part-overview",
          body: "Connect everything you have learned to your classroom garden. Then record your final episode.",
          examples: [
            "Step 1: Find out exactly what your plant needs to grow",
            "Step 2: Compare that to what your classroom garden has",
            "Step 3: Make a recommendation — yes, no, or maybe",
            "Step 4: Reflect on what you learned across the whole project",
            "Step 5: Write and record Episode 4",
          ],
        },
      },
      {
        id: 34,
        title: "What Does Our Garden Have?",
        summary: "Assess your classroom garden",
        content: {
          type: "info",
          body: "Before you can say whether your plant could grow in your classroom garden, you need to know what conditions you already have:",
          examples: [
            "Temperature: what is the range in our classroom and outside?",
            "Sunlight: how many hours of direct sunlight does the garden get per day?",
            "Soil: what type do we have? What is the pH?",
            "Space: what is the area and volume of our garden beds?",
            "Water: how often can we water, and how much?",
          ],
        },
      },
      {
        id: 35,
        title: "Research Questions — Episode 4",
        summary: "Research questions for Episode 4",
        content: {
          type: "info",
          body: "Use these questions to plan your recommendation:",
          examples: [
            "What soil type, temperature, pH, and water does your plant need?",
            "Does our garden match those conditions — exactly, partially, or not at all?",
            "What would we need to change or add to make it work?",
            "If we cannot grow the exact plant — what similar plant could we grow instead?",
            "What maths could we use to plan the garden? (area, perimeter, volume)",
          ],
        },
      },
      {
        id: 36,
        title: "Your Recommendation",
        summary: "Make your recommendation",
        content: {
          type: "info",
          body: "Your recommendation is the conclusion of your entire project. It should be backed by evidence from all four episodes:",
          examples: [
            "Yes — this plant could grow in our garden. Here is why...",
            "No — it cannot grow here. Here is why, and here is what we could grow instead...",
            "Maybe — with these specific changes, it could work...",
          ],
          tip: "A good recommendation is not just an opinion — it is an opinion supported by facts you researched yourself.",
        },
      },
      {
        id: 37,
        title: "Episode 4 — Script Structure",
        summary: "Episode 4 script structure",
        content: {
          type: "script-structure",
          body: "Use this structure when writing your final episode script:",
          examples: [
            "Hook: \"We started this podcast wondering about [food] in [culture]...\"",
            "Summarise what the plant needs to grow (from Episode 2)",
            "Describe what your classroom garden has",
            "Give your recommendation — with reasons and evidence",
            "Reflection: what was the most surprising thing you discovered in this project?",
            "Final outro: thank your listeners and wrap up the whole series",
          ],
        },
      },
      {
        id: 38,
        title: "Final Checklist — Series Complete!",
        summary: "Final series checklist",
        content: {
          type: "checklist",
          body: "Before you submit your podcast series, make sure every episode is done:",
          examples: [
            "Episode 0 (Pilot) — recorded and listened back",
            "Episode 1 (Our Culture's Staple) — recorded and listened back",
            "Episode 2 (How It Grows) — recorded and listened back",
            "Episode 3 (From Ground to Table) — recorded and listened back",
            "Episode 4 (Can We Grow It?) — recorded and listened back",
            "All episodes edited — mistakes removed, music added",
            "All team members contributed equally",
            "Ready to share with the class",
          ],
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
