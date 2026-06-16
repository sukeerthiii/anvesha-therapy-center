import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  therapies,
  therapyMap,
  conditionMap,
  therapistsForTherapy,
} from "@/lib/data";
import { Button, Pill, Avatar } from "@/components/ui";

export function generateStaticParams() {
  return therapies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = therapyMap[slug];
  return { title: t ? `${t.name} | Anvesha` : "Anvesha" };
}

export default async function TherapyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = therapyMap[slug];
  if (!t) notFound();
  const team = therapistsForTherapy(slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/therapies" className="text-sm font-semibold text-ink-soft hover:text-coral">
        Back to therapies
      </Link>

      <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
        <div className="order-2 sm:order-1">
          <h1 className="text-4xl text-ink-deep">{t.name}</h1>
          <p className="mt-3 text-lg text-ink-soft">{t.short}</p>
        </div>
        <div className="order-1 overflow-hidden rounded-[1.5rem] bg-cream ring-1 ring-cream-deep sm:order-2">
          <Image
            src={`/brand/spots/spot-${t.slug}.png`}
            alt=""
            width={1024}
            height={683}
            priority
            className="h-56 w-full object-cover sm:h-64"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-6">
          <h2 className="text-xl text-ink-deep">Who it is for</h2>
          <p className="mt-2 text-ink-soft">{t.forWhom}</p>
        </div>
        <div className="rounded-[1.5rem] border border-cream-deep bg-paper p-6">
          <h2 className="text-xl text-ink-deep">What to expect</h2>
          <p className="mt-2 text-ink-soft">{t.whatToExpect}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Pill tone="gold">Each session about {t.sessionLength}</Pill>
        {t.modes.map((m) => (
          <Pill key={m} tone="green">
            {m}
          </Pill>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl text-ink-deep">Helpful for</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {t.conditions.map((c) => (
            <Link
              key={c}
              href={`/who-we-help/${c}`}
              className="rounded-pill bg-sky-soft px-4 py-2 font-medium text-ink hover:bg-gold-soft"
            >
              {conditionMap[c]?.name}
            </Link>
          ))}
        </div>
      </div>

      {team.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl text-ink-deep">Who you will meet</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {team.map((p) => (
              <Link
                key={p.slug}
                href={`/therapists/${p.slug}`}
                className="flex items-center gap-4 rounded-[1.5rem] border border-cream-deep bg-paper p-5 hover:shadow-sm"
              >
                <Avatar name={p.name} size={56} />
                <span>
                  <span className="block font-display font-bold text-ink-deep">
                    {p.name}
                  </span>
                  <span className="block text-sm text-ink-soft">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 rounded-[1.5rem] bg-ink p-7 text-paper">
        <h2 className="text-2xl text-paper">Want to see if this fits?</h2>
        <p className="mt-2 text-cream-deep">
          The first visit is free. We will assess gently and talk you through
          the next step.
        </p>
        <div className="mt-5">
          <Button href="/contact">Book a free visit</Button>
        </div>
      </div>
    </div>
  );
}
