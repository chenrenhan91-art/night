import Link from "next/link";
import { ARTICLES } from "@/data/content";

export const metadata = { title: "News" };

export default function NewsIndexPage() {
  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-12 text-[36px] md:text-[44px]">News</h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a) => (
          <Link key={a.handle} href={`/news/${a.handle}`} className="group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt="" className="aspect-16/10 w-full object-cover" />
            <p className="mt-4 text-[12px] tracking-[0.08em] text-muted uppercase">
              {a.date}
            </p>
            <h2 className="heading mt-2 text-[22px] leading-snug group-hover:text-coral">
              {a.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
