import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-x py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-background/60">Food Concepts Plc</p>
            <h3 className="display-lg mt-6 max-w-md">
              Feeding West Africa, <span className="italic-serif text-[color:var(--ember)]">one love</span> at a time.
            </h3>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/franchise"
                className="rounded-full bg-[color:var(--ember)] text-[color:var(--ember-foreground)] px-6 py-3 text-sm hover:opacity-90"
              >
                Open a restaurant
              </Link>
              <Link
                to="/investors"
                className="rounded-full border border-background/30 px-6 py-3 text-sm hover:bg-background/10"
              >
                Investor relations
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Explore</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li><Link to="/" className="hover:text-[color:var(--ember)]">Home</Link></li>
                <li><Link to="/brands" className="hover:text-[color:var(--ember)]">Our Brands</Link></li>
                <li><Link to="/about" className="hover:text-[color:var(--ember)]">About</Link></li>
                <li><Link to="/franchise" className="hover:text-[color:var(--ember)]">Franchise</Link></li>
                <li><Link to="/investors" className="hover:text-[color:var(--ember)]">Investors</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Brands</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>Chicken Republic</li>
                <li>PieXpress</li>
                <li>The Chop Box</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">Contact</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="text-background/80">
                  2, Ilupeju Bye Pass<br />Ilupeju, Lagos, Nigeria
                </li>
                <li>
                  <a href="tel:070064236423" className="hover:text-[color:var(--ember)]">
                    0700-642-36423
                  </a>
                </li>
                <li className="text-background/60">0700-NICENICE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between gap-4 border-t border-background/10 pt-8 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Food Concepts Plc. All rights reserved.</p>
          <p>ISO 22000 · 9001 · 14001 · 45001  ·  NAFDAC GHP  ·  HACCP</p>
        </div>
      </div>
    </footer>
  );
}
