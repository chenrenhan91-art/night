import Link from "next/link";
import { COMPANY, FAQS } from "@/data/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-10 text-[36px] md:text-[44px]">Support</h1>
      <section className="mb-16 max-w-[720px]">
        <h2 className="heading mb-3 text-[22px]">NS01 User Guide</h2>
        <p className="kicker mb-2">Setting up your lamp</p>
        <p className="mb-8 text-muted">
          Unpack the lamp, fit the cotton shade, plug in the USB-C cable, and
          use the front-mounted dimmer to turn the ambient light on. Press the
          spotlight control to extend the reading beam.
        </p>
        <h2 className="heading mb-3 text-[22px]">NS01 Care & Maintenance</h2>
        <p className="text-muted">
          Dust the body with a dry cloth. The fabric shade must be hand-washed
          to avoid shrinkage. Do not machine wash or tumble dry.
        </p>
      </section>
      <section className="mb-16 max-w-[720px]">
        <h2 className="heading mb-6 text-[22px]">Frequently asked questions</h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer text-[15px]">{f.q}</summary>
              <p className="mt-2 text-[14px] text-muted">
                {f.q.includes("return") ? (
                  <>
                    Read our{" "}
                    <Link href="/pages/returns" className="underline">
                      Returns & Refunds policy
                    </Link>
                    .
                  </>
                ) : (
                  f.a
                )}
              </p>
            </details>
          ))}
        </div>
      </section>
      <section className="max-w-[560px]">
        <h2 className="heading mb-4 text-[22px]">Still need help?</h2>
        <p className="mb-6 text-muted">
          Email us at{" "}
          <a href={COMPANY.emailHref} className="text-paper hover:text-coral">
            {COMPANY.email}
          </a>{" "}
          or use the form below.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
