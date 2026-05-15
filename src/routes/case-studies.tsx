import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import moving from "@/assets/product-moving.jpg";
import sedex from "@/assets/product-sedex.jpg";
import accessories from "@/assets/product-accessories.jpg";
import sheets from "@/assets/product-sheets.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — CARTONEX" },
      { name: "description", content: "How we engineered packaging solutions for industrial logistics, e-commerce and heavy machinery clients." },
    ],
  }),
  component: CasesPage,
});

const cases = [
  { client: "Northwind Logistics", sector: "Distribution", img: moving, title: "Cutting damage rates by 78%", metric: "78%", metricLabel: "Damage Reduction" },
  { client: "Helio E-commerce", sector: "Retail", img: sedex, title: "Standardized pack sizes, faster fulfillment", metric: "2.4×", metricLabel: "Pick Rate" },
  { client: "Vertex Industrial", sector: "Heavy Equipment", img: accessories, title: "Custom honeycomb crating for 1.2T loads", metric: "0", metricLabel: "Transit Failures" },
  { client: "Pulpmark Mills", sector: "Raw Supply", img: sheets, title: "Inline conversion of bulk sheets", metric: "−31%", metricLabel: "Lead Time" },
];

function CasesPage() {
  return (
    <SiteLayout>
      <section className="container-x py-16">
        <div className="label-stamp">Proof in Production</div>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Case Studies</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Selected partnerships where structural engineering changed the
          economics of an entire supply chain.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.client} className="card-lift overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <div className="img-zoom aspect-[16/10] overflow-hidden bg-paper">
                <img src={c.img} alt={c.client} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest">
                  <span className="text-primary">{c.client}</span>
                  <span className="text-muted-foreground">{c.sector}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-sky">{c.metric}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.metricLabel}</div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Read story <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
