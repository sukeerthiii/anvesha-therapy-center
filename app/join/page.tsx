import { ApplyFlow } from "@/components/apply-flow";
import { WashBlobs } from "@/components/illustrations";
import { Glyph, type GlyphName, type GlyphTone } from "@/components/glyphs";

export const metadata = { title: "Join our team | Anvesha Therapy Center" };

const reasons: { title: string; body: string; icon: GlyphName; tone: GlyphTone }[] =
  [
    {
      icon: "heart",
      tone: "coral",
      title: "Work that truly matters",
      body: "You will not just run sessions. You will change the direction of a child's whole life.",
    },
    {
      icon: "people",
      tone: "blue",
      title: "A real team around you",
      body: "Physios, occupational and speech therapists, special educators, all under one roof, all sharing what they learn.",
    },
    {
      icon: "seedling",
      tone: "green",
      title: "Room to grow",
      body: "Mentoring, learning and the space to become truly skilled in paediatric care.",
    },
  ];

export default function JoinPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <WashBlobs className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
            Join us
          </p>
          <h1 className="mt-2 text-4xl text-ink-deep sm:text-5xl">
            The most important work you will ever do
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            A therapist is often the first person who tells a frightened family
            that their child has a future. If you want your work to mean
            something, this is it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-[1.5rem] border border-cream-deep bg-paper p-6"
            >
              <Glyph name={r.icon} tone={r.tone} size={52} />
              <h2 className="mt-3 text-xl text-ink-deep">{r.title}</h2>
              <p className="mt-2 text-ink-soft">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl text-ink-deep">We are looking for</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Physiotherapists",
            "Occupational therapists",
            "Speech therapists",
            "Special educators",
            "Behaviour and sensory specialists",
            "Early intervention therapists",
          ].map((r) => (
            <span
              key={r}
              className="rounded-pill bg-sky-soft px-4 py-2.5 font-medium text-ink"
            >
              {r}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <ApplyFlow />
        </div>
      </section>
    </div>
  );
}
