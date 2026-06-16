import Image from "next/image";
import { SectionHeading, Button } from "@/components/ui";
import { Glyph, type GlyphName, type GlyphTone } from "@/components/glyphs";

export const metadata = { title: "About | Anvesha Therapy Center" };

const values: { title: string; body: string; icon: GlyphName; tone: GlyphTone }[] =
  [
    {
      icon: "seedling",
      tone: "green",
      title: "Ability, not deficit",
      body: "We look for what a child can do, then build on it. We never define a child by a diagnosis.",
    },
    {
      icon: "hands",
      tone: "blue",
      title: "Families are partners",
      body: "You know your child best. We teach, we share, and we make every plan together with you.",
    },
    {
      icon: "heart",
      tone: "coral",
      title: "Dignity, always",
      body: "Warmth, respect and honesty. No pity, no false promises, just steady, real support.",
    },
  ];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src="/brand/logo-mark.png"
          alt="Anvesha logo"
          width={96}
          height={96}
          className="h-24 w-24 rounded-2xl object-contain"
        />
        <div>
          <h1 className="text-4xl text-ink-deep">The meaning of Anvesha</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Anvesha means the search. We search for the ability inside every
            child, the strength that others may have missed. Then we help it
            grow into the light.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Why we exist"
          title="A place built around hope, not fear"
          intro="Too many families are handed a diagnosis and left alone. We started Anvesha so that no parent has to figure this out by themselves."
        />
      </section>

      <section className="mt-10 grid gap-5 sm:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-[1.5rem] border border-cream-deep bg-paper p-6"
          >
            <Glyph name={v.icon} tone={v.tone} size={52} />
            <h3 className="mt-3 text-xl text-ink-deep">{v.title}</h3>
            <p className="mt-2 text-ink-soft">{v.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-5 rounded-[1.5rem] bg-green-soft/50 p-8 sm:grid-cols-3">
        {[
          { n: "1 roof", l: "Every therapy in one place" },
          { n: "6+", l: "Qualified therapists" },
          { n: "Free", l: "First visit, always" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-display text-4xl font-bold text-ink">{s.n}</p>
            <p className="mt-1 text-ink-soft">{s.l}</p>
          </div>
        ))}
      </section>

      <div className="mt-12 rounded-[1.5rem] bg-ink p-8 text-center text-paper">
        <h2 className="text-2xl text-paper">Come and see for yourself</h2>
        <p className="mx-auto mt-2 max-w-xl text-cream-deep">
          The best way to know if Anvesha is right for your child is to visit.
          The first one is free.
        </p>
        <div className="mt-5 flex justify-center">
          <Button href="/contact">Book a free visit</Button>
        </div>
      </div>
    </div>
  );
}
