import { COMPANY } from "@/data/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="wrapper grid gap-12 py-14 md:grid-cols-2 md:py-20">
      <div>
        <h1 className="heading mb-6 text-[36px] md:text-[44px]">Contact Us</h1>
        <p className="mb-8 text-muted">
          Please fill out the form below. We will respond within 1 business day.
        </p>
        <div className="space-y-2 text-[14px] leading-relaxed text-muted">
          <p className="font-medium text-paper">{COMPANY.legalName}</p>
          {COMPANY.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-3">
            <a href={COMPANY.emailHref} className="text-paper hover:text-coral">
              {COMPANY.email}
            </a>
          </p>
          <p>
            <a href={COMPANY.phoneHref} className="text-paper hover:text-coral">
              {COMPANY.phone}
            </a>
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
