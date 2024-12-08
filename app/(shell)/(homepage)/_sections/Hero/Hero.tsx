"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export const Hero = () => {
  return (
    <AnimatePresence>
      <div className="min-h-[calc(100vh-96px)]">
        <div className="container mx-auto flex flex-col md:flex-row-reverse gap-0 md:gap-32 py-0 mg:py-8">
          <div className="w-full aspect-[6/5] md:aspect-auto md:flex-1">
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/hero-1.svg"
                fill
                alt="Hero Image 1"
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="hidden md:block">
              <motion.div
                style={{
                  width: "100%",
                  aspectRatio: 8 / 3,
                  position: "relative",
                }}
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                viewport={{
                  once: true,
                }}
              >
                <Image
                  src="/images/hero-2.svg"
                  fill
                  alt="Hero Image 2"
                  className="object-contain rounded-2xl"
                />
              </motion.div>
            </div>

            <div className="mt-8 px-4">
              <motion.div
                style={{
                  background: "hsl(var(--color-accent) / 0.6)",
                  width: "fit-content",
                  borderRadius: "9999px",
                }}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
                viewport={{
                  once: true,
                }}
              >
                <div className="text-[10px] md:text-xs text-white px-2 md:px-4 py-1 md:py-2">
                  Tech World
                </div>
              </motion.div>

              <div className="mt-4 md:mt-8 text-2xl md:text-5xl font-baloo font-bold">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
                  viewport={{
                    once: true,
                  }}
                >
                  <span className="text-white">
                    Welcome to My Digital Playground:
                  </span>{" "}
                  <span className="text-highlight">
                    Exploring Creativity, Code and Innovation
                  </span>
                </motion.h1>
              </div>

              <div className="mt-4 lg:mt-8 text-sm md:text-xl font-fredoka text-subtle">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
                  viewport={{
                    once: true,
                  }}
                >
                  Hi there! I&apos;m a Fullstack Developer passionate about
                  building dynamic and scalable web applications. Here,
                  you&apos;ll find my projects, insights on the latest tech
                  trends, and a glimpse into my journey in software development.
                  Let&apos;s explore the world of code, creativity, and
                  everything in between!
                </motion.p>
              </div>

              <motion.button
                style={{
                  marginTop: 32,
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
                viewport={{
                  once: true,
                }}
              >
                <div className="bg-highlight hover:bg-highlight/90 px-4 md:px-8 py-2 md:py-4 rounded-full font-baloo font-bold text-sm md:text-xl text-white">
                  Contact Me
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
