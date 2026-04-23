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
          translations: {
            zh: {
              body: "你的老师即将播放一段真实播客的短片。\n\n在你聆听的时候，思考：\n\n你注意到了什么？它让你有什么感受？是什么让你想继续听下去？",
              tip: "《Brains On!》和《But Why》等播客每周吸引数百万听众——由真正的团队制作，就像你们即将组建的团队一样。",
            },
            vi: {
              body: "Giáo viên của bạn sắp phát một đoạn clip ngắn từ một podcast thật.\n\nTrong khi nghe, hãy suy nghĩ:\n\nBạn nhận thấy điều gì? Nó khiến bạn cảm thấy thế nào? Điều gì khiến bạn muốn tiếp tục lắng nghe?",
              tip: "Các podcast như Brains On! và But Why tiếp cận hàng triệu người nghe mỗi tuần — được tạo ra bởi các nhóm thật sự, giống như nhóm của bạn sắp làm.",
            },
          },
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
          translations: {
            zh: {
              body: "播客是一种录制的音频节目——类似于广播节目，但可以随时收听。任何人都可以制作，任何人都可以收听。",
              tip: "数百万人在烹饪、旅行或休息时收听播客。你们的播客可以让同学们听到——甚至传得更远。",
            },
            vi: {
              body: "Podcast là một chương trình âm thanh được ghi âm — giống như chương trình radio, nhưng có thể nghe theo yêu cầu. Bất kỳ ai cũng có thể tạo và bất kỳ ai cũng có thể nghe.",
              tip: "Hàng triệu người nghe podcast khi nấu ăn, đi du lịch hoặc thư giãn. Podcast của bạn có thể tiếp cận các bạn cùng lớp — hoặc xa hơn nữa.",
            },
          },
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
          translations: {
            zh: {
              body: "你们将要创建自己的播客系列，名为**Grown From the Ground（从土地中生长）**。\n\n每组2–3人，共4集加一个试播集。",
            },
            vi: {
              body: "Các bạn sẽ tạo chuỗi podcast của riêng mình có tên là **Grown From the Ground**.\n\n2–3 người mỗi nhóm. 4 tập và một tập thí điểm.",
            },
          },
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
          translations: {
            zh: { body: "在录制任何内容之前，你需要组建团队并打造你们的品牌。" },
            vi: { body: "Trước khi ghi âm bất cứ điều gì, bạn cần xây dựng nhóm và thương hiệu của mình." },
          },
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
          translations: {
            zh: {
              body: "选择一个国家或文化群体作为你们播客的焦点。这将成为整个系列的核心。",
              tip: "最好的选择是整个团队都真正感兴趣的内容。好奇心能做出更好的播客。",
            },
            vi: {
              body: "Chọn một quốc gia hoặc nhóm văn hóa mà podcast của bạn sẽ tập trung vào. Đây sẽ là trái tim của toàn bộ series.",
              tip: "Lựa chọn tốt nhất là điều mà cả nhóm đều thực sự thấy thú vị. Sự tò mò tạo ra những podcast hay hơn.",
            },
          },
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
          translations: {
            zh: { body: "不确定选哪种文化？作为一个团队讨论这些问题：" },
            vi: { body: "Không chắc nên chọn văn hóa nào? Hãy thảo luận những câu hỏi này cùng nhóm:" },
          },
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
          translations: {
            zh: { body: "团队名称代表你们作为一个团体的身份。播客名称是节目的标题——它应该暗示节目内容。" },
            vi: { body: "Tên nhóm là danh hiệu của bạn với tư cách là một nhóm. Tên podcast là tiêu đề của chương trình — nó nên gợi lên nội dung của chương trình." },
          },
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
          translations: {
            zh: {
              body: "一个好的播客名称能做到三件事：",
              tip: "大声说出你们的播客名称。听起来像是你会想去收听的节目吗？",
            },
            vi: {
              body: "Một tên podcast hay làm được ba điều:",
              tip: "Hãy nói tên podcast của bạn to lên. Nghe có vẻ như thứ bạn muốn nghe không?",
            },
          },
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
          translations: {
            zh: { body: "在录制自己的播客之前，先听听专业人士是怎么做的。你的老师会播放一段短片。在你聆听的时候，填写你的观察笔记。" },
            vi: { body: "Trước khi ghi âm podcast của riêng bạn, hãy nghe cách các chuyên gia làm. Giáo viên của bạn sẽ phát một đoạn clip ngắn. Trong khi nghe, hãy điền vào ghi chú quan sát của bạn." },
          },
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
          translations: {
            zh: {
              body: "在聆听时，注意这四件事：",
              tip: "最好的播客主持人让听起来像是在和你交谈——而不是在向你朗读。",
            },
            vi: {
              body: "Khi nghe, hãy chú ý đến bốn điều này:",
              tip: "Những người làm podcast giỏi nhất làm cho nó nghe như họ đang nói chuyện VỚI bạn — không phải đọc CHO bạn nghe.",
            },
          },
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
          translations: {
            zh: {
              body: "你们的试播集是对节目的简短介绍。它告诉听众你们是谁，以及播客内容是什么。",
              tip: "试播集不需要完美。它只需要是真实的你们——真实、热情、清晰。",
            },
            vi: {
              body: "Tập thí điểm là phần giới thiệu ngắn về chương trình của bạn. Nó cho người nghe biết bạn là ai và podcast của bạn nói về điều gì.",
              tip: "Tập thí điểm không cần phải hoàn hảo. Nó chỉ cần là bạn — thật sự, nhiệt tình và rõ ràng.",
            },
          },
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
          translations: {
            zh: { body: "播客的每一集都应该遵循相同的基本结构。学好这个——然后每次都使用它。" },
            vi: { body: "Mỗi tập của podcast nên tuân theo cùng một cấu trúc cơ bản. Học thuộc điều này — rồi sử dụng mỗi lần." },
          },
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
          translations: {
            zh: {
              body: "逐字写出你计划说的所有内容。然后在录制之前练习大声朗读。",
              tip: "如果大声说出来听起来很奇怪，就重写它，直到听起来自然为止。",
            },
            vi: {
              body: "Viết ra mọi thứ bạn định nói — từng từ một. Sau đó luyện tập đọc to trước khi ghi âm.",
              tip: "Nếu nghe có vẻ lạ khi bạn nói to, hãy viết lại cho đến khi nghe tự nhiên.",
            },
          },
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
          translations: {
            zh: { body: "好的音频质量会产生巨大的差异。每次录制时都遵循这些步骤：" },
            vi: { body: "Âm thanh tốt tạo ra sự khác biệt lớn. Hãy làm theo các bước này mỗi khi bạn ghi âm:" },
          },
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
          translations: {
            zh: {
              body: "你们不需要昂贵的设备。以下是可以使用的工具：",
              tip: "GarageBand（iPad和Mac上免费）让你录音、添加音乐和编辑——全部在一个地方完成。",
            },
            vi: {
              body: "Bạn không cần thiết bị đắt tiền. Đây là những gì cần sử dụng:",
              tip: "GarageBand (miễn phí trên iPad và Mac) cho phép bạn ghi âm, thêm nhạc và chỉnh sửa — tất cả trong một nơi.",
            },
          },
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
          translations: {
            zh: { body: "研究你所选文化中最重要的蔬菜或水果。然后录制第一集。" },
            vi: { body: "Nghiên cứu loại rau hoặc trái cây quan trọng nhất trong nền văn hóa bạn đã chọn. Sau đó ghi âm Tập 1." },
          },
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
          translations: {
            zh: { body: "选择一种在你所选文化中占核心地位的蔬菜或水果——一种在那里已经种植和食用了很长时间的食物。" },
            vi: { body: "Chọn một loại rau hoặc trái cây là trung tâm của nền văn hóa bạn đã chọn — một thứ đã được trồng và ăn ở đó trong một thời gian dài." },
          },
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
          translations: {
            zh: {
              body: "使用这些问题来指导你的研究：",
              tip: "至少使用3个不同的信息来源。如果两个来源意见不一致，在播客中提到这一点——这是很好的内容。",
            },
            vi: {
              body: "Sử dụng những câu hỏi này để hướng dẫn nghiên cứu của bạn:",
              tip: "Sử dụng ít nhất 3 nguồn khác nhau. Nếu hai nguồn không đồng ý, hãy đề cập đến điều đó trong podcast của bạn — đó là nội dung hay.",
            },
          },
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
          translations: {
            zh: {
              body: "以下是第一集精彩研究内容的示例：",
              tip: "具体的数字、名称和令人惊讶的细节使播客变得有趣。模糊的陈述则不然。",
            },
            vi: {
              body: "Đây là ví dụ về nghiên cứu mạnh mẽ cho Tập 1:",
              tip: "Các con số cụ thể, tên gọi và chi tiết bất ngờ làm cho podcast trở nên thú vị. Những câu nói mơ hồ thì không.",
            },
          },
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
          translations: {
            zh: { body: "在撰写第一集脚本时使用此结构：" },
            vi: { body: "Sử dụng cấu trúc này khi viết kịch bản Tập 1 của bạn:" },
          },
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
          translations: {
            zh: { body: "在按下录制键之前检查每一项：" },
            vi: { body: "Kiểm tra từng mục trước khi nhấn nút ghi âm:" },
          },
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
          translations: {
            zh: { body: "研究你的主食作物的生长条件。然后录制第二集。" },
            vi: { body: "Nghiên cứu các điều kiện sinh trưởng cho thực phẩm chủ lực của bạn. Sau đó ghi âm Tập 2." },
          },
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
          translations: {
            zh: {
              body: "每种植物都有特定的需求。为你的主食作物研究以下五个方面：",
              tip: "pH值影响植物从土壤中吸收哪些养分。大多数蔬菜偏好pH值在6到7之间。",
            },
            vi: {
              body: "Mỗi loại thực vật đều có các yêu cầu cụ thể. Hãy nghiên cứu cả năm yếu tố cho thực phẩm chủ lực của bạn:",
              tip: "pH ảnh hưởng đến chất dinh dưỡng mà cây có thể hấp thụ từ đất. Hầu hết các loại rau thích pH từ 6 đến 7.",
            },
          },
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
          translations: {
            zh: { body: "使用这些问题来指导你的研究：" },
            vi: { body: "Sử dụng những câu hỏi này để hướng dẫn nghiên cứu của bạn:" },
          },
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
          translations: {
            zh: { body: "以下是第二集精彩研究内容的示例：" },
            vi: { body: "Đây là ví dụ về nghiên cứu mạnh mẽ cho Tập 2:" },
          },
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
          translations: {
            zh: {
              body: "在你们的播客中，比较这种食物过去和现在的种植方式：",
              tip: "这是加入团队自身观点的好地方。当主持人分享自己的观点时，播客会更加有趣。",
            },
            vi: {
              body: "Trong podcast của bạn, hãy so sánh cách thực phẩm này được trồng trong quá khứ và cách trồng ngày nay:",
              tip: "Đây là nơi tuyệt vời để đưa vào quan điểm của nhóm bạn. Podcast thú vị hơn khi người dẫn chương trình chia sẻ quan điểm.",
            },
          },
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
          translations: {
            zh: { body: "在撰写第二集脚本时使用此结构：" },
            vi: { body: "Sử dụng cấu trúc này khi viết kịch bản Tập 2 của bạn:" },
          },
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
          translations: {
            zh: { body: "研究你的主食是如何烹饪、食用和庆祝的。然后录制第三集。" },
            vi: { body: "Nghiên cứu cách thực phẩm chủ lực của bạn được nấu ăn, ăn uống và kỷ niệm. Sau đó ghi âm Tập 3." },
          },
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
          translations: {
            zh: { body: "使用这些问题来指导你的研究：" },
            vi: { body: "Sử dụng những câu hỏi này để hướng dẫn nghiên cứu của bạn:" },
          },
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
          translations: {
            zh: {
              body: "以下是第三集精彩研究内容的示例：",
              tip: "文化意义是这一集特别之处。不要只是列举事实——解释为什么这种食物对真实的人来说很重要。",
            },
            vi: {
              body: "Đây là ví dụ về nghiên cứu mạnh mẽ cho Tập 3:",
              tip: "Ý nghĩa văn hóa là điều làm cho tập này trở nên đặc biệt. Đừng chỉ liệt kê các sự kiện — hãy giải thích TẠI SAO thực phẩm quan trọng với con người thật sự.",
            },
          },
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
          translations: {
            zh: {
              body: "最好的播客包含真实的声音。向来自你所选文化的人提问这些问题：",
              tip: "用手机录制采访。即使是用某人自己语言说出的30秒短片，也能创造出有力的内容。",
            },
            vi: {
              body: "Những podcast hay nhất bao gồm giọng nói thật. Hãy hỏi ai đó từ nền văn hóa bạn đã chọn những câu hỏi này:",
              tip: "Ghi âm cuộc phỏng vấn trên điện thoại của bạn. Ngay cả một đoạn 30 giây bằng lời của chính người đó cũng tạo ra nội dung có sức mạnh.",
            },
          },
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
          translations: {
            zh: { body: "在撰写第三集脚本时使用此结构：" },
            vi: { body: "Sử dụng cấu trúc này khi viết kịch bản Tập 3 của bạn:" },
          },
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
          translations: {
            zh: { body: "将你学到的所有内容与教室花园联系起来。然后录制你们的最后一集。" },
            vi: { body: "Kết nối mọi thứ bạn đã học với vườn của lớp học. Sau đó ghi âm tập cuối cùng." },
          },
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
          translations: {
            zh: { body: "在你判断你的植物是否能在教室花园中生长之前，你需要了解已有的条件：" },
            vi: { body: "Trước khi bạn có thể nói liệu cây của bạn có thể mọc trong vườn lớp học không, bạn cần biết những điều kiện bạn đã có:" },
          },
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
          translations: {
            zh: { body: "使用这些问题来规划你的建议：" },
            vi: { body: "Sử dụng những câu hỏi này để lên kế hoạch cho khuyến nghị của bạn:" },
          },
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
          translations: {
            zh: {
              body: "你的建议是整个项目的结论。它应该有来自所有四集的证据支持：",
              tip: "一个好的建议不仅仅是意见——它是由你自己研究的事实所支持的意见。",
            },
            vi: {
              body: "Khuyến nghị của bạn là kết luận của toàn bộ dự án. Nó nên được hỗ trợ bởi bằng chứng từ cả bốn tập:",
              tip: "Một khuyến nghị tốt không chỉ là ý kiến — đó là ý kiến được hỗ trợ bởi các sự kiện bạn tự nghiên cứu.",
            },
          },
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
          translations: {
            zh: { body: "在撰写最终一集脚本时使用此结构：" },
            vi: { body: "Sử dụng cấu trúc này khi viết kịch bản tập cuối cùng của bạn:" },
          },
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
          translations: {
            zh: { body: "在提交播客系列之前，确保每一集都已完成：" },
            vi: { body: "Trước khi nộp chuỗi podcast của bạn, hãy đảm bảo mỗi tập đã hoàn thành:" },
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
