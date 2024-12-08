"use client";
import Image from "next/image";
import data from "./data.json";
import { motion } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";

export const ToolsTech = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto px-4">
        <div>
          <div className="font-baloo font-bold text-xl md:text-4xl text-center text-accent">
            <motion.h3
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
              Tools &amp; Technologies I Use
            </motion.h3>
          </div>
          <div className="mt-4 font-fredoka text-sm md:text-xl text-center text-subtle">
            <motion.p
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
              I work with a diverse set of tools and technologies to bring
              efficiency, scalability, and creativity to every project. My
              expertise spans front-end and back-end development, ensuring each
              solution is built with modern practices and a user-first approach.
            </motion.p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-white/5 rounded-3xl overflow-hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className="aspect-auto md:aspect-square flex flex-col justify-center items-center p-4 md:p-8"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.3 * (index + 1) },
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="flex gap-4 justify-center flex-wrap">
                  {item.items.map((icon, iIcon) => (
                    <div
                      key={iIcon}
                      className="w-12 md:w-20 aspect-square rounded-full bg-white/15 hover:bg-white flex items-center justify-center"
                    >
                      <Image
                        src={icon.image}
                        alt={icon.title}
                        width={40}
                        height={40}
                        className="w-6 md:w-10 aspect-square"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="font-bold text-lg md:text-2xl font-baloo text-center text-accent">
                    {item.title}
                  </h4>
                  <p className="mt-4 font-fredoka text-xs md:text-base text-center text-subtle">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
