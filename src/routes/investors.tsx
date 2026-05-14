import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investor Relations — Food Concepts Plc" },
      {
        name: "description",
        content:
          "Leadership, shareholding structure and corporate governance information for Food Concepts Plc.",
      },
      { property: "og:title", content: "Investor Relations — Food Concepts Plc" },
      {
        property: "og:description",
        content:
          "Leadership, shareholders, divisions and corporate information.",
      },
    ],
  }),
  component: InvestorsPage,
});

const leadership = [
  ["Mr. Odunayo Olagundoye", "Chairman", "Decades of leadership across consumer goods and finance, guiding long-term strategy."],
  ["Mr. Kofi Abunu", "Managing Director", "Leads day-to-day operations across all three brands and divisions."],
  ["Non-Executive Directors", "Board", "Senior advisors with backgrounds in banking, private equity and consulting."],
];

const shareholders = [
  ["ADP II Holding 12 Ltd", 51.86],
  ["Lugacy 1 Limited", 29.37],
  ["Other holders (Retail, FCMB Trustees, etc.)", 18.77],
];

const divisions = [
  ["Human Resources", "People, culture and leadership development."],
  ["Operations", "Multi-brand restaurant operations across West Africa."],
  ["Supply Chain", "Sourcing, logistics, central kitchens and quality."],
  ["Property & Franchising", "Site development, design and franchise partnerships."],
  ["Shared Services", "Finance, IT, legal and corporate enablement."],
];

function InvestorsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-x grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Investor relations</p>
            <h1 className="display-xl mt-6">
              Steady stewardship. <span className="italic-serif text-primary">Loved brands.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-foreground/70 leading-relaxed">
              A public limited company since 2009, Food Concepts Plc operates with
              transparent governance, professional leadership and a long-term view
              on West African consumer growth.
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* LEADERSHIP */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="eyebrow">Leadership</p>
          <h2 className="display-lg mt-6 max-w-2xl">
            The board <span className="italic-serif text-primary">behind the brands.</span>
          </h2>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {leadership.map(([name, role, bio]) => (
              <div key={name} className="bg-background p-8 md:p-10">
                <div className="aspect-[4/5] rounded-2xl bg-secondary/60 mb-6 grid place-items-center">
                  <span className="font-display text-7xl text-primary/30">
                    {name.split(" ").slice(-1)[0][0]}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{role}</p>
                <h3 className="mt-3 font-display text-2xl">{name}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAREHOLDING */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Shareholding</p>
            <h2 className="display-lg mt-6">
              Structure <span className="italic-serif text-primary">at a glance.</span>
            </h2>
            <p className="mt-6 text-foreground/70 max-w-md">
              Approximate shareholding distribution as currently disclosed.
              Figures are indicative and subject to change.
            </p>
          </div>
          <div className="md:col-span-7 space-y-6">
            {shareholders.map(([name, pct]) => (
              <div key={name as string}>
                <div className="flex justify-between items-baseline">
                  <span className="font-display text-xl">{name}</span>
                  <span className="font-display text-2xl text-primary">{pct}%</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="eyebrow">Divisions</p>
          <h2 className="display-lg mt-6 max-w-2xl">
            Five engines, <span className="italic-serif text-primary">one company.</span>
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {divisions.map(([t, s], i) => (
              <div key={t} className="flex gap-6 border-t border-border pt-6">
                <span className="font-display text-2xl text-primary w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl">{t}</h3>
                  <p className="mt-2 text-foreground/70">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE INFO */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-background/60">Corporate</p>
            <h2 className="display-lg mt-6">
              Where to <span className="italic-serif text-[color:var(--ember)]">find us.</span>
            </h2>
          </div>
          <div className="md:col-span-7 grid gap-10 sm:grid-cols-2 text-background/85">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Registered office</p>
              <p className="mt-4 font-display text-xl leading-snug">
                2, Ilupeju Bye Pass<br />Ilupeju<br />Lagos, Nigeria
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Customer service</p>
              <p className="mt-4 font-display text-xl">0700-642-36423</p>
              <p className="text-background/60">0700-NICENICE</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Incorporation</p>
              <p className="mt-4 font-display text-xl">December 6, 1999</p>
              <p className="text-background/60">Public Limited Company since 2009</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Footprint</p>
              <p className="mt-4 font-display text-xl">300+ locations</p>
              <p className="text-background/60">Across West Africa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
