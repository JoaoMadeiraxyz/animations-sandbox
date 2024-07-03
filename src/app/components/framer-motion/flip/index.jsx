"use client"

import { motion } from "framer-motion"

export default function FramerFlip() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 3, ease: "backOut" }}
        className="flex flex-col h-96 w-96 bg-gradient-to-br items-center justify-center text-white from-[#fd008b] via-[#d302f0] rounded-2xl to-[#0086ff] text-center px-8"
      >
        <h3 className="text-2xl font-bold">
          Framer Motion
        </h3>
        <p className="text-base font-bold">
          Customizável, bem documentado, fácil de implementar.
        </p>
      </motion.div>
    </div>
  )
}