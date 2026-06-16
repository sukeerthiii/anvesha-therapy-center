import Link from "next/link";
import Image from "next/image";
import { Button, SectionHeading, Avatar, TherapySpotIcon } from "@/components/ui";
import { GuidedHelper } from "@/components/guided-helper";
import { WashBlobs } from "@/components/illustrations";
import { Glyph } from "@/components/glyphs";
import { therapies, therapists } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <WashBlobs className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-tight text-ink-deep sm:text-5xl">
              Your child can grow, in their own way and their own time.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Anvesha is a therapy centre for children with cerebral palsy and
              other special needs. Movement, speech, everyday skills and
              learning, all under one roof, with one team that truly gets to
              know your child.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a free first visit</Button>
              <Button href="/therapies" variant="outline">
                See how we help
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              The first visit is always free. We start by listening to your
              story.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full bg-paper/70 ring-1 ring-cream-deep sm:h-96 sm:w-96">
              <Image
                src="/brand/hero-kids.png"
                alt="Children playing happily together in a garden"
                fill
                priority
                sizes="(max-width: 640px) 18rem, 24rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guided helper */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <GuidedHelper />
      </section>

      {/* One team under one roof */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          center
          eyebrow="One roof"
          title="One caring team, one plan for your child"
          intro="Cerebral palsy rarely comes alone. Instead of running between clinics across the city, your child sees their whole team in one place, working together."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {(
            [
              {
                icon: "speech",
                tone: "blue",
                title: "We listen first",
                body: "We start with your story and your child, not a checklist.",
              },
              {
                icon: "steps",
                tone: "gold",
                title: "We make one plan",
                body: "Every therapist shares notes, so the goals stay joined up.",
              },
              {
                icon: "seedling",
                tone: "green",
                title: "We grow together",
                body: "We celebrate every small win and adjust as your child changes.",
              },
            ] as const
          ).map((c) => (
            <div
              key={c.title}
              className="rounded-[1.5rem] border border-cream-deep bg-paper p-6"
            >
              <Glyph name={c.icon} tone={c.tone} size={52} />
              <h3 className="mt-3 text-xl text-ink-deep">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Every stage */}
      <section className="bg-green-soft/50 paper-grain">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Every child, every stage"
            title="Wherever your child is today, we start there"
            intro="From the very first worry to the biggest milestones, no stage is too early and no child is turned away. We meet your child exactly as they are."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Just diagnosed",
              "Learning to sit and stand",
              "Taking first steps",
              "Moving with a wheelchair",
              "Finding their voice",
              "Getting ready for school",
            ].map((t) => (
              <span
                key={t}
                className="rounded-pill bg-paper px-4 py-2.5 font-medium text-ink-deep"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Therapies that feel like play"
          intro="Every session is built around your child's interests, so growing feels less like work and more like fun."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {therapies.slice(0, 6).map((t) => (
            <Link
              key={t.slug}
              href={`/therapies/${t.slug}`}
              className="group rounded-[1.5rem] border border-cream-deep bg-paper p-6 transition hover:border-green hover:shadow-sm"
            >
              <TherapySpotIcon slug={t.slug} size={56} />
              <h3 className="mt-3 text-xl text-ink-deep group-hover:text-coral">
                {t.name}
              </h3>
              <p className="mt-2 text-ink-soft">{t.short}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/therapies" variant="soft">
            See all therapies
          </Button>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sky-soft/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="The people"
            title="The people your child will look forward to seeing"
            intro="Caring, qualified and genuinely fond of children. The kind of people you can lean on, on the hard days and the happy ones."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {therapists.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/therapists/${p.slug}`}
                className="flex items-center gap-4 rounded-[1.5rem] border border-cream-deep bg-paper p-5 transition hover:shadow-sm"
              >
                <Avatar name={p.name} size={60} />
                <span>
                  <span className="block font-display text-lg font-bold text-ink-deep">
                    {p.name}
                  </span>
                  <span className="block text-sm text-ink-soft">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/therapists" variant="soft">
              Meet the whole team
            </Button>
          </div>
        </div>
      </section>

      {/* Parent stories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          center
          eyebrow="Parents"
          title="The moments that keep us going"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              quote:
                "Honestly, I came in scared. No one had really explained what was happening with my son. They sat with me, listened, and spoke to me in my own language. He sits up on his own now. I still remember the exact day it happened.",
              who: "Anjali, mother of a 4 year old",
            },
            {
              quote:
                "They did not just work with my daughter. They showed me what to do at home too. It stopped feeling like something I was facing all on my own.",
              who: "Imran, father of a 6 year old",
            },
          ].map((s) => (
            <figure
              key={s.who}
              className="rounded-[1.5rem] border border-cream-deep bg-paper p-7"
            >
              <Glyph name="heart" tone="coral" size={44} />
              <blockquote className="mt-3 text-lg text-ink-deep">
                {s.quote}
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-ink-soft">
                {s.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Resources teaser */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-[1.75rem] bg-ink p-8 text-paper sm:p-12">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              You are not alone in this
            </p>
            <h2 className="mt-2 text-3xl text-paper sm:text-4xl">
              Help with the parts no one explains
            </h2>
            <p className="mt-3 text-lg text-cream-deep">
              Disability certificates, government schemes, school admissions,
              and simple exercises you can do at home. Plain guidance, in your
              language.
            </p>
            <div className="mt-6">
              <Button href="/resources" variant="primary">
                Open the family guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
