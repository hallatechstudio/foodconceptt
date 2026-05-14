import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/franchise", label: "Franchise" },
  { to: "/investors", label: "Investors" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg leading-none">
            f
          </span>
          <span className="font-display text-lg tracking-tight">
            Food Concepts<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground link-underline"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:070064236423"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            0700-NICENICE
          </a>
          <Link
            to="/franchise"
            className="rounded-full bg-foreground text-background px-5 py-2 text-sm hover:bg-primary transition-colors"
          >
            Partner with us
          </Link>
        </div>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/franchise"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-foreground text-background px-5 py-2 text-sm"
            >
              Partner with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
