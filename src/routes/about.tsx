import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Food Concepts Plc" },
      {
        name: "description",
        content:
          "From a 1999 startup to a public company powering 300+ restaurants across West Africa. The story, the values, the people behind Food Concepts Plc.",
      },
      { property: "og:title", content: "About — Food Concepts Plc" },
      {
        property: "og:description",
        content:
          "Founded December 6, 1999. Now home to Chicken Republic, PieXpress and The Chop Box.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  ["1999", "Founded as Food Concepts & Entertainment Limited on December 6."],
  ["2000", "Operations begin — managing South African franchises in Nigeria."],
  ["2004", "Launch of Chicken Republic, our first proprietary brand."],
  ["2009", "Becomes a Public Limited Company."],
  ["2015", "PieXpress launches — pies and pastries on the go."],
  ["Today", "300+ locations across West Africa with three loved brands."],
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="container-x grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">About us</p>
            <h1 className="display-xl mt-6">
              A quarter century of <span className="italic-serif text-primary">feeding love.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-foreground/70 leading-relaxed">
              Food Concepts Plc began in Lagos in 1999 with a simple ambition: bring
              world-class quick service restaurant and baked goods experiences to
              West African customers. Today we own and operate three of the region's
              most loved brands.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={aboutImg}
            alt="Our team in the kitchen"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-28 md:py-36">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div className="rounded-3xl bg-secondary/60 p-10 md:p-14">
            <p className="eyebrow">Vision</p>
            <p className="display-lg mt-6">
              To be the <span className="italic-serif text-primary">most loved</span> quick
              service restaurant and baked goods brands across West Africa.
            </p>
          </div>
          <div className="rounded-3xl bg-foreground text-background p-10 md:p-14">
            <p className="eyebrow text-background/60">Mission</p>
            <p className="display-lg mt-6">
              To stretch our limits to deliver <span className="italic-serif text-[color:var(--ember)]">excellent</span>
              {" "}customer experiences, great tasting products, and everyday
              affordable value.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-x">
          <p className="eyebrow">Our journey</p>
          <h2 className="display-lg mt-6 max-w-2xl">
            Twenty-five years, one <span className="italic-serif text-primary">obsession</span>.
          </h2>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {timeline.map(([year, body]) => (
              <div key={year} className="bg-background p-8 md:p-10">
                <div className="font-display text-5xl text-primary">{year}</div>
                <p className="mt-4 text-foreground/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-28 md:py-36">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Recognition</p>
            <h2 className="display-lg mt-6">
              Awarded for <span className="italic-serif text-primary">how</span> we work.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            {[
              ["ISPON Safety Leadership Award", "For excellence in workplace safety culture."],
              ["EHOAN ECO-Friendly Award", "For environmental and health stewardship."],
              ["ISO Certified — 4 Standards", "Food safety, quality, environment, OH&S."],
            ].map(([t, s]) => (
              <div key={t} className="flex items-baseline justify-between gap-6 border-t border-border pt-5">
                <div>
                  <div className="font-display text-2xl">{t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
