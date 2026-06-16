import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: IconProps) {
  const { title, ...rest } = props;
  return {
    rest,
    a11y: title
      ? { role: "img", "aria-label": title }
      : { "aria-hidden": true, focusable: false },
  };
}

/* The Anvesha emblem: a sprout held in cupped hands under a rising sun. */
export function Mark(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 100 100" {...a11y} {...rest}>
      {/* sun rays */}
      <g
        stroke="var(--color-gold)"
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="50" y1="6" x2="50" y2="13" />
        <line x1="31" y1="11" x2="34" y2="18" />
        <line x1="69" y1="11" x2="66" y2="18" />
        <line x1="17" y1="23" x2="22" y2="28" />
        <line x1="83" y1="23" x2="78" y2="28" />
      </g>
      {/* sun arc */}
      <path
        d="M24 46 A26 26 0 0 1 76 46"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="4.4"
        strokeLinecap="round"
      />
      {/* sprout */}
      <path
        d="M50 70 L50 44"
        stroke="var(--color-green)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M50 50 C40 50 33 44 33 36 C43 36 50 42 50 50 Z"
        fill="var(--color-green)"
      />
      <path
        d="M50 50 C60 50 67 44 67 36 C57 36 50 42 50 50 Z"
        fill="var(--color-green)"
      />
      {/* cupped hands */}
      <path
        d="M50 82 C32 82 23 67 27 53 C36 61 43 67 50 67 Z"
        fill="var(--color-ink)"
      />
      <path
        d="M50 82 C68 82 77 67 73 53 C64 61 57 67 50 67 Z"
        fill="var(--color-ink)"
      />
    </svg>
  );
}

/* Organic background washes, the watercolour feeling without heavy images. */
export function WashBlobs(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="none" {...a11y} {...rest}>
      <path
        d="M120 60c80-40 200-30 260 20s120 30 150 90-40 140-150 150-260-20-330-80-10-140 70-180z"
        fill="var(--color-gold-soft)"
        opacity="0.55"
      />
      <path
        d="M380 40c70 10 150 60 160 130s-60 130-150 140-150-40-150-120 70-160 140-150z"
        fill="var(--color-sky-soft)"
        opacity="0.6"
      />
      <path
        d="M60 220c40-50 150-60 210-20s90 120 30 160-180 20-230-30-50-60-10-110z"
        fill="var(--color-green-soft)"
        opacity="0.55"
      />
    </svg>
  );
}

export function Sprout(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 64 64" {...a11y} {...rest}>
      <path
        d="M32 56 L32 26"
        stroke="var(--color-green)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M32 34C22 34 15 27 15 18C26 18 32 25 32 34Z"
        fill="var(--color-green)"
      />
      <path
        d="M32 34C42 34 49 27 49 18C38 18 32 25 32 34Z"
        fill="var(--color-green)"
        opacity="0.85"
      />
    </svg>
  );
}

export function Kite(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 64 64" {...a11y} {...rest}>
      <path
        d="M32 6 L52 28 L32 50 L12 28 Z"
        fill="var(--color-coral)"
        opacity="0.9"
      />
      <path d="M32 6 L32 50 M12 28 L52 28" stroke="var(--color-paper)" strokeWidth="2" />
      <path
        d="M32 50 C34 56 28 58 31 62"
        stroke="var(--color-ink)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Boat(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 64 64" {...a11y} {...rest}>
      <path d="M12 38 L52 38 L44 52 L20 52 Z" fill="var(--color-ink)" />
      <path d="M33 38 L33 12 L52 34 Z" fill="var(--color-gold)" />
    </svg>
  );
}

export function Bird(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 64 64" {...a11y} {...rest}>
      <path
        d="M8 36 C20 22 28 22 32 32 C36 22 44 22 56 36"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sun(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 64 64" {...a11y} {...rest}>
      <circle cx="32" cy="34" r="13" fill="var(--color-gold)" />
      <g
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <line x1="32" y1="6" x2="32" y2="13" />
        <line x1="12" y1="14" x2="17" y2="19" />
        <line x1="52" y1="14" x2="47" y2="19" />
        <line x1="6" y1="34" x2="13" y2="34" />
        <line x1="51" y1="34" x2="58" y2="34" />
      </g>
    </svg>
  );
}

export function Heart(props: IconProps) {
  const { rest, a11y } = base(props);
  return (
    <svg viewBox="0 0 64 64" {...a11y} {...rest}>
      <path
        d="M32 54 C12 40 10 24 22 20 C28 18 32 24 32 24 C32 24 36 18 42 20 C54 24 52 40 32 54 Z"
        fill="var(--color-coral)"
      />
    </svg>
  );
}
