import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Check, Leaf, Cog, Truck } from "lucide-react";
import sedex from "@/assets/product-sedex.jpg";
import sheets from "@/assets/product-sheets.jpg";
import moving from "@/assets/product-moving.jpg";
import accessories from "@/assets/product-accessories.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalog — CARTONEX" },
      { name: "description", content: "Precision-engineered packaging solutions for durability, logistics and sustainability." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { title: "Caixas Sedex", tag: "Standard", img: sedex, desc: "Optimized dimensions for postal services and e-commerce shipping with reinforced fold lines." },
  { title: "Chapas de Papelão", tag: "Raw Material", img: sheets, desc: "High-density corrugated sheets for industrial customization and protective layering." },
  { title: "Caixas de Mudança", tag: "Heavy Duty", img: moving, desc: "Reinforced double-wall construction specifically engineered for residential or office moves." },
];

const features = [
  { icon: Leaf, title: "Eco-Certified", desc: "100% recyclable materials sourced from sustainable forestry partners." },
  { icon: Cog, title: "Custom Precision", desc: "CNC-grade cutting for exact dimensions tailored to your machinery." },
  { icon: Truck, title: "Global Logistics", desc: "Flat-packed shipping to maximize storage space and reduce carbon footprint." },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="container-x py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="label-stamp">Industrial Solutions</div>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Product Catalog</h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Precision-engineered packaging solutions designed for durability,
              logistics efficiency, and environmental sustainability.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="card-lift overflow-hidden rounded-lg border border-border bg-card shadow-card"
            >
              <div className="img-zoom aspect-[4/3] overflow-hidden bg-paper">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <span className="rounded-sm bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Request Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Featured accessories */}
        <div className="mt-8 grid gap-0 overflow-hidden rounded-xl border border-sky/30 bg-sky/5 md:grid-cols-2">
          <div className="p-10 md:p-12">
            <div className="label-stamp">Premium Protection</div>
            <h2 className="mt-3 text-3xl font-bold">Acessórios de Proteção</h2>
            <p className="mt-3 text-muted-foreground">
              Complete your packaging line with our structural inserts, edge
              protectors, and specialized cushioning materials.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {["Recyclable Fitters", "Corner Guards", "Honeycomb Inserts", "Custom Dividers"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 text-sky" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/engineering"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Explore Accessories
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="img-zoom min-h-[280px] overflow-hidden bg-foreground">
            <img src={accessories} alt="Protective inserts" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 fold-line pt-10">
          <div className="grid gap-10 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
