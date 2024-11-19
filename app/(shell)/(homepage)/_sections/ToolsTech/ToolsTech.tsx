"use client";
import Image from "next/image";
import data from "./data.json";
import { motion } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";

export const ToolsTech = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto">
        <div>
          <motion.h3
            className="font-baloo font-bold text-4xl text-center text-accent"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            Tools &amp; Technologies I Use
          </motion.h3>
          <motion.p
            className="mt-4 font-fredoka text-xl text-center text-subtle"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            I work with a diverse set of tools and technologies to bring
            efficiency, scalability, and creativity to every project. My
            expertise spans front-end and back-end development, ensuring each
            solution is built with modern practices and a user-first approach.
          </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-3 bg-white/5 rounded-3xl overflow-hidden">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="aspect-square flex flex-col justify-center items-center p-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 * (index + 1) },
              }}
            >
              <div className="flex gap-4 justify-center flex-wrap">
                {item.items.map((icon, iIcon) => (
                  <div
                    key={iIcon}
                    className="w-20 h-20 rounded-full bg-white/15 hover:bg-white flex items-center justify-center"
                  >
                    <Image
                      src={icon.image}
                      alt={icon.title}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-2xl font-baloo text-center text-accent">
                  {item.title}
                </h4>
                <p className="mt-4 font-fredoka text-center text-subtle">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
