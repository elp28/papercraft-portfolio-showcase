import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-paper">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold tracking-tight text-primary">CARTONEX</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Precision Engineering for Industrial Reliability. Leading the future
            of sustainable cartonage since 1984.
          </p>
        </div>

        <div>
          <div className="label-stamp mb-3">Solutions</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary">Custom Designs</Link></li>
            <li><Link to="/engineering" className="hover:text-primary">Quality Standards</Link></li>
            <li><Link to="/products" className="hover:text-primary">Material Specs</Link></li>
          </ul>
        </div>

        <div>
          <div className="label-stamp mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-primary">Contact Sales</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-primary">About CARTONEX</Link></li>
          </ul>
        </div>

        <div>
          <div className="label-stamp mb-3">Newsletter</div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:border-sky"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              →
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} CARTONEX Packaging Systems. Precision Engineering for Industrial Reliability.
        </div>
      </div>
    </footer>
  );
}
