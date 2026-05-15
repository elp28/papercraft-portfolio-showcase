import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Leaf, Recycle, TreePine, Wind, ArrowRight } from "lucide-react";
import sustain from "@/assets/sustainability.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — CARTONEX" },
      { name: "description", content: "100% recyclable materials and low-impact processes aligned with global ESG goals." },
    ],
  }),
  component: SustainabilityPage,
});

const stats = [
  { value: "100%", label: "Recyclable Material" },
  { value: "−42%", label: "Carbon Footprint vs 2019" },
  { value: "FSC", label: "Certified Forestry" },
  { value: "0", label: "Landfill Waste Goal" },
];

function SustainabilityPage() {
  return (
    <SiteLayout>
      <section className="relative h-[420px] overflow-hidden">
        <img src={sustain} alt="Forest canopy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/40" />
        <div className="container-x relative flex h-full flex-col justify-end pb-12 text-primary-foreground">
          <div className="label-stamp text-sky">— Closed Loop</div>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">
            Engineering with the planet in mind.
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Every fold is a commitment. From sourcing to recovery, we design
            packaging that returns to the cycle.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            { icon: TreePine, title: "Responsible Sourcing", desc: "Every fiber comes from FSC-certified suppliers, traced from forest to factory." },
            { icon: Recycle, title: "Circular by Design", desc: "Mono-material construction means our boxes can re-enter the pulp stream up to 7 times." },
            { icon: Wind, title: "Low-Carbon Logistics", desc: "Flat-pack shipping cuts truck volume by 60%, slashing transport emissions." },
            { icon: Leaf, title: "Bio-based Adhesives", desc: "Starch-derived glues eliminate petrochemicals from our entire supply chain." },
          ].map((p) => (
            <div key={p.title} className="card-lift rounded-lg border border-border bg-card p-8 shadow-card">
              <p.icon className="size-6 text-sky" strokeWidth={1.8} />
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-paper p-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Build a sustainable supply chain with us</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky px-6 py-3 text-sm font-semibold text-sky-foreground hover:translate-y-[-1px] transition-transform">
            Talk to our ESG Team <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
