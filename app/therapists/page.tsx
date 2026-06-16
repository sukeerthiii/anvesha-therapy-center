import Link from "next/link";
import { TherapistExplorer } from "@/components/explorer";

export const metadata = { title: "Our therapists | Anvesha Therapy Center" };

export default function TherapistsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
          The people
        </p>
        <h1 className="mt-2 text-4xl text-ink-deep">Our therapists</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Qualified, kind and genuinely fond of children. Find someone who fits
          your child, by skill, by need, by language.
        </p>
      </header>

      <div className="mt-10">
        <TherapistExplorer />
      </div>

      <div className="mt-12 rounded-[1.5rem] border-2 border-dashed border-green bg-green-soft/40 p-8 text-center">
        <h2 className="text-2xl text-ink-deep">Are you a therapist?</h2>
        <p className="mx-auto mt-2 max-w-xl text-ink-soft">
          This work changes the whole course of a child&apos;s life. If that is
          the kind of work you want to do, we would love to meet you.
        </p>
        <Link
          href="/join"
          className="mt-5 inline-flex rounded-pill bg-coral px-6 py-3.5 font-display font-semibold text-paper hover:brightness-110"
        >
          Join our team
        </Link>
      </div>
    </div>
  );
}
