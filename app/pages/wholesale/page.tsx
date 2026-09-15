import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Wholesale" };

export default function WholesalePage() {
  return (
    <div className="wrapper max-w-[640px] py-14 md:py-20">
      <h1 className="heading mb-4 text-[36px]">Wholesale</h1>
      <p className="mb-8 text-muted">
        Please use the form below to contact us. Please specify quantity and
        timing requirements. We will respond within 1 business day.
      </p>
      <ContactForm extraPlaceholder="Quantity and timing requirements" />
    </div>
  );
}
