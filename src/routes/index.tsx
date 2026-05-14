import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-chicken.jpg";
import chickenImg from "@/assets/brand-chicken.jpg";
import pieImg from "@/assets/brand-pie.jpg";
import chopImg from "@/assets/brand-chopbox.jpg";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Food Concepts Plc — Loved brands, made for West Africa" },
      {
        name: "description",
        content:
          "The home of Chicken Republic, PieXpress and The Chop Box. 300+ locations across West Africa. Taste the love.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
        <img
          src={heroImg}
          alt="Soulfully spiced West African chicken"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-transparent to-transparent" />

        <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24">
          <p className="eyebrow text-background/60">Food Concepts Plc · Est. 1999</p>
          <h1 className="display-xl mt-6 max-w-5xl text-background">
            Loved brands.
            <br />
            <span className="italic-serif text-[color:var(--ember)]">Made for </span>
            West&nbsp;Africa.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-background/80">
            For 25 years we have built quick service restaurants and baked goods that
            taste like home — owned, operated and obsessed over from Lagos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/brands"
              className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--ember)] px-7 py-4 text-sm tracking-wide text-[color:var(--ember-foreground)]"
            >
              Meet our brands
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              to="/franchise"
              className="group inline-flex items-center gap-3 rounded-full border border-background/30 px-7 py-4 text-sm tracking-wide text-background hover:bg-background/10"
            >
              Become a franchisee
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-8 sm:grid-cols-4 border-t border-background/15 pt-8">
            {[
              ["300+", "Locations"],
              ["3", "Loved brands"],
              ["25", "Years of love"],
              ["4", "ISO certifications"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-4xl md:text-5xl text-background">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-background/60">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Taste the Love",
          "Soulfully Spiced",
          "Everyday Affordable Value",
          "Proudly West African",
          "Since 2000",
        ]}
      />

      {/* MISSION */}
      <section className="py-28 md:py-40">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Our promise</p>
          </div>
          <div className="md:col-span-8">
            <p className="display-lg max-w-3xl">
              To remain relevant as we stretch our limits to deliver
              <span className="italic-serif text-primary"> excellent customer experiences</span>,
              great tasting products and everyday affordable value.
            </p>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {[
                ["Love", "Passionate, relevant, caring, respectful, committed."],
                ["Ownership", "Act with integrity. Take pride in ourselves, company and country."],
                ["Value", "Add value to everyone and everything we touch."],
                ["Execution", "What we do best — every shift, every store."],
                ["Drive", "Take initiative. Push to exceed expectations."],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-border pt-5">
                  <div className="flex items-center gap-3 text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span className="text-xs uppercase tracking-[0.22em]">{title}</span>
                  </div>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS PREVIEW */}
      <section className="bg-secondary/40 py-28 md:py-40">
        <div className="container-x">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <p className="eyebrow">Our portfolio</p>
              <h2 className="display-lg mt-6 max-w-2xl">
                Three brands. <span className="italic-serif text-primary">One love.</span>
              </h2>
            </div>
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-sm link-underline"
            >
              View all brands <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { img: chickenImg, name: "Chicken Republic", year: "Since 2004", tag: "Soulfully spiced chicken" },
              { img: pieImg, name: "PieXpress", year: "On-the-go", tag: "Pies & pastries, hot all day" },
              { img: chopImg, name: "The Chop Box", year: "African mass-market", tag: "Jollof, Egusi & street favourites" },
            ].map((b) => (
              <Link
                key={b.name}
                to="/brands"
                className="group relative block overflow-hidden rounded-2xl bg-foreground"
              >
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                  <p className="text-xs uppercase tracking-[0.22em] text-background/60">
                    {b.year}
                  </p>
                  <h3 className="font-display text-3xl mt-2">{b.name}</h3>
                  <p className="mt-2 text-sm text-background/80">{b.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY STRIP */}
      <section className="py-28 md:py-36">
        <div className="container-x grid gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow">Quality assurance</p>
            <h2 className="display-lg mt-6">
              Standards that <span className="italic-serif text-primary">earn</span> the trust.
            </h2>
            <p className="mt-6 text-foreground/70 max-w-md">
              We hold ourselves to international certification across food safety,
              quality, environment, and occupational health — verified, audited,
              and renewed.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-px bg-border">
            {[
              ["ISO 22000:2018", "Food Safety Management"],
              ["ISO 9001:2015", "Quality Management"],
              ["ISO 14001:2015", "Environmental"],
              ["ISO 45001:2018", "Occupational Health & Safety"],
              ["NAFDAC GHP", "Good Hygiene Practice"],
              ["HACCP", "Hazard Analysis"],
            ].map(([t, s]) => (
              <div key={t} className="bg-background p-8">
                <Award className="h-5 w-5 text-primary" />
                <div className="mt-5 font-display text-xl">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-28 md:pb-36">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--ember)]/40 blur-3xl" />
          <p className="eyebrow text-primary-foreground/70">Franchising</p>
          <h2 className="display-lg mt-6 max-w-2xl">
            Build a beloved brand <span className="italic-serif">in your city.</span>
          </h2>
          <p className="mt-6 max-w-xl text-primary-foreground/80">
            Chicken Republic and PieXpress franchise opportunities are open across
            West Africa. We bring the systems, supply chain and brand love.
          </p>
          <Link
            to="/franchise"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-background text-foreground px-7 py-4 text-sm hover:bg-[color:var(--ember)]"
          >
            Start your application
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
