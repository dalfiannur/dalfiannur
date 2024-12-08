"use client";

import { useMemo, useRef, useState } from "react";
import data from "./data.json";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";

export const Expertise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const selectedData = useMemo(() => data[selected], [selected]);

  return (
    <AnimatePresence>
      <div className="py-20 relative overflow-hidden">
        <SectionDivider />
        <div className="relative z-1 container mx-auto">
          <div ref={ref} className="flex flex-col items-center px-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-2xl md:text-4xl text-center font-bold font-baloo text-accent">
                My Expertise
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="mt-4 text-sm md:text-xl text-center font-fredoka max-w-6xl text-subtle">
                With a passion for crafting seamless digital experiences, I
                specialize in transforming ideas into intuitive, high-performing
                interfaces that captivate and engage users.
              </p>
            </motion.div>
          </div>
          <div className="mt-4 md:mt-16 flex flex-col md:flex-row gap-16 px-4">
            <ul className="flex-1 flex flex-row md:flex-col gap-4 font-baloo overflow-x-scroll">
              {data.map((item, index) => (
                <motion.li
                  key={index}
                  style={{
                    flex: 1,
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.3 },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <div className="border-b border-mute text-subtle hover:text-highlight w-max">
                    <button
                      data-selected={selected === index}
                      className="group flex gap-2 md:gap-4 pb-4 md:pb-8 pt-4 items-center w-full"
                      onClick={() => setSelected(index)}
                    >
                      <Image
                        src={item.image}
                        width={32}
                        height={32}
                        alt={item.title}
                        className="w-4 md:w-8 aspect-square"
                      />
                      <h3 className="group-data-[selected=true]:text-accent whitespace-nowrap font-bold text-sm md:text-xl">
                        {item.title}
                      </h3>
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ flex: 1, y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              viewport={{
                once: true,
              }}
            >
              <AnimatePresence key={selectedData.title}>
                <motion.div
                  initial={{
                    y: 10,
                    opacity: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  animate={{ y: 0, opacity: 1 }}
                  viewport={{
                    once: true,
                  }}
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
                    <h3 className="font-baloo text-base md:text-xl font-bold text-accent">
                      {selectedData.title}
                    </h3>
                    <p className="mt-4 font-fredoka text-sm md:text-lg text-subtle">
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
