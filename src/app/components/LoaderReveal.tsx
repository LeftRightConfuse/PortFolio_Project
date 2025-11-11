"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";

type LoaderRevealProps = {
  quoteLines?: string[];
  footer?: string;
  barColor?: string;
  bg?: string;
  onComplete?: () => void;
};

const LoaderReveal: React.FC<LoaderRevealProps> = ({
  quoteLines = [
    "The greatest glory in living lies",
    "not in never falling,",
    "but in rising every time we fall.",
  ],
  footer = "Nelson Mandela",
  barColor = "#F48049",
  bg = "#121212",
  onComplete,
}) => {
  const [counter, setCounter] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const followRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLParagraphElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLParagraphElement[] | null>([]);

  useEffect(() => {
    let rafId: number | null = null;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCounter(100);
      reveal();
      return;
    }

    const start = performance.now();
    const duration = 1500;
    const tick = (t: number) => {
      const elapsed = t - start;
      const progress = Math.min(elapsed / duration, 1);
      setCounter(Math.floor(progress * 100));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else reveal();
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      gsap.killTweensOf([
        followRef.current,
        progressRef.current,
        countRef.current,
        contentRef.current,
        ...(linesRef.current || []),
      ]);
    };
  }, []);

  const reveal = () => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: Expo.easeInOut },
        onComplete: () => onComplete?.(),
      });

      tl.to(followRef.current, { width: "100%", duration: 1.1, delay: 0.4 })
        .to([progressRef.current, countRef.current], {
          opacity: 0,
          duration: 0.3,
        })
        .set([progressRef.current, countRef.current], { display: "none" })
        .to(followRef.current, { height: "100%", duration: 0.6, delay: 0.2 })
        .to(contentRef.current, { width: "100%", duration: 0.6 })
        .set(linesRef.current, { display: "block" })
        .to(linesRef.current, { opacity: 1, stagger: 0.12, duration: 0.5 });
    }, rootRef);

    return () => ctx.revert();
  };

  return (
    <div ref={rootRef} className="loaderContainer" style={{ background: bg }}>
      <div className="loading" style={{ background: bg }}>
        <div
          ref={followRef}
          className="follow"
          style={{ background: barColor }}
        />
        <div
          ref={progressRef}
          className="progress"
          style={{ width: counter + "%" }}
          aria-hidden
        />
        <p
          ref={countRef}
          className="count"
          aria-live="polite"
          aria-atomic="true"
        >
          {counter}%
        </p>
      </div>

      <div ref={contentRef} className="content" style={{ background: bg }}>
        {quoteLines.map((line, i) => (
          <p
            key={i}
            className="line"
            ref={(el) => {
              if (!linesRef.current) linesRef.current = [];
              if (el) linesRef.current[i] = el;
            }}
          >
            {line}
          </p>
        ))}
        {footer && <p className="footer">- {footer.replace(/^-+\s*/, "")}</p>}
      </div>

      <style jsx>{`

      :global(html, body, #__next) {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        background: ${bg};
      }


      .loaderContainer {
        position: fixed;  
        inset: 0;        
        width: 100%;    
        height: 100%;
        overflow: hidden;
        color: #fff;
      }

      .loading {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
      }

      .follow,
      .progress {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 2px;
        width: 0;
        pointer-events: none;
      }
      .follow { z-index: 4; }
      .progress { background: #fff; transition: width 0.3s ease-out; }

      .count {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -60%);
        font-size: clamp(48px, 12vw, 128px);
        font-weight: 600;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
      }

      .content {
        position: absolute;
        inset: 0;
        width: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: clamp(12px, 3vw, 24px);
        z-index: 2;
        overflow: hidden;
      }
      .line {
        text-align: center;
        font-size: clamp(22px, 6vw, 64px);
        font-weight: 500;
        margin: 0.2em 0;
        opacity: 0;
        display: none;
      }
      .footer {
        text-align: center;
        font-size: clamp(18px, 3.5vw, 28px);
        font-weight: 400;
        margin-top: 0.6em;
        letter-spacing: 0.3px;
        opacity: 0;
        display: none;
      }
    `}</style>
    </div>
  );
};

export default LoaderReveal;
