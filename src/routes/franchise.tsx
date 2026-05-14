import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import franchiseImg from "@/assets/franchise.jpg";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — Chicken Republic & PieXpress" },
      {
        name: "description",
        content:
          "Open a Chicken Republic or PieXpress franchise across West Africa. We bring the brand love, systems and supply chain.",
      },
      { property: "og:title", content: "Franchise — Food Concepts Plc" },
      {
        property: "og:description",
        content:
          "Franchise opportunities for Chicken Republic and PieXpress across West Africa.",
      },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-x grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Franchise opportunities</p>
            <h1 className="display-xl mt-6">
              Bring the love <span className="italic-serif text-primary">to your city.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-foreground/70 leading-relaxed">
              Partner with West Africa's most loved QSR group. We currently invite
              applications for Chicken Republic and PieXpress franchises across
              the region.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={franchiseImg}
            alt="A modern restaurant interior"
            loading="lazy"
            width={1920}
            height={1200}
            className="w-full h-[65vh] object-cover"
          />
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-28 md:py-36">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">What you get</p>
            <h2 className="display-lg mt-6">
              A complete <span className="italic-serif text-primary">operating system</span> for love.
            </h2>
            <p className="mt-6 text-foreground/70 max-w-md">
              From site selection to opening day and beyond, our franchise team
              equips you with everything required to run a profitable, beloved store.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-px bg-border sm:grid-cols-2">
            {[
              ["Brand & marketing", "Launch playbooks, local marketing toolkits, national campaigns."],
              ["Supply chain", "Centralised sourcing, distribution and quality assurance."],
              ["Training academy", "Crew, manager and leadership programmes — delivered hands-on."],
              ["Site & design", "Property scouting, store design and project management."],
              ["Operations support", "Field consultants, audits, and daily operating standards."],
              ["Technology", "POS, inventory, labour and customer data — fully integrated."],
            ].map(([t, s]) => (
              <div key={t} className="bg-background p-8">
                <div className="flex items-center gap-3 text-primary">
                  <Check className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.22em]">{t}</span>
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-foreground text-background py-28 md:py-36">
        <div className="container-x">
          <p className="eyebrow text-background/60">How it works</p>
          <h2 className="display-lg mt-6 max-w-3xl">
            From application to <span className="italic-serif text-[color:var(--ember)]">opening day.</span>
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {[
              ["01", "Apply", "Submit your interest and proposed location."],
              ["02", "Qualify", "Financial, operational and territory assessment."],
              ["03", "Build", "Site approval, design, construction, training."],
              ["04", "Open", "Launch with our marketing and ops support."],
            ].map(([n, t, s]) => (
              <div key={n} className="border-t border-background/15 pt-6">
                <div className="font-display text-3xl text-[color:var(--ember)]">{n}</div>
                <div className="mt-3 font-display text-2xl">{t}</div>
                <p className="mt-3 text-sm text-background/70 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-28 md:py-36">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Begin your application</p>
            <h2 className="display-lg mt-6">
              Tell us about <span className="italic-serif text-primary">your vision.</span>
            </h2>
            <p className="mt-6 text-foreground/70">
              A franchise consultant will respond within 5 business days.
            </p>
            <div className="mt-10 space-y-2 text-sm">
              <p className="text-muted-foreground">Or call us directly</p>
              <a href="tel:070064236423" className="font-display text-3xl text-primary">
                0700-642-36423
              </a>
            </div>
          </div>

          <form
            className="md:col-span-7 grid gap-5 sm:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              ["Full name", "text", "John Adeola"],
              ["Email", "email", "you@email.com"],
              ["Phone", "tel", "+234"],
              ["Proposed city / state", "text", "Lagos"],
            ].map(([label, type, ph]) => (
              <label key={label} className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
                <input
                  type={type as string}
                  placeholder={ph as string}
                  className="border-b border-border bg-transparent py-3 text-base focus:border-primary outline-none transition-colors"
                />
              </label>
            ))}
            <label className="flex flex-col gap-2 text-sm sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Brand of interest</span>
              <select className="border-b border-border bg-transparent py-3 text-base focus:border-primary outline-none">
                <option>Chicken Republic</option>
                <option>PieXpress</option>
                <option>Both</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Tell us more</span>
              <textarea
                rows={4}
                placeholder="Background, available capital, location notes…"
                className="border-b border-border bg-transparent py-3 text-base focus:border-primary outline-none resize-none"
              />
            </label>
            <div className="sm:col-span-2 flex items-center justify-between gap-6 pt-4">
              <p className="text-xs text-muted-foreground max-w-xs">
                By submitting you agree to be contacted about franchise opportunities.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-sm hover:bg-primary transition-colors"
              >
                Submit application
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="container-x pb-28">
        <div className="rounded-3xl border border-border p-10 md:p-14 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow">Investor or supplier?</p>
            <h3 className="font-display text-2xl mt-3">Different conversation, same door.</h3>
          </div>
          <Link to="/investors" className="inline-flex items-center gap-2 text-sm link-underline">
            Visit Investor Relations <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
