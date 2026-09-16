import { COMPANY } from "@/data/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Wholesale" };

export default function WholesalePage() {
  return (
    <div className="wrapper max-w-[640px] py-14 md:py-20">
      <h1 className="heading mb-4 text-[36px]">Wholesale</h1>
      <p className="mb-8 text-muted">
        Email{" "}
        <a href={COMPANY.emailHref} className="text-paper hover:text-coral">
          {COMPANY.email}
        </a>{" "}
        or use the form below. Please specify quantity and timing
        requirements. We will respond within 1 business day.
      </p>
      <ContactForm extraPlaceholder="Quantity and timing requirements" />
    </div>
  );
}
