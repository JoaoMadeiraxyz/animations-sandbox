"use client";

import { useEffect } from "react";
import { animated, useSpring, easings } from "@react-spring/web";

export default function SpringFlip() {
  const [springs, set] = useSpring(() => ({
    rotate: 0,
  }));

  useEffect(() => {
    set({
      rotate: 360,
      config: {
        duration: 3000,
        easing: easings.easeOutBack,
      },
    });
  }, [set]);

  return (
    <div className="flex flex-col items-center justify-center">
      <animated.div
        style={springs}
        className="flex flex-col h-96 w-96 bg-gradient-to-br items-center justify-center text-white from-[#ff7971] text-center px-8 rounded-2xl to-[#fff59a]"
      >
        <h3 className="text-2xl font-bold">react-spring</h3>
        <p className="text-base font-bold">
          Fácil de implementar, documentação dificil de ler, dificil de customizar.
        </p>
      </animated.div>
    </div>
  );
}
