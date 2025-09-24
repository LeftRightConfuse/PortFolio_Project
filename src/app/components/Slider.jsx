"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectFade,
  Navigation,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const images = [
  { src: "/42bang.png", alt: "Room 1" },
  { src: "/E113_2.jpg", alt: "Room 2" },
  { src: "/E113_3.jpg", alt: "Room 3" },
  { src: "/E113_4.jpg", alt: "Room 4" },
];

export default function Slider() {
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full bg-transparent">
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-transparent aspect-video isolate sm:aspect-[4/3]">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation, A11y]}
          slidesPerView={1}
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: ".slider-prev", nextEl: ".slider-next" }}
          a11y={{ enabled: true }}
          onAutoplayTimeLeft={(_, __, p) => {
            const value = 1 - p;
            setProgress(value);
            if (progressRef.current) {
              progressRef.current.style.setProperty(
                "--progress",
                String(value)
              );
            }
          }}
          className="w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#0b0f14]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover will-change-transform rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
                />
                <div className="absolute inset-0 grid content-end gap-1.5 p-5 pointer-events-none bg-gradient-to-b from-black/0 via-black/0 to-black/45">
                  <div className="w-fit rounded-full bg-black/35 text-gray-100/95 backdrop-blur-md px-3 py-0.5 text-[12px] font-medium leading-7">
                    {`E113 • ${i + 1}/${images.length}`}
                  </div>
                  <h3 className="m-0 text-gray-100 text-[18px] font-semibold leading-tight drop-shadow">
                    {img.alt}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={progressRef}
          className="absolute left-0 right-0 bottom-0 h-[3px] bg-white/10 overflow-hidden"
        >
          <div
            className="h-full bg-indigo-400 shadow-[0_0_10px_rgba(109,117,255,.6)] transition-[width] duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
