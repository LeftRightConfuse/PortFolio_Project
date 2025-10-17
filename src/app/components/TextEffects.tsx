"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  once?: boolean; // ✅ ตรงกับ destructure ด้านล่าง
};

export default function RevealOnScroll({ children, once = true }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(inner.current, { yPercent: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box.current,
          start: "top 85%",
          end: "bottom 40%",
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      });

      tl.to(inner.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, box);

    return () => ctx.revert();
  }, [once]);

  return (
    <div ref={box} className="relative overflow-hidden">
      <div ref={inner}>{children}</div>
    </div>
  );
}
