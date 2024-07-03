"use client";

import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div className="relative w-96 h-1">
      <motion.div
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ ease: "easeIn", duration: 5 }}
        className="w-96 absolute z-10 h-1 bg-gradient-to-r from-[#B40202] to-[#CC0000]"
      ></motion.div>
      <div className="bg-[#48423E] w-96 h-1 z-0"></div>
    </div>
  );
}
