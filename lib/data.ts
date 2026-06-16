export type Mode = "At the centre" | "Home visit" | "Online";

export type AgeBand =
  | "0 to 3 years"
  | "3 to 6 years"
  | "6 to 12 years"
  | "Teens and adults";

export type Condition = {
  slug: string;
  name: string;
  hero?: boolean;
  short: string;
  about: string;
  companions?: string[];
  therapySlugs: string[];
};

export type Therapy = {
  slug: string;
  name: string;
  short: string;
  forWhom: string;
  whatToExpect: string;
  sessionLength: string;
  conditions: string[];
  ages: AgeBand[];
  modes: Mode[];
};

export type Therapist = {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  experienceYears: number;
  languages: string[];
  therapySlugs: string[];
  conditions: string[];
  bio: string;
};

export const ageBands: AgeBand[] = [
  "0 to 3 years",
  "3 to 6 years",
  "6 to 12 years",
  "Teens and adults",
];

export const modes: Mode[] = ["At the centre", "Home visit", "Online"];

export const conditions: Condition[] = [
  {
    slug: "cerebral-palsy",
    name: "Cerebral palsy",
    hero: true,
    short:
      "A lifelong difference in movement and posture. With the right support, children keep growing and surprising everyone.",
    about:
      "Cerebral palsy affects how a child moves, sits and holds themselves. It does not get worse over time, and no two children are the same. Some walk with a small limp, some use a wheelchair and speak with their eyes. We meet your child exactly where they are, and we build from there.",
    companions: [
      "Tight or stiff muscles",
      "Speech and feeding",
      "Seizures",
      "Vision and hearing",
      "Learning and attention",
    ],
    therapySlugs: [
      "physiotherapy",
      "occupational-therapy",
      "speech-language-therapy",
      "special-education",
      "sensory-integration",
      "early-intervention",
    ],
  },
  {
    slug: "developmental-delay",
    name: "Developmental delay",
    short:
      "When milestones like sitting, walking or talking arrive late. Early help makes a real difference.",
    about:
      "If your child is reaching milestones later than other children, you do not need to wait and watch alone. Early support gently nudges development forward while the brain is still growing fast.",
    therapySlugs: [
      "early-intervention",
      "physiotherapy",
      "occupational-therapy",
      "speech-language-therapy",
    ],
  },
  {
    slug: "autism",
    name: "Autism",
    short:
      "A different way of experiencing the world. We help children connect, communicate and feel calm.",
    about:
      "Autistic children think and feel in their own way. Our work is never about changing who they are. It is about giving them tools to communicate, to handle busy places and to enjoy being with others.",
    therapySlugs: [
      "behavioral-therapy",
      "speech-language-therapy",
      "occupational-therapy",
      "sensory-integration",
      "special-education",
    ],
  },
  {
    slug: "down-syndrome",
    name: "Down syndrome",
    short:
      "With early, steady support, children build strength, speech and independence.",
    about:
      "Children with Down syndrome learn and grow at their own pace. Steady therapy from early on helps with muscle strength, clear speech and the everyday skills that build confidence.",
    therapySlugs: [
      "early-intervention",
      "physiotherapy",
      "speech-language-therapy",
      "special-education",
    ],
  },
  {
    slug: "speech-delay",
    name: "Speech delay",
    short: "When words are slow to come. We help your child find their voice.",
    about:
      "Some children understand everything but struggle to get the words out. We find the way your child communicates best, whether that is speech, signs or pictures, and we grow it from there.",
    therapySlugs: ["speech-language-therapy", "early-intervention"],
  },
  {
    slug: "sensory-processing",
    name: "Sensory differences",
    short:
      "When sounds, textures or movement feel too much or too little. We help the world feel safer.",
    about:
      "For some children the world is too loud, too bright or too still. We help their body make sense of what it feels, so daily life becomes calmer and easier.",
    therapySlugs: ["sensory-integration", "occupational-therapy"],
  },
];

export const therapies: Therapy[] = [
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    short: "Building strength, balance and the joy of moving.",
    forWhom:
      "Children working on head control, sitting, standing, walking or keeping muscles soft and comfortable.",
    whatToExpect:
      "Playful movement on mats and equipment, gentle stretching, and a simple home routine you can do together between sessions.",
    sessionLength: "45 minutes",
    conditions: ["cerebral-palsy", "developmental-delay", "down-syndrome"],
    ages: ["0 to 3 years", "3 to 6 years", "6 to 12 years", "Teens and adults"],
    modes: ["At the centre", "Home visit"],
  },
  {
    slug: "occupational-therapy",
    name: "Occupational therapy",
    short: "Everyday skills, from holding a spoon to getting dressed.",
    forWhom:
      "Children building hand skills, daily routines and the focus needed for play and school.",
    whatToExpect:
      "Hands on activities that look like play but quietly build the small skills of daily life, with goals you choose together.",
    sessionLength: "45 minutes",
    conditions: [
      "cerebral-palsy",
      "autism",
      "sensory-processing",
      "developmental-delay",
    ],
    ages: ["0 to 3 years", "3 to 6 years", "6 to 12 years"],
    modes: ["At the centre", "Home visit"],
  },
  {
    slug: "speech-language-therapy",
    name: "Speech and language therapy",
    short: "Finding a voice, in whatever form it takes.",
    forWhom:
      "Children working on understanding, speaking, or communicating through signs and pictures, and on safe eating and drinking.",
    whatToExpect:
      "Warm, playful sessions that follow your child's interests, plus support for feeding and swallowing where it is needed.",
    sessionLength: "40 minutes",
    conditions: [
      "cerebral-palsy",
      "speech-delay",
      "autism",
      "down-syndrome",
    ],
    ages: ["0 to 3 years", "3 to 6 years", "6 to 12 years"],
    modes: ["At the centre", "Online"],
  },
  {
    slug: "special-education",
    name: "Special education",
    short: "Learning that meets your child where they are.",
    forWhom:
      "Children getting ready for school or learning at their own pace, in their own way.",
    whatToExpect:
      "A learning plan built around your child's strengths, with small steps, lots of patience and real celebration.",
    sessionLength: "45 minutes",
    conditions: ["cerebral-palsy", "autism", "down-syndrome"],
    ages: ["3 to 6 years", "6 to 12 years"],
    modes: ["At the centre"],
  },
  {
    slug: "behavioral-therapy",
    name: "Behaviour support",
    short: "Calm days, clearer communication, fewer hard moments.",
    forWhom:
      "Children and families working through big feelings, routines and ways to connect.",
    whatToExpect:
      "We look for the why behind behaviour, then build gentle, consistent routines that work at the centre and at home.",
    sessionLength: "45 minutes",
    conditions: ["autism", "developmental-delay"],
    ages: ["3 to 6 years", "6 to 12 years"],
    modes: ["At the centre", "Online"],
  },
  {
    slug: "sensory-integration",
    name: "Sensory integration",
    short: "Helping the body make sense of the world.",
    forWhom:
      "Children who find sounds, textures or movement too much, or who seek a lot of input.",
    whatToExpect:
      "A safe sensory space with swings, textures and movement, used carefully to help your child feel settled.",
    sessionLength: "40 minutes",
    conditions: ["sensory-processing", "autism", "cerebral-palsy"],
    ages: ["3 to 6 years", "6 to 12 years"],
    modes: ["At the centre"],
  },
  {
    slug: "early-intervention",
    name: "Early intervention",
    short: "The earliest support, when it matters most.",
    forWhom:
      "Babies and toddlers under three, where small steps now shape big things later.",
    whatToExpect:
      "Play based sessions with you in the room, so you become confident helping your child every single day.",
    sessionLength: "45 minutes",
    conditions: [
      "cerebral-palsy",
      "developmental-delay",
      "down-syndrome",
      "speech-delay",
    ],
    ages: ["0 to 3 years"],
    modes: ["At the centre", "Home visit"],
  },
];

export const therapists: Therapist[] = [
  {
    slug: "ananya-rao",
    name: "Ananya Rao",
    title: "Lead Physiotherapist",
    credentials: "MPT, Paediatric Neurology",
    experienceYears: 11,
    languages: ["English", "Hindi", "Kannada"],
    therapySlugs: ["physiotherapy", "early-intervention"],
    conditions: ["cerebral-palsy", "developmental-delay", "down-syndrome"],
    bio: "Ananya has spent her career helping children move with more freedom and less pain. She believes every small gain is worth celebrating.",
  },
  {
    slug: "meera-iyer",
    name: "Meera Iyer",
    title: "Occupational Therapist",
    credentials: "MOT, Sensory Integration certified",
    experienceYears: 8,
    languages: ["English", "Hindi", "Tamil"],
    therapySlugs: ["occupational-therapy", "sensory-integration"],
    conditions: ["cerebral-palsy", "autism", "sensory-processing"],
    bio: "Meera turns everyday skills into play. Families love how calm and patient she is on the hardest days.",
  },
  {
    slug: "fatima-sheikh",
    name: "Fatima Sheikh",
    title: "Speech and Language Therapist",
    credentials: "MASLP",
    experienceYears: 9,
    languages: ["English", "Hindi", "Urdu"],
    therapySlugs: ["speech-language-therapy", "early-intervention"],
    conditions: ["cerebral-palsy", "speech-delay", "autism", "down-syndrome"],
    bio: "Fatima helps children find a voice, whether through words, signs or pictures, and supports safe, happy mealtimes.",
  },
  {
    slug: "rohan-desai",
    name: "Rohan Desai",
    title: "Special Educator",
    credentials: "B.Ed Special Education",
    experienceYears: 7,
    languages: ["English", "Hindi", "Marathi"],
    therapySlugs: ["special-education", "behavioral-therapy"],
    conditions: ["cerebral-palsy", "autism", "down-syndrome"],
    bio: "Rohan builds learning around what each child loves. He is happiest when a child surprises themselves.",
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    title: "Physiotherapist",
    credentials: "MPT, Paediatrics",
    experienceYears: 6,
    languages: ["English", "Hindi", "Malayalam"],
    therapySlugs: ["physiotherapy"],
    conditions: ["cerebral-palsy", "down-syndrome"],
    bio: "Priya makes therapy feel like a game. Her sessions are full of laughter and quiet, steady progress.",
  },
  {
    slug: "sana-kapoor",
    name: "Sana Kapoor",
    title: "Behaviour and Sensory Specialist",
    credentials: "M.Phil Clinical Psychology",
    experienceYears: 10,
    languages: ["English", "Hindi", "Punjabi"],
    therapySlugs: ["behavioral-therapy", "sensory-integration"],
    conditions: ["autism", "sensory-processing", "developmental-delay"],
    bio: "Sana helps families understand the why behind big feelings, and builds calm, kind routines that hold up at home.",
  },
];

export const therapyMap = Object.fromEntries(
  therapies.map((t) => [t.slug, t]),
);
export const conditionMap = Object.fromEntries(
  conditions.map((c) => [c.slug, c]),
);

export function therapistsForTherapy(slug: string) {
  return therapists.filter((t) => t.therapySlugs.includes(slug));
}

export function therapistsForCondition(slug: string) {
  return therapists.filter((t) => t.conditions.includes(slug));
}

export function therapiesForCondition(slug: string) {
  const c = conditionMap[slug];
  if (!c) return [];
  return c.therapySlugs.map((s) => therapyMap[s]).filter(Boolean);
}
