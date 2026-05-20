// Curated learning resources for anesthesiology trainees.
// Books intentionally have no purchase links (editions/sellers vary);
// only canonical free/online resources and societies carry URLs.

export type ResourceLevel =
  | "Medical student"
  | "CA-1 / Junior"
  | "Senior resident"
  | "Boards"
  | "All levels";

export type Resource = {
  title: string;
  /** Common nickname, e.g. "Baby Miller" */
  nickname?: string;
  /** Authors / publisher line */
  by?: string;
  blurb: string;
  levels: ResourceLevel[];
  /** Highlight as a strong starting recommendation */
  popular?: boolean;
  url?: string;
};

export type ResourceGroup = {
  slug: string;
  title: string;
  icon: string; // lucide icon name
  color: string; // tailwind from-* to-*
  description: string;
  items: Resource[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    slug: "core-textbooks",
    title: "Core textbooks",
    icon: "BookOpen",
    color: "from-primary to-accent",
    description:
      "The foundational references most programs build their reading around. Start with one comprehensive text and one pharmacology/physiology text.",
    items: [
      {
        title: "Morgan & Mikhail's Clinical Anesthesiology",
        by: "Butterworth, Mackey & Wasnick",
        blurb:
          "The classic first read — concise, well-organized, and approachable. Widely considered the best single text to start with as a student or new CA-1.",
        levels: ["Medical student", "CA-1 / Junior"],
        popular: true,
      },
      {
        title: "Basics of Anesthesia",
        nickname: "Baby Miller",
        by: "Pardo & Miller",
        blurb:
          "A focused, high-yield introduction distilled from Miller's. Excellent for medical students on an anesthesia rotation and early residency review.",
        levels: ["Medical student", "CA-1 / Junior"],
        popular: true,
      },
      {
        title: "Miller's Anesthesia",
        nickname: "Big Miller",
        by: "Gropper, Miller, et al.",
        blurb:
          "The encyclopedic, two-volume reference. Not a cover-to-cover read — use it to go deep on a specific topic and as the authoritative source for boards.",
        levels: ["Senior resident", "Boards"],
      },
      {
        title: "Clinical Anesthesia",
        nickname: "Barash",
        by: "Barash, Cullen, Stoelting, et al.",
        blurb:
          "Comprehensive single-volume text that sits between Morgan & Mikhail and Miller in depth. A common primary reference throughout residency.",
        levels: ["CA-1 / Junior", "Senior resident", "Boards"],
      },
      {
        title: "Stoelting's Pharmacology & Physiology in Anesthetic Practice",
        by: "Flood, Rathmell & Shafer",
        blurb:
          "The go-to deep dive on anesthetic pharmacology and physiology. Invaluable for understanding mechanisms behind board questions.",
        levels: ["CA-1 / Junior", "Senior resident", "Boards"],
      },
      {
        title: "Stoelting's Anesthesia and Co-Existing Disease",
        blurb:
          "How comorbidities change the anesthetic plan, organized by disease. Read the relevant chapter the night before a complex case.",
        levels: ["All levels"],
      },
    ],
  },
  {
    slug: "handbooks",
    title: "Handbooks & quick reference",
    icon: "BookMarked",
    color: "from-violet-500 to-purple-500",
    description:
      "Pocket-sized, case-oriented references for the OR — fast answers when you need them at the head of the bed.",
    items: [
      {
        title: "Clinical Anesthesia Procedures of the Massachusetts General Hospital",
        nickname: "MGH Handbook",
        blurb:
          "Practical, protocol-driven pocket book covering day-to-day OR management. A favorite for CA-1s learning the practical workflow.",
        levels: ["CA-1 / Junior"],
        popular: true,
      },
      {
        title: "The Anesthesiologist's Manual of Surgical Procedures",
        nickname: "Jaffe",
        blurb:
          "Procedure-by-procedure guide: what the surgeon does, the anesthetic considerations, positioning, and likely blood loss. Read before unfamiliar cases.",
        levels: ["All levels"],
      },
      {
        title: "Pocket Anesthesia",
        by: "Pocket Notebook series",
        blurb:
          "Bulleted, high-density quick reference that fits in a scrub pocket. Good for rapid look-ups during the case.",
        levels: ["CA-1 / Junior", "Senior resident"],
      },
      {
        title: "Anesthesia Student Survival Guide",
        by: "Chu & Fuller",
        blurb:
          "Written specifically for medical students and interns starting their first anesthesia rotation — sets expectations and teaches the basics of the OR day.",
        levels: ["Medical student"],
        popular: true,
      },
      {
        title: "Faust's Anesthesiology Review",
        by: "Mayo Clinic",
        blurb:
          "Short, focused chapters on individual topics — useful for filling gaps and as a bridge toward board review.",
        levels: ["CA-1 / Junior", "Boards"],
      },
    ],
  },
  {
    slug: "board-prep",
    title: "Board & exam prep",
    icon: "GraduationCap",
    color: "from-amber-500 to-orange-500",
    description:
      "Question banks and review resources targeted at the ABA BASIC, ADVANCED, and APPLIED (oral/OSCE) exams. Pair a question bank with a keyword review.",
    items: [
      {
        title: "Anesthesiology Core Review (ACR), Part 1 & Part 2",
        by: "Freeman & Berger",
        blurb:
          "Maps directly to the ABA BASIC (Part 1) and ADVANCED (Part 2) content outlines. The standard text-based review pair for the written boards.",
        levels: ["Boards"],
        popular: true,
      },
      {
        title: "Hall's Anesthesiology Board Review",
        by: "Hall & Chantigian",
        blurb:
          "Rapid-fire keyword-style Q&A for last-mile review and quick self-testing. Good for reinforcing buzzword associations.",
        levels: ["Boards"],
      },
      {
        title: "ACE — Anesthesiology Continuing Education (ASA)",
        blurb:
          "The ASA's self-assessment question program with detailed discussions. Question style closely mirrors the in-training (ITE) and board exams.",
        levels: ["Boards", "Senior resident"],
      },
      {
        title: "TrueLearn / M5 SmartBank",
        blurb:
          "Large online question bank with analytics, frequently used for ITE and BASIC/ADVANCED prep. Practice in tutor mode, then timed blocks.",
        levels: ["Boards", "Senior resident"],
      },
      {
        title: "AnesthesiaHub Question Bank",
        blurb:
          "This site's own 500+ board-style MCQs with explanations across 12 categories — quiz yourself or review by topic, free.",
        levels: ["All levels"],
        url: "/question-bank",
      },
    ],
  },
  {
    slug: "subspecialty",
    title: "Subspecialty & procedural",
    icon: "Stethoscope",
    color: "from-emerald-500 to-cyan-500",
    description:
      "Definitive texts for the major subspecialties — reach for these on rotation or when preparing a complex case.",
    items: [
      {
        title: "Kaplan's Cardiac Anesthesia",
        blurb:
          "The reference for cardiac anesthesia, TEE, and cardiopulmonary bypass management.",
        levels: ["Senior resident"],
      },
      {
        title: "Chestnut's Obstetric Anesthesia: Principles and Practice",
        blurb:
          "Comprehensive OB anesthesia text covering physiology of pregnancy, neuraxial labor analgesia, and obstetric emergencies.",
        levels: ["CA-1 / Junior", "Senior resident"],
      },
      {
        title: "A Practice of Anesthesia for Infants and Children",
        nickname: "Coté",
        blurb:
          "The standard pediatric anesthesia reference — developmental physiology, equipment sizing, and age-specific management.",
        levels: ["Senior resident"],
      },
      {
        title: "Hadzic's Peripheral Nerve Blocks & Anatomy for Ultrasound-Guided Regional Anesthesia",
        blurb:
          "Atlas-style regional anesthesia text with sonoanatomy and block techniques. Pairs well with the NYSORA website.",
        levels: ["CA-1 / Junior", "Senior resident"],
      },
    ],
  },
  {
    slug: "free-online",
    title: "Free & online resources",
    icon: "Globe",
    color: "from-sky-500 to-blue-500",
    description:
      "High-quality, freely accessible sites. Great for just-in-time learning and visual/procedural topics.",
    items: [
      {
        title: "Stanford Anesthesia CA-1 Guide",
        by: "Stanford Department of Anesthesiology (Ether)",
        blurb:
          "The single best free onboarding resource for a new resident. Written by Stanford faculty and residents, it walks you through the things nobody formally teaches — how to set up your machine and workspace, the structured pre-op evaluation, a practical induction-to-emergence game plan, and how to actually run a case as a CA-1. Skim it before your first day in the OR, then keep it open during your first months. Pairs perfectly with a core text like Morgan & Mikhail.",
        levels: ["Medical student", "CA-1 / Junior"],
        url: "https://ether.stanford.edu",
        popular: true,
      },
      {
        title: "OpenAnesthesia",
        by: "Affiliated with the ASA",
        blurb:
          "Free keyword reviews, summaries, and a podcast tightly aligned with the ABA content outline. An excellent companion to board prep.",
        levels: ["All levels"],
        url: "https://www.openanesthesia.org",
        popular: true,
      },
      {
        title: "NYSORA",
        by: "New York School of Regional Anesthesia",
        blurb:
          "The best free atlas for ultrasound-guided regional anesthesia — anatomy, technique, and dosing for virtually every block.",
        levels: ["All levels"],
        url: "https://www.nysora.com",
        popular: true,
      },
      {
        title: "Life in the Fast Lane (LITFL)",
        blurb:
          "Outstanding free ECG library and critical-care content. Useful for the ICU and emergency portions of training.",
        levels: ["All levels"],
        url: "https://litfl.com",
      },
      {
        title: "Anesthesia Patient Safety Foundation (APSF)",
        blurb:
          "Newsletter and resources focused on perioperative patient safety — a frequent source of practice-changing recommendations.",
        levels: ["All levels"],
        url: "https://www.apsf.org",
      },
    ],
  },
  {
    slug: "podcasts",
    title: "Podcasts & multimedia",
    icon: "Podcast",
    color: "from-rose-500 to-pink-500",
    description:
      "Learn on the commute. These are well-produced, trainee-friendly audio resources.",
    items: [
      {
        title: "ACCRAC",
        by: "Anesthesia & Critical Care Reviews and Commentary — Jed Wolpaw",
        blurb:
          "The most popular anesthesia podcast — interviews and topic reviews spanning the entire specialty, pitched at the resident level.",
        levels: ["All levels"],
        url: "https://www.accrac.com",
        popular: true,
      },
      {
        title: "Depth of Anesthesia",
        blurb:
          "Evidence-focused episodes that interrogate common practices and the literature behind them. Great for journal-club-style thinking.",
        levels: ["CA-1 / Junior", "Senior resident"],
      },
      {
        title: "OpenAnesthesia Podcast",
        blurb:
          "Short, keyword-aligned episodes that pair with the OpenAnesthesia written summaries for board review on the go.",
        levels: ["Boards", "All levels"],
        url: "https://www.openanesthesia.org",
      },
    ],
  },
  {
    slug: "societies",
    title: "Societies & guidelines",
    icon: "ShieldCheck",
    color: "from-teal-500 to-emerald-500",
    description:
      "Join as a trainee (often free or discounted) for guidelines, meetings, and the practice standards that show up on exams.",
    items: [
      {
        title: "American Society of Anesthesiologists (ASA)",
        blurb:
          "Practice guidelines, standards (e.g. basic monitoring), and the primary professional home for U.S. anesthesiologists.",
        levels: ["All levels"],
        url: "https://www.asahq.org",
      },
      {
        title: "American Board of Anesthesiology (ABA)",
        blurb:
          "Owns the certification process — read the content outlines and exam blueprints directly from the source when planning board study.",
        levels: ["Boards"],
        url: "https://www.theaba.org",
      },
      {
        title: "ASRA Pain Medicine",
        by: "American Society of Regional Anesthesia and Pain Medicine",
        blurb:
          "Authoritative guidelines on regional anesthesia and anticoagulation — the standard cited for neuraxial timing decisions.",
        levels: ["All levels"],
        url: "https://www.asra.com",
      },
      {
        title: "SOAP",
        by: "Society for Obstetric Anesthesia and Perinatology",
        blurb:
          "Subspecialty society for OB anesthesia, with consensus statements relevant to the labor floor.",
        levels: ["Senior resident"],
        url: "https://www.soap.org",
      },
    ],
  },
];

export const startHere = {
  student: [
    "Anesthesia Student Survival Guide",
    "Basics of Anesthesia (Baby Miller)",
    "OpenAnesthesia",
  ],
  resident: [
    "Stanford Anesthesia CA-1 Guide",
    "Morgan & Mikhail's Clinical Anesthesiology",
    "MGH Handbook",
  ],
  boards: [
    "Anesthesiology Core Review (ACR) Part 1 & 2",
    "ACE / TrueLearn question banks",
    "Miller's Anesthesia (deep dives)",
  ],
};
