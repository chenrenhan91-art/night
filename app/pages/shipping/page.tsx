import { COMPANY } from "@/data/content";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "Shipping policy" };

export default function ShippingPage() {
  return (
    <PageIntro title="Shipping policy">
      <p>
        Your cart will reflect the available shipping options for your item(s).
        Once your order is placed, items usually ship within 1-5 business days.
        We will let you know when we have shipped your order. Once your order
        leaves our studio, timing and updates are handled by the shipping
        carrier.
      </p>
      <p>
        When finalizing your order, please ensure your address is correct.{" "}
        {COMPANY.legalName} is not liable for orders delivered incorrectly or
        lost due to incorrect shipping information. We also cannot be held
        liable for packages tracked as delivered but not received. If a
        shipment is returned to us, we can reship it. Any reshipment fees are
        the customer&apos;s responsibility.
      </p>
      <p>
        Please inspect packages upon delivery and contact us within 5 days of
        delivery to report items lost, stolen, misdelivered, or damaged in
        transit. After 5 days those claims are no longer eligible for
        replacement or refund.
      </p>
      <p>
        It is the purchaser&apos;s responsibility to pay any import taxes and
        duties for products that cross international borders.
      </p>
      <p>
        Questions:{" "}
        <a href={COMPANY.emailHref}>{COMPANY.email}</a>, {COMPANY.phone},{" "}
        {COMPANY.addressLines.join(" ")}
      </p>
    </PageIntro>
  );
}
