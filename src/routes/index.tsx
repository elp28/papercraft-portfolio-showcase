import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Leaf, Cog, Truck, ShieldCheck } from "lucide-react";
import heroBoxes from "@/assets/hero-boxes.jpg";
import productCustom from "@/assets/product-custom.jpg";
import productSheets from "@/assets/product-sheets.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CARTONEX — Cardboard Packaging Engineered with Industrial Precision" },
      { name: "description", content: "Custom corrugated boxes, sheets, and protective packaging engineered for industrial logistics." },
    ],
  }),
  component: HomePage,
});

const solutions = [
  {
    tag: "Custom Design",
    title: "Caixas Customizadas",
    desc: "Projects tailored to your equipment with precise die-cuts and specific gramatures.",
    img: productCustom,
    to: "/products" as const,
    cta: "View Details",
  },
  {
    tag: "Raw Material",
    title: "Chapas e Folhas",
    desc: "High-density corrugated sheets in diverse waves (B, C, BC) for in-house processing.",
    img: productSheets,
    to: "/products" as const,
    cta: "Learn More",
  },
  {
    tag: "Logistics First",
    title: "E-commerce Packaging",
    desc: "Optimized solutions reducing void volume and accelerating your packing workflow.",
    img: productAccessories,
    to: "/products" as const,
    cta: "View Portfolio",
    dark: true,
  },
];

const pillars = [
  { icon: ShieldCheck, title: "Quality", desc: "Certified processes ensuring millimetric consistency from prototype to large-scale production." },
  { icon: Leaf, title: "Sustainability", desc: "100% recyclable materials and low-impact processes aligned with global ESG goals." },
  { icon: Truck, title: "Punctuality", desc: "Integrated logistics and rigorous planning to deliver exactly when you need it." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper">
        <div className="container-x grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="label-stamp reveal">— Industrial Reliability</div>
            <h1 className="reveal reveal-2 mt-4 text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
              Cardboard Packaging
              <br />
              with{" "}
              <span className="text-primary">Industrial Precision</span>
            </h1>
            <p className="reveal reveal-3 mt-6 max-w-lg text-lg text-muted-foreground">
              Advanced cartonage engineering delivering maximum protection and
              logistics efficiency. Sustainability and resistance in every fold.
            </p>
            <div className="reveal reveal-4 mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-sky px-6 py-3 text-sm font-semibold text-sky-foreground shadow-md transition-all hover:translate-y-[-1px] hover:shadow-lg"
              >
                Request a Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Our Solutions
              </Link>
            </div>
          </div>

          <div className="img-zoom reveal reveal-3 relative overflow-hidden rounded-lg shadow-card">
            <img
              src={heroBoxes}
              alt="Stack of premium cardboard boxes"
              className="aspect-[4/3] w-full object-cover"
              width={1280}
              height={960}
            />
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="label-stamp">Our Solutions</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for every scale of operation
          </h2>
          <p className="mt-4 text-muted-foreground">
            From small custom runs to complex industrial demands — we develop
            personalized solutions that perform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className={`card-lift group flex flex-col overflow-hidden rounded-lg border ${
                s.dark
                  ? "border-transparent bg-foreground text-background"
                  : "border-border bg-card"
              } shadow-card`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="img-zoom aspect-[4/3] overflow-hidden bg-paper">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    s.dark ? "text-sky" : "text-primary"
                  }`}
                >
                  {s.tag}
                </div>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p
                  className={`mt-2 flex-1 text-sm ${
                    s.dark ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {s.desc}
                </p>
                <div
                  className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${
                    s.dark ? "text-sky" : "text-primary"
                  }`}
                >
                  {s.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-paper">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <div className="flex items-center gap-3">
                <p.icon className="size-5 text-sky" strokeWidth={2} />
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="fold-line mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(45deg, transparent 49%, currentColor 49%, currentColor 51%, transparent 51%)",
            backgroundSize: "20px 20px"
          }} />
          <div className="relative">
            <Cog className="mx-auto size-10 opacity-80" strokeWidth={1.5} />
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Ready to elevate your packaging standard?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Our engineering team is ready to design the ideal solution for your
              product.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:translate-y-[-1px]"
            >
              Request a Quote Now
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
