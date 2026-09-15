import { ProductGrid } from "@/components/ProductCard";
import { collectionProducts } from "@/data/catalog";

export const metadata = { title: "Partner Products" };

export default function PartnerProductsPage() {
  const products = collectionProducts("partner-products");
  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-4 text-[36px] md:text-[44px]">Partner Products</h1>
      <p className="mb-12 max-w-[62ch] text-[16px] leading-relaxed text-muted">
        Products from like-minded makers whose work pairs seamlessly with ours,
        chosen for their craft, thoughtfulness, and enduring appeal.
      </p>
      <ProductGrid products={products} />
    </div>
  );
}
