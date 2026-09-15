import Link from "next/link";
import { CollectionTabs } from "@/components/CollectionTabs";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ProductCard } from "@/components/ProductCard";
import {
  FEATURED_PRODUCTS,
  HOME_COLLECTION_CARDS,
  SPLIT_PRODUCTS,
} from "@/data/content";
import { getCollection, productsFor } from "@/data/catalog";
import { withBase } from "@/lib/paths";

export default function HomePage() {
  const featured = productsFor(FEATURED_PRODUCTS);
  const split = productsFor(SPLIT_PRODUCTS);
  const cards = HOME_COLLECTION_CARDS.map((c) => ({
    ...c,
    image: getCollection(c.handle)?.image ?? withBase("/media/site/col-lamp.jpg"),
  }));

  return (
    <>
      <section className="relative min-h-[75dvh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/media/site/hero-desktop.jpg")}
          alt="NS01 lamp on a wooden chair beside a sunlit window"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          style={{ objectPosition: "57% 31%" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/media/site/hero-mobile.jpg")}
          alt="NS01 lamp in a sunlit room"
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          style={{ objectPosition: "33% 32%" }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative flex min-h-[75dvh] items-end">
          <div className="wrapper w-full pb-10 pt-28 md:pb-14">
            <p className="kicker mb-3 text-white">The Ns01 lamp</p>
            <h1 className="heading mb-6 max-w-[12ch] text-[40px] leading-[1.05] text-white md:text-[56px] lg:text-[64px]">
              The Light After Sunset
            </h1>
            <Link
              href="/products/nightside-lamp-white"
              className="btn btn-outline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <CollectionTabs />

      <section className="grid md:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/media/site/bestsellers.jpg")}
          alt="NS01 lamp in a loft interior"
          className="h-full min-h-[320px] w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-ink px-8 py-16 md:px-16">
          <p className="heading mb-3 text-[28px] md:text-[36px]">
            2025 bestsellers
          </p>
          <p className="mb-8 max-w-[36ch] text-muted">
            See what our customers loved last year.
          </p>
          <Link href="/pages/gift-guide" className="btn btn-outline w-fit">
            Click Here
          </Link>
        </div>
      </section>

      <section className="wrapper py-16 md:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="grid lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase("/media/site/split-lifestyle.jpg")}
            alt="Bedside objects arranged on a table"
            className="min-h-[360px] w-full object-cover lg:sticky lg:top-0 lg:h-screen lg:min-h-0"
          />
          <div className="grid grid-cols-2 gap-4 p-6 md:gap-6 md:p-10">
            {split.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper py-16 md:py-20">
        <h2 className="visually-hidden">Collection list</h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {cards.map((card) => (
            <Link
              key={card.handle}
              href={
                card.handle === "frontpage"
                  ? "/collections/the-original-nightside"
                  : `/collections/${card.handle}`
              }
              className="group relative min-h-[280px] overflow-hidden md:min-h-[360px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 text-white md:min-h-[360px]">
                <p className="kicker">{card.subtitle}</p>
                <div>
                  <p className="heading mb-2 text-[22px]">{card.title}</p>
                  <span className="text-[12px] tracking-[0.1em] uppercase">
                    View the collection →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrapper pb-16 md:pb-20">
        <h2 className="heading mb-10 text-center text-[15px] tracking-[0.14em] uppercase">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={`feat-${p.handle}`} product={p} />
          ))}
        </div>
      </section>

      <BeforeAfter />

      <section className="border-t border-white/10 py-14">
        <div className="wrapper grid gap-10 md:grid-cols-3">
          <Trust
            title="Easy returns"
            body="Return within 14 days for any reason."
          />
          <Trust
            title="Free shipping"
            body="Trackable free ground shipping on eligible items. Expedited shipping available."
          />
          <Trust
            title="Human customer support"
            body={
              <>
                Issues? Questions? Contact us{" "}
                <Link href="/pages/support" className="underline">
                  here
                </Link>{" "}
                and we will respond within one business day.
              </>
            }
          />
        </div>
      </section>
    </>
  );
}

function Trust({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <h3 className="kicker mb-3">{title}</h3>
      <p className="mx-auto max-w-[36ch] text-[14px] text-muted">{body}</p>
    </div>
  );
}
