import Link from "next/link";
import { notFound } from "next/navigation";
import { therapists, therapyMap, conditionMap } from "@/lib/data";
import { Avatar, Button, Pill } from "@/components/ui";

const map = Object.fromEntries(therapists.map((t) => [t.slug, t]));

export function generateStaticParams() {
  return therapists.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = map[slug];
  return { title: t ? `${t.name} | Anvesha` : "Anvesha" };
}

export default async function TherapistDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = map[slug];
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/therapists" className="text-sm font-semibold text-ink-soft hover:text-coral">
        Back to our therapists
      </Link>

      <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Avatar name={p.name} size={96} />
        <div>
          <h1 className="text-4xl text-ink-deep">{p.name}</h1>
          <p className="mt-1 text-lg text-ink-soft">{p.title}</p>
          <p className="mt-1 text-ink-soft">
            {p.credentials} | {p.experienceYears} years with children
          </p>
        </div>
      </div>

      <p className="mt-7 text-lg text-ink-deep">{p.bio}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
            Specialises in
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.therapySlugs.map((s) => (
              <Link key={s} href={`/therapies/${s}`}>
                <Pill tone="green">{therapyMap[s]?.name}</Pill>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
            Works with
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.conditions.map((c) => (
              <Link key={c} href={`/who-we-help/${c}`}>
                <Pill>{conditionMap[c]?.name}</Pill>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">
            Speaks
          </h2>
          <p className="mt-2 text-ink-deep">{p.languages.join(", ")}</p>
        </div>
      </div>

      <div className="mt-10 rounded-[1.5rem] bg-ink p-7 text-paper">
        <h2 className="text-2xl text-paper">Meet {p.name.split(" ")[0]}</h2>
        <p className="mt-2 text-cream-deep">
          Book a free first visit and we will see if it is the right fit for
          your child.
        </p>
        <div className="mt-5">
          <Button href="/contact">Book a free visit</Button>
        </div>
      </div>
    </div>
  );
}
