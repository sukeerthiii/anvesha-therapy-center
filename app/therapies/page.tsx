import { TherapyExplorer } from "@/components/explorer";

export const metadata = { title: "Therapies | Anvesha Therapy Center" };

export default function TherapiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
          What we do
        </p>
        <h1 className="mt-2 text-4xl text-ink-deep">Find the right therapy</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Filter by what your child needs. Not sure? Leave the filters open and
          browse, or talk to us and we will help you choose.
        </p>
      </header>
      <div className="mt-10">
        <TherapyExplorer />
      </div>
    </div>
  );
}
