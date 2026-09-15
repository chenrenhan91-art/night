import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "@/data/content";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ handle: a.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const article = ARTICLES.find((a) => a.handle === handle);
  return { title: article?.title ?? "News" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const article = ARTICLES.find((a) => a.handle === handle);
  if (!article) notFound();

  return (
    <article className="wrapper max-w-[760px] py-14 md:py-20">
      <p className="mb-4 text-[12px] tracking-[0.08em] text-muted uppercase">
        {article.date}
      </p>
      <h1 className="heading mb-8 text-[32px] leading-tight md:text-[44px]">
        {article.title}
      </h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.image}
        alt=""
        className="mb-10 aspect-16/9 w-full object-cover"
      />
      <div className="space-y-4 text-[16px] leading-relaxed text-muted">
        {article.body.split("\n\n").map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <p className="mt-12">
        <Link href="/news" className="text-[13px] tracking-[0.08em] uppercase underline">
          Back to news
        </Link>
      </p>
    </article>
  );
}
