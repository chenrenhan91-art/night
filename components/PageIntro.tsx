export function PageIntro({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="wrapper max-w-[820px] py-14 md:py-20">
      <h1 className="heading mb-8 text-[36px] md:text-[44px]">{title}</h1>
      <div className="space-y-4 text-[15px] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-[family-name:var(--font-inter)] [&_h2]:text-[22px] [&_h2]:text-paper [&_a]:text-paper [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5">
        {children}
      </div>
    </div>
  );
}
