import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Ruler, Cpu, Layers, Gauge, ArrowRight } from "lucide-react";
import engineering from "@/assets/engineering.jpg";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering — CARTONEX" },
      { name: "description", content: "CAD-driven structural design, prototyping and CNC die-cutting for industrial cardboard packaging." },
    ],
  }),
  component: EngineeringPage,
});

const steps = [
  { n: "01", title: "Brief & Spec", desc: "We translate your product, weight class, and supply chain into a structural brief." },
  { n: "02", title: "CAD Modeling", desc: "Parametric 3D models simulate folds, stress, and stacking before any cut is made." },
  { n: "03", title: "Prototyping", desc: "Sample plotters cut working prototypes within 48 hours for hands-on validation." },
  { n: "04", title: "Production", desc: "Approved designs move to CNC die-cutting with millimeter tolerances at any volume." },
];

function EngineeringPage() {
  return (
    <SiteLayout>
      <section className="container-x grid gap-12 py-16 md:grid-cols-2 md:items-center">
        <div>
          <div className="label-stamp">— The Unfolded Design</div>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Where structural science meets paperboard.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Our engineering team transforms cardboard into precision-engineered
            structures. Every flap, score, and slot is calculated for purpose.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Ruler, label: "±0.5mm tolerance" },
              { icon: Cpu, label: "CAD/CAM workflow" },
              { icon: Layers, label: "B / C / BC waves" },
              { icon: Gauge, label: "ISTA stress tested" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 rounded-md border border-border bg-card p-3 text-sm">
                <c.icon className="size-4 text-sky" />
                {c.label}
              </div>
            ))}
          </div>
        </div>
        <div className="img-zoom overflow-hidden rounded-lg shadow-card">
          <img src={engineering} alt="Engineer reviewing structural CAD" className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="border-y border-border bg-paper py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="label-stamp">Our Process</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">From sketch to pallet in four moves.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="card-lift rounded-lg border border-border bg-card p-6 shadow-card">
                <div className="text-sm font-bold text-sky">{s.n}</div>
                <h3 className="mt-2 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Have a complex packaging challenge?</h2>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Brief our engineers <ArrowRight className="size-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
