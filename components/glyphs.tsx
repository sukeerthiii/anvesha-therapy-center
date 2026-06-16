import type { SVGProps } from "react";

type S = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Ball(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M4 9.5c5 2.6 11 2.6 16 0" />
      <path d="M6.5 17c3.5-2.2 7.5-2.2 11 0" />
      <path d="M12 3.5v17" />
    </svg>
  );
}

function Bowl(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M3 11h18a9 9 0 0 1-18 0Z" />
      <path d="M16 3.5 13.5 11" />
    </svg>
  );
}

function Speech(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M4 5h16a1.6 1.6 0 0 1 1.6 1.6v7A1.6 1.6 0 0 1 20 15.2h-8.5L7 18.5v-3.3H4A1.6 1.6 0 0 1 2.4 13.6V6.6A1.6 1.6 0 0 1 4 5Z" />
      <path d="M7 10h0M11 10h0M15 10h0" />
    </svg>
  );
}

function Book(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 6C9.5 4.3 6 4.3 3.5 5.3v13C6 17.3 9.5 17.3 12 19c2.5-1.7 6-1.7 8.5-.7v-13C18 4.3 14.5 4.3 12 6Z" />
      <path d="M12 6v13" />
    </svg>
  );
}

function Heart(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 20C5 14.5 3.5 10.5 6.2 8c2-1.8 4.6-.2 5.8 1.8C13.2 7.8 15.8 6.2 17.8 8c2.7 2.5 1.2 6.5-5.8 12Z" />
    </svg>
  );
}

function Spiral(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 12c0-1.4 1.8-1.6 2.4.2.8 2.4-1.8 3.6-3.6 1.6-2.2-2.4.6-5.6 3.4-5.4 3.4.2 4.6 4 3 6.8" />
    </svg>
  );
}

function Seedling(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 21v-9" />
      <path d="M12 14C8 14 6 11 6 7.5C10 7.5 12 10.5 12 14Z" />
      <path d="M12 13C16 13 18 10 18 6.5C14 6.5 12 9.5 12 13Z" />
    </svg>
  );
}

function Sun(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" />
    </svg>
  );
}

function Steps(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M4 19h4v-4h4v-4h4V7h4" />
    </svg>
  );
}

function People(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="8.5" cy="8" r="2.6" />
      <circle cx="16" cy="9" r="2.2" />
      <path d="M3.8 18.5c0-3 9.4-3 9.4 0" />
      <path d="M13.5 18.5c.2-2.4 6.7-2.4 6.7 0" />
    </svg>
  );
}

function Hands(p: S) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 19c-5 0-8-4.6-7-9 2 2.2 4 3.4 7 3.4" />
      <path d="M12 19c5 0 8-4.6 7-9-2 2.2-4 3.4-7 3.4" />
      <path d="M12 13.4V19" />
    </svg>
  );
}

const icons = {
  ball: Ball,
  bowl: Bowl,
  speech: Speech,
  book: Book,
  heart: Heart,
  spiral: Spiral,
  seedling: Seedling,
  sun: Sun,
  steps: Steps,
  people: People,
  hands: Hands,
};

export type GlyphName = keyof typeof icons;
export type GlyphTone = "green" | "gold" | "blue" | "coral";

const tones: Record<GlyphTone, string> = {
  green: "bg-green-soft text-green",
  gold: "bg-gold-soft text-ink-deep",
  blue: "bg-sky-soft text-ink",
  coral: "bg-coral-soft text-coral",
};

export function Glyph({
  name,
  tone = "green",
  size = 52,
}: {
  name: GlyphName;
  tone?: GlyphTone;
  size?: number;
}) {
  const Icon = icons[name];
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl ${tones[tone]}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Icon style={{ width: size * 0.46, height: size * 0.46 }} />
    </span>
  );
}

const therapyGlyphs: Record<string, { icon: GlyphName; tone: GlyphTone }> = {
  physiotherapy: { icon: "ball", tone: "gold" },
  "occupational-therapy": { icon: "bowl", tone: "blue" },
  "speech-language-therapy": { icon: "speech", tone: "green" },
  "special-education": { icon: "book", tone: "coral" },
  "behavioral-therapy": { icon: "heart", tone: "coral" },
  "sensory-integration": { icon: "spiral", tone: "blue" },
  "early-intervention": { icon: "seedling", tone: "green" },
};

export function TherapyGlyph({ slug, size = 52 }: { slug: string; size?: number }) {
  const g = therapyGlyphs[slug] ?? { icon: "seedling", tone: "green" };
  return <Glyph name={g.icon} tone={g.tone} size={size} />;
}
