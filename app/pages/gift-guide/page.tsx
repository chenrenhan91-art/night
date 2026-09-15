import { ProductGrid } from "@/components/ProductCard";
import { productsFor } from "@/data/catalog";

export const metadata = { title: "2025 Gift Guide" };

const HANDLES = [
  "nightside-lamp-white",
  "nanu-arc-alarm-clock",
  "five-minute-journal",
  "craighill-brass-jack-puzzle",
  "blacksaw-midnight-sun-reversible-baby-alpaca-wool-throw-blanket",
  "mindful-focus-hour-glass-by-intelligent-change",
  "orijin-floring",
];

export default function GiftGuidePage() {
  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-4 text-[36px] md:text-[44px]">2025 bestsellers</h1>
      <p className="mb-12 max-w-[54ch] text-muted">
        See what our customers loved last year.
      </p>
      <ProductGrid products={productsFor(HANDLES)} />
    </div>
  );
}
