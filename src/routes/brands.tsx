import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import chickenImg from "@/assets/brand-chicken.jpg";
import pieImg from "@/assets/brand-pie.jpg";
import chopImg from "@/assets/brand-chopbox.jpg";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — Food Concepts Plc" },
      {
        name: "description",
        content:
          "Chicken Republic, PieXpress and The Chop Box — three loved brands tailored to West African tastes.",
      },
      { property: "og:title", content: "Our Brands — Food Concepts Plc" },
      {
        property: "og:description",
        content:
          "Chicken Republic, PieXpress and The Chop Box — built on local sourcing, customer love and everyday value.",
      },
    ],
  }),
  component: BrandsPage,
});

const brands = [
  {
    name: "Chicken Republic",
    since: "Since 2004",
    tagline: "Taste the Love.",
    img: chickenImg,
    body: "Soulfully spiced chicken with West African herbs. Built on passion, purpose and Nigerian heritage — and a relentless love for the customer.",
    points: ["Signature spice blend", "300+ restaurants", "Local sourcing"],
  },
  {
    name: "PieXpress",
    since: "On-the-go",
    tagline: "Hot pies, hot pastries.",
    img: pieImg,
    body: "Convenient, freshly baked pies and pastries crafted for the everyday hustle. Affordable, scalable, and frequently co-located with Chicken Republic.",
    points: ["Bakery-fresh daily", "Co-located format", "Grab & go speed"],
  },
  {
    name: "The Chop Box",
    since: "African mass-market",
    tagline: "Naija on a plate.",
    img: chopImg,
    body: "Authentic Nigerian and African meals — Jollof, Egusi, and street-style flavours — served with world-class standards for the mass market.",
    points: ["Local recipes", "Mass-market value", "Made the right way"],
  },
];

function BrandsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-x">
          <p className="eyebrow">Our brands</p>
          <h1 className="display-xl mt-6 max-w-5xl">
            Built for the way <span className="italic-serif text-primary">West Africa eats.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70">
            We create and cultivate brands tailored to local tastes — focused on
            quality ingredients, customer experience and everyday value.
          </p>
        </div>
      </section>

      <div className="hairline" />

      <div className="container-x">
        {brands.map((b, i) => (
          <section
            key={b.name}
            className="grid gap-12 md:gap-20 md:grid-cols-12 py-20 md:py-32 border-b border-border last:border-0"
          >
            <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-3xl bg-foreground">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <p className="eyebrow">{b.since}</p>
              <h2 className="display-lg mt-5">{b.name}</h2>
              <p className="italic-serif text-2xl text-primary mt-4">{b.tagline}</p>
              <p className="mt-6 text-foreground/75 leading-relaxed">{b.body}</p>
              <ul className="mt-8 space-y-3">
                {b.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/franchise"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium link-underline w-fit"
              >
                Franchise this brand <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
