"use client";
import DarkModeToggle from "./DarkModeToggle";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

// Animate navbar to fade in from bottom
const headerMotion = {
  initial: {
    y: -20,
    opacity: 0,
  },
  onLoad: {
    y: 0,
    opacity: 100,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: [.31,1.06,.66,.94]
    }
  }
}

export default function Header() {
  return (
    <motion.header initial={headerMotion.initial} animate={headerMotion.onLoad} className="3xl:px-[640px] sticky top-0 z-10 px-8 md:px-[150px] lg:px-[250px] xl:px-[375px] 2xl:px-[400px]">
      <div className="flex flex-row items-center justify-between" >
        <NavLinks />
        <DarkModeToggle />
      </div>
      <hr className="border-foreground" />
    </motion.header>
  );
}
