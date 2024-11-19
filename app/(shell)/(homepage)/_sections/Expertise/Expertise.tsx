"use client";

import { useMemo, useRef, useState } from "react";
import data from "./data.json";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";

const titles = data.map((d) => d.title);

export const Expertise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const selectedData = useMemo(() => data[selected], [selected]);

  return (
    <AnimatePresence>
      <div className="py-20 relative overflow-hidden">
        <SectionDivider />
        <div className="relative z-1 container mx-auto">
          <div ref={ref} className="flex flex-col items-center">
            <motion.h2
              className="text-4xl text-center font-bold font-baloo text-accent"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              My Expertise
            </motion.h2>
            <motion.p
              className="mt-4 text-xl text-center font-fredoka max-w-6xl text-subtle"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              With a passion for crafting seamless digital experiences, I
              specialize in transforming ideas into intuitive, high-performing
              interfaces that captivate and engage users.
            </motion.p>
          </div>
          <div className="mt-16 flex gap-16">
            <ul className="flex-1 flex flex-col gap-4 font-baloo">
              {titles.map((title, index) => (
                <motion.li
                  key={index}
                  className="border-b border-mute text-subtle hover:text-highlight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.3 },
                  }}
                >
                  <button
                    className="flex gap-8 pb-4 items-center w-full"
                    onClick={() => setSelected(index)}
                  >
                    <div className="bg-accent rounded-xl w-16 h-16" />
                    <h3 className="font-bold text-xl">{title}</h3>
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="flex-1"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              <AnimatePresence key={selectedData.title}>
                <motion.div
                  className="flex flex-col items-center justify-center"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="w-72 h-72 relative">
                    <Image
                      src={selectedData.image}
                      fill
                      className="object-contain"
                      alt={selectedData.title}
                    />
                  </div>
                  <div className="mt-16">
                    <h3 className="font-baloo text-xl font-bold text-accent">
                      {selectedData.title}
                    </h3>
                    <p className="mt-4 font-fredoka text-lg text-subtle">
                      {selectedData.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
