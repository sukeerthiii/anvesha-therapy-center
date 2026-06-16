import Link from "next/link";
import { notFound } from "next/navigation";
import {
  conditions,
  conditionMap,
  therapiesForCondition,
  therapistsForCondition,
} from "@/lib/data";
import { Avatar, Button, TherapySpotIcon } from "@/components/ui";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = conditionMap[slug];
  return { title: c ? `${c.name} | Anvesha` : "Anvesha" };
}

export default async function ConditionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = conditionMap[slug];
  if (!c) notFound();
  const relatedTherapies = therapiesForCondition(slug);
  const team = therapistsForCondition(slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/who-we-help" className="text-sm font-semibold text-ink-soft hover:text-coral">
        Back to who we help
      </Link>

      <h1 className="mt-6 text-4xl text-ink-deep">{c.name}</h1>
      <p className="mt-4 text-lg text-ink-deep">{c.about}</p>

      {c.companions && (
        <div className="mt-6 flex flex-wrap gap-2">
          {c.companions.map((x) => (
            <span
              key={x}
              className="rounded-pill bg-cream-deep px-3.5 py-2 text-sm font-medium text-ink-deep"
            >
              {x}
            </span>
          ))}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-2xl text-ink-deep">How we help</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {relatedTherapies.map((t) => (
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
      </section>

      {team.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl text-ink-deep">Therapists who can help</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
        </section>
      )}

      <div className="mt-10 rounded-[1.5rem] bg-ink p-7 text-paper">
        <h2 className="text-2xl text-paper">Let us start gently</h2>
        <p className="mt-2 text-cream-deep">
          Book a free first visit. We will listen, assess with care, and walk
          you through what comes next. No pressure at all.
        </p>
        <div className="mt-5">
          <Button href="/contact">Book a free visit</Button>
        </div>
      </div>
    </div>
  );
}
