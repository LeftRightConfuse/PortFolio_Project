"use client";
import { useEffect, useState } from "react";

export default function useSectionVisible(sectionId: string, threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [sectionId]);

  return isVisible;
}
