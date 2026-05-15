import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/products", label: "Products" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/engineering", label: "Engineering" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-primary">
          CARTONEX
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-primary" }}
              className="relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-sky after:transition-all hover:after:w-full data-[status=active]:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-md bg-sky px-4 py-2 text-sm font-semibold text-sky-foreground shadow-sm transition-all hover:translate-y-[-1px] hover:shadow-md md:inline-flex"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-sky px-4 py-2 text-sm font-semibold text-sky-foreground"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
