import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import warehouse from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CARTONEX" },
      { name: "description", content: "Get in touch with our engineering team to discuss custom packaging solutions for your industrial logistics." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative h-[360px] overflow-hidden">
        <img src={warehouse} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-x relative flex h-full flex-col justify-center text-primary-foreground">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Precision Engineering, delivered to your doorstep.
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Get in touch with our engineering team to discuss custom packaging
            solutions for your industrial logistics.
          </p>
        </div>
      </section>

      <section className="container-x -mt-20 grid gap-6 pb-20 md:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <div className="rounded-lg border border-border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold text-primary">Connect with Logistics</h2>
          <div className="mt-1 h-0.5 w-12 bg-sky" />

          {sent ? (
            <div className="mt-8 rounded-md bg-sky/10 p-6 text-sm">
              <strong className="text-primary">Thanks — request received.</strong>
              <p className="mt-2 text-muted-foreground">
                A member of our engineering team will reach out within one business day.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 grid gap-5"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name">
                  <input required className="input" placeholder="John Doe" />
                </Field>
                <Field label="Email Address">
                  <input required type="email" className="input" placeholder="john@company.com" />
                </Field>
              </div>
              <Field label="Product Interest">
                <select className="input" defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option>Corrugated Shipping Containers</option>
                  <option>Custom Die-Cut Boxes</option>
                  <option>Corrugated Sheets</option>
                  <option>Protective Accessories</option>
                  <option>Heavy-Duty / Industrial</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea rows={4} className="input resize-none" placeholder="How can our engineering team assist you?" />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky px-6 py-3 text-sm font-semibold text-sky-foreground transition-transform hover:translate-y-[-1px]"
              >
                Send Inquiry <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>

        {/* Direct contact */}
        <div className="rounded-lg border border-border bg-paper p-8 shadow-card">
          <h2 className="text-2xl font-bold text-primary">Direct Contact</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Our support lines are open Mon–Fri, 08:00–18:00 EST.
          </p>

          <div className="mt-8 space-y-6">
            <ContactRow icon={Phone} label="Global Sales" value="+1 (800) 555-PACK" />
            <ContactRow icon={Mail} label="Engineering Support" value="solutions@cartonex.com" />
            <ContactRow icon={MapPin} label="Headquarters & Factory" value="442 Industrial Way, Suite 200, Grand Rapids, MI" />
          </div>

          <div className="mt-8 fold-line pt-6">
            <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "FSC Certified", "ASTM Compliant"].map((b) => (
                <span key={b} className="rounded-sm bg-sky/15 px-3 py-1 text-xs font-semibold text-primary">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid var(--input);
          background: var(--card);
          border-radius: 0.375rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 200ms;
        }
        .input:focus { border-color: var(--sky); box-shadow: 0 0 0 3px color-mix(in oklch, var(--sky) 20%, transparent); }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
      {children}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-sky/15 text-primary">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}
