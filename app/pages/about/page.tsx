import Link from "next/link";
import { COMPANY } from "@/data/content";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PageIntro title="About Us">
      <h2>Our Mission</h2>
      <p>
        {COMPANY.legalName} creates products designed for the bedtime
        experience. We believe the transition from wakefulness to sleep is
        critical, and worthy of products designed specifically for that
        occasion.
      </p>
      <h2>Made with care</h2>
      <p>
        The NS01 lamp is our first product and captures our goal to create
        objects that combine practical innovation with quiet design. We select
        bedside companions that last, and we stand behind them with human
        support from our Hong Kong office.
      </p>
      <p>
        {COMPANY.addressLines.join(" ")}
        <br />
        <a href={COMPANY.emailHref}>{COMPANY.email}</a>
        <br />
        <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
      </p>
      <p>
        Questions? <Link href="/pages/contact">Contact us</Link>.
      </p>
    </PageIntro>
  );
}
