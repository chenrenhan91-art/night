import { COMPANY } from "@/data/content";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <PageIntro title="Privacy policy">
      <p>
        This policy describes how {COMPANY.legalName} collects and uses
        personal information when you visit this website or place an order.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect the details you provide in forms and checkout: name, email,
        phone, shipping address, and order notes. We also collect basic
        technical data such as browser type and pages visited, used to operate
        and improve the store.
      </p>
      <h2>How we use it</h2>
      <p>
        We use personal information to fulfill orders, arrange shipping,
        handle returns, answer support requests, and send product
        announcements if you join the newsletter. We do not sell personal
        information.
      </p>
      <h2>Sharing</h2>
      <p>
        We share information with service providers who help us ship, process
        payments, or host the site, only as needed to perform those services.
        We may disclose information if required by law.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions: {COMPANY.phone}
        <br />
        {COMPANY.addressLines.join(" ")}
      </p>
    </PageIntro>
  );
}
