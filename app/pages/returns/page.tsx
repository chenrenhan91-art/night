import { COMPANY } from "@/data/content";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "Returns & Refunds Policy" };

export default function ReturnsPage() {
  return (
    <PageIntro title="Returns & Refunds Policy">
      <p>
        We want you to love our products, but if you don&apos;t we have a
        14-day return policy. You have 14 days after the delivery date to
        request a return.
      </p>
      <p>
        To be eligible, the item must be in the same condition you received it,
        unused, with all tags, components, and accessories, and in its original
        packaging. You will also need proof of purchase.
      </p>
      <p>
        To start a return, contact us at {COMPANY.phone} and include the reason
        plus a photo of the product. If accepted, we will send instructions for
        where to send the package. Items sent back without a request will not
        be accepted.
      </p>
      <p>
        Shipping fees are non-refundable and return shipping costs are the
        customer&apos;s responsibility. Once a return is requested you have 10
        days to ship the product or provide proof of shipping.
      </p>
      <p>
        A 5% restocking fee is deducted on returned items. Items that show
        signs of tampering will be refused.
      </p>
      <p>
        We will notify you after inspection. Approved refunds go back to the
        original payment method within 10 business days.
      </p>
    </PageIntro>
  );
}
