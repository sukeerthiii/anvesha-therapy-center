import Link from "next/link";
import { conditions } from "@/lib/data";
import { Button } from "@/components/ui";
import { WashBlobs } from "@/components/illustrations";
import { Glyph, type GlyphName, type GlyphTone } from "@/components/glyphs";

const conditionGlyphs: { icon: GlyphName; tone: GlyphTone }[] = [
  { icon: "seedling", tone: "green" },
  { icon: "sun", tone: "gold" },
  { icon: "heart", tone: "coral" },
  { icon: "hands", tone: "blue" },
];

export const metadata = { title: "Who we help | Anvesha Therapy Center" };

export default function WhoWeHelpPage() {
  const hero = conditions.find((c) => c.hero)!;
  const rest = conditions.filter((c) => !c.hero);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
          Who we help
        </p>
        <h1 className="mt-2 text-4xl text-ink-deep">
          Every child who comes to us is welcome
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          We are a home for children with cerebral palsy, and for many other
          children who learn, move and feel the world in their own way.
        </p>
      </header>

      {/* CP hero card */}
      <section className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-cream-deep bg-paper p-8 sm:p-10">
        <WashBlobs className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-pill bg-green-soft px-3 py-1 text-sm font-semibold text-green">
            What we know best
          </span>
          <h2 className="mt-3 text-3xl text-ink-deep">{hero.name}</h2>
          <p className="mt-3 text-lg text-ink-soft">{hero.about}</p>
          <div className="mt-5">
            <p className="font-display font-semibold text-ink">
              Cerebral palsy often comes with companions. We help with all of
              them:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hero.companions?.map((c) => (
                <span
                  key={c}
                  className="rounded-pill bg-cream-deep px-3.5 py-2 text-sm font-medium text-ink-deep"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={`/who-we-help/${hero.slug}`}>
              How we help with cerebral palsy
            </Button>
            <Button href="/contact" variant="outline">
              Book a free visit
            </Button>
          </div>
        </div>
      </section>

      {/* Other conditions */}
      <section className="mt-12">
        <h2 className="text-2xl text-ink-deep">We also help children with</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => {
            const g = conditionGlyphs[i % conditionGlyphs.length];
            return (
              <Link
                key={c.slug}
                href={`/who-we-help/${c.slug}`}
                className="group rounded-[1.5rem] border border-cream-deep bg-paper p-6 transition hover:border-green hover:shadow-sm"
              >
                <Glyph name={g.icon} tone={g.tone} size={52} />
                <h3 className="mt-3 text-xl text-ink-deep group-hover:text-coral">
                  {c.name}
                </h3>
                <p className="mt-2 text-ink-soft">{c.short}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
