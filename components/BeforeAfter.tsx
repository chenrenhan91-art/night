"use client";

import { useRef, useState } from "react";
import { withBase } from "@/lib/paths";

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement>(null);

  function move(clientX: number) {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="wrapper grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          ref={wrap}
          className="relative aspect-4/3 cursor-ew-resize overflow-hidden select-none"
          onPointerDown={(e) => {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons) move(e.clientX);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase("/media/site/compare-b.png")}
            alt="A typical book light spilling cool glare across the page"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/media/site/compare-a.png")}
              alt="NS01 reading spotlight on an open book"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ width: `${10000 / pos}%`, maxWidth: "none" }}
            />
            <div className="absolute top-0 left-0 h-20 w-56 bg-gradient-to-br from-black/80 to-transparent" />
            <div className="absolute top-6 left-6 text-[22px] font-medium tracking-[0.08em] text-paper">
              NS01
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 z-10 w-px bg-paper"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper bg-ink/70" />
          </div>
          <div className="absolute top-6 right-6 bg-black/70 px-3 py-1 text-[13px] font-medium tracking-[0.12em] text-paper uppercase">
            Book light
          </div>
        </div>
        <div>
          <h2 className="heading mb-5 text-[32px] leading-[1.15] md:text-[42px]">
            Better than a book light
          </h2>
          <p className="max-w-[42ch] text-[15px] leading-relaxed text-muted">
            Most book lights use a blue-white LED and cast strong shadows on the
            page, causing eye fatigue. The NS01 adjustable spotlight creates a
            warm and consistent light that is more focused than a book light.
            You will read easier and your partner will sleep better.
          </p>
        </div>
      </div>
    </section>
  );
}
