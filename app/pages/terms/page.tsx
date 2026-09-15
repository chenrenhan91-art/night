import { COMPANY } from "@/data/content";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <PageIntro title="Terms of service">
      <p>
        This website is operated by {COMPANY.legalName}. Throughout the site,
        “we”, “us” and “our” refer to {COMPANY.legalName}. By visiting the site
        or purchasing something from us, you agree to these terms.
      </p>
      <h2>Online store terms</h2>
      <p>
        You represent that you are the age of majority in your place of
        residence. You may not use our products for any illegal purpose. We
        may refuse service to anyone for any reason at any time.
      </p>
      <h2>Products and prices</h2>
      <p>
        Prices are subject to change without notice. We may limit quantities
        or discontinue products. We try to display colors accurately but
        cannot guarantee your screen matches the physical item. Returns follow
        our Returns policy.
      </p>
      <h2>Orders</h2>
      <p>
        We may refuse or cancel an order. You agree to provide current and
        complete purchase information. We will contact you using the details
        you provide, including {COMPANY.phone}.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        The site and products are provided as is, except where the law
        requires otherwise. To the fullest extent permitted by law,{" "}
        {COMPANY.legalName} is not liable for indirect or consequential
        damages arising from use of the site or products.
      </p>
      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of Hong Kong. Questions:{" "}
        {COMPANY.phone}.
      </p>
    </PageIntro>
  );
}
