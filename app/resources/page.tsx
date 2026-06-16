import { Button } from "@/components/ui";

export const metadata = { title: "Family resources | Anvesha Therapy Center" };

const guides = [
  {
    title: "Getting a disability certificate (UDID)",
    body: "What the UDID card is, why it helps, and the simple steps to apply for one.",
  },
  {
    title: "Government schemes and aids",
    body: "Support for therapy, equipment and wheelchairs, including the ADIP scheme, explained in plain words.",
  },
  {
    title: "School and your child's rights",
    body: "What the law says about admission, and how to talk to a school about your child.",
  },
  {
    title: "Simple exercises for home",
    body: "Gentle activities you can do between sessions, so progress keeps going every day.",
  },
  {
    title: "Feeding and positioning",
    body: "Everyday tips for safe, calm mealtimes and comfortable sitting.",
  },
  {
    title: "Looking after yourself",
    body: "Caring for a child is hard work. A few honest words for tired parents.",
  },
];

const faqs = [
  {
    q: "How do I know if my child needs therapy?",
    a: "If you have a worry, that is reason enough to come. The first visit is free and we will tell you honestly what we see.",
  },
  {
    q: "Is the first visit really free?",
    a: "Yes. We listen to your story and do a gentle assessment, with no charge and no pressure.",
  },
  {
    q: "My child is very young. Is it too early?",
    a: "It is almost never too early. The early years are when support helps the most.",
  },
  {
    q: "What languages do you speak?",
    a: "Our team speaks English, Hindi and several regional languages. Tell us what is comfortable for you.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-green">
          You are not alone
        </p>
        <h1 className="mt-2 text-4xl text-ink-deep">A guide for families</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Plain, honest help with the parts no one explains. Certificates,
          schemes, school and simple things you can do at home.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {guides.map((g) => (
          <article
            key={g.title}
            className="rounded-[1.5rem] border border-cream-deep bg-paper p-6"
          >
            <h2 className="text-xl text-ink-deep">{g.title}</h2>
            <p className="mt-2 text-ink-soft">{g.body}</p>
            <p className="mt-3 text-sm font-semibold text-coral">Coming soon</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl text-ink-deep">Questions parents often ask</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-[1.25rem] border border-cream-deep bg-paper p-5"
            >
              <summary className="cursor-pointer font-display font-semibold text-ink-deep">
                {f.q}
              </summary>
              <p className="mt-2 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-[1.5rem] bg-green-soft/60 p-8 text-center">
        <h2 className="text-2xl text-ink-deep">Still have a question?</h2>
        <p className="mx-auto mt-2 max-w-xl text-ink-soft">
          Ask us anything. There are no silly questions when it comes to your
          child.
        </p>
        <div className="mt-5 flex justify-center">
          <Button href="/contact">Talk to us</Button>
        </div>
      </div>
    </div>
  );
}
