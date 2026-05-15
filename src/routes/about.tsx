import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import warehouse from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CARTONEX" },
      { name: "description", content: "Four decades engineering precision cardboard packaging for industrial logistics." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "1984", t: "Founded as a regional carton factory in Grand Rapids." },
  { y: "1998", t: "First CNC die-cutting line. Custom geometry at scale." },
  { y: "2011", t: "FSC certification across all paperboard streams." },
  { y: "2024", t: "Operating 4 plants across 3 continents." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative h-[480px] overflow-hidden">
        <img src={warehouse} alt="CARTONEX manufacturing floor" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container-x relative flex h-full flex-col justify-end pb-14 text-primary-foreground">
          <span className="inline-block w-fit rounded-sm bg-sky px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-foreground">Since 1984</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            Engineering the Future of Structural Packaging.
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Precision-crafted solutions designed to protect your product and
            the environment through innovative cartonage engineering.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Precision is our heritage.
            <br />
            <span className="text-primary">Reliability is our promise.</span>
          </h2>
          <div className="mt-6 h-1 w-16 bg-sky" />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            Founded in the heart of industrial logistics, CARTONEX emerged from
            a simple observation: packaging is not just a container; it is a
            critical component of the supply chain. For four decades, we have
            evolved from a small carton factory into a global leader in
            precision-engineered paperboard solutions.
          </p>
          <p>
            Our philosophy is built on the concept of "The Unfolded Design." We
            view every sheet of cardboard as an opportunity for structural
            innovation. By combining high-density materials with proprietary
            folding geometries, we create packaging that maximizes strength
            while minimizing material waste.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-paper py-16">
        <div className="container-x">
          <div className="label-stamp">Milestones</div>
          <h2 className="mt-2 text-3xl font-bold">Four decades of structural thinking.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.y} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <div className="text-2xl font-bold text-primary">{m.y}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Let's engineer something durable.</h2>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky px-6 py-3 text-sm font-semibold text-sky-foreground hover:translate-y-[-1px] transition-transform">
          Get in touch <ArrowRight className="size-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
