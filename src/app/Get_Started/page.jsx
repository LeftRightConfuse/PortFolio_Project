import React from "react";
import RevealOnScroll from "../components/TextEffects";
function page() {
  return (
    <div>
      <RevealOnScroll>
        <h2 className="text-4xl font-bold">ตารางห้องเรียนวันนี้</h2>
      </RevealOnScroll>

      <RevealOnScroll once={false}>
        <p className="text-gray-600 mt-3">
          เมื่อเลื่อนมาถึง ข้อความนี้จะค่อย ๆ โผล่ขึ้นมาด้วย GSAP ✨
        </p>
      </RevealOnScroll>
    </div>
  );
}

export default page;
