import { COMPANY } from "@/data/content";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "Warranty Policy" };

export default function WarrantyPage() {
  return (
    <PageIntro title="One Year Limited Warranty and Repairs">
      <ol>
        <li>
          {COMPANY.legalName} may repair or replace parts of the NS01 rather
          than replace the entire lamp that is under this warranty.
        </li>
        <li>
          For one (1) year from the date of purchase the following items will
          be repaired or replaced if they show no signs of misuse and are
          deemed manufacturing defects. A short video of the defective part
          must be provided before the warranty process can begin.
          <ul>
            <li>Periscopic Hinge</li>
            <li>Circuit Board Assembly</li>
            <li>LED Light</li>
            <li>Gas Spring</li>
          </ul>
        </li>
        <li>
          Unauthorized repairs or permanent cosmetic customizations void the
          warranty.
        </li>
        <li>
          Warranty service is arranged through {COMPANY.legalName},{" "}
          {COMPANY.addressLines.join(" ")}. Contact {COMPANY.phone} to begin.
          If you do not have the original packaging it can be provided. Pack
          the item properly for shipment.
        </li>
        <li>
          Out-of-warranty repairs incur a flat service and labor fee of $75
          plus parts and return shipping. You will receive a quote first.
        </li>
        <li>
          Normal wear is not covered, including USB-C cable, USB-C adapter,
          mini screwdriver, and cleaning cloth.
        </li>
        <li>
          The warranty does not cover shipping damage, natural disasters,
          accidents, misuse, or failure to follow care instructions.
        </li>
      </ol>
    </PageIntro>
  );
}
