"use client";

import { motion, AnimatePresence } from "framer-motion";
import { synonymsForLuxury } from "./synonymsForLuxury";
import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % synonymsForLuxury.length);
    }, 1500); // Change word every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center w-full h-[70vh] flex-col gap-5">
      <AnimatePresence mode="wait">
        <Header key={index}>{synonymsForLuxury[index]}</Header>
      </AnimatePresence>
    </section>
  );
}

const duration = 0.25;
const stagger = 0.025;

const Header = ({ children }: { children: string }) => {
  return (
    <motion.h1
      initial="initial"
      animate="animate"
      exit="exit"
      className="block overflow-hidden whitespace-nowrap 
        uppercase text-4xl md:text-9xl font-bold"
    >
      <div>
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%", opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: "-100%", opacity: 0 },
              }}
              key={i}
              className="inline-block"
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.h1>
  );
};

{
  /* <div className="absolute inset-0">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                animate: { y: 0 },
              }}
              key={i}
              className="inline-block"
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div> */
}
