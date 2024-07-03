"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function GsapFlip() {
  const boxRef = useRef(null);

  useEffect(() => {
    let tween = gsap.fromTo(".gsapFlipBox",
    {
      scale: 0.3,
      x: -700,
    },
    {
      rotate: 360,
      duration: 8,
      scale: 1,
      x: 0,
      ease: "elastic",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        ref={boxRef}
        className="flex flex-col h-96 w-96 bg-gradient-to-r items-center justify-center text-white from-[#0ae448] rounded-2xl to-[#abff84] text-center px-8 gsapFlipBox"
      >
        <h3 className="text-2xl font-bold">
          GSAP
        </h3>
        <p className="text-base font-bold">
          Customizável, bem documentado, um pouco dificil de implementar.
        </p>
      </div>
    </div>
  );
}
