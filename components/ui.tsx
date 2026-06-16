import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

// Each therapy card uses its own simple single-element illustration, drawn in
// the same watercolour style as the larger illustration on its detail page.
export function TherapySpotIcon({
  slug,
  size = 56,
  className = "",
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-2xl bg-cream ring-1 ring-cream-deep ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/brand/icons/icon-${slug}.png`}
        alt=""
        width={size * 2}
        height={size * 2}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "soft";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-coral text-paper hover:brightness-110 shadow-sm shadow-coral/30",
  outline:
    "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
  soft: "bg-cream-deep text-ink hover:bg-gold-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 text-base font-display font-semibold transition min-h-12 ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Pill({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "green" | "gold" | "coral";
}) {
  const tones = {
    ink: "bg-sky-soft text-ink",
    green: "bg-green-soft text-green",
    gold: "bg-gold-soft text-ink-deep",
    coral: "bg-coral-soft text-coral",
  };
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-sm font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

const avatarTones = [
  "bg-ink text-paper",
  "bg-green text-paper",
  "bg-gold text-ink-deep",
  "bg-coral text-paper",
];

export function Avatar({ name, size = 56 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
  const tone =
    avatarTones[
      name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) %
        avatarTones.length
    ];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-display font-bold ${tone}`}
      style={{ width: size, height: size, fontSize: size / 2.6 }}
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl text-ink-deep sm:text-4xl">{title}</h2>
      {intro ? (
        <p className="mt-3 text-lg text-ink-soft">{intro}</p>
      ) : null}
    </div>
  );
}
