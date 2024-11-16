"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export const Hero = () => {
  return (
    <AnimatePresence>
      <div className="min-h-[calc(100vh-96px)]">
        <div className="container mx-auto flex flex-row-reverse gap-32 py-8">
          <div className="flex-1">
            <motion.div
              className="w-full h-full relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
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
            <motion.div
              className="w-full aspect-[8/3] relative"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            >
              <Image
                src="/images/hero-2.svg"
                fill
                alt="Hero Image 2"
                className="object-contain rounded-2xl"
              />
            </motion.div>
            <div className="mt-8">
              <motion.div
                className="text-xs bg-primary-pale/60 text-primary px-4 py-2 w-fit rounded-full"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              >
                Tech World
              </motion.div>
              <motion.h1
                className="mt-8 font-bold text-5xl font-baloo text-primary"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
              >
                Welcome to My Digital Playground: Exploring Creativity, Code,
                and Innovation
              </motion.h1>
              <motion.p
                className="mt-8 font-fredoka text-xl text-gray-500"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
              >
                Hi there! I'm a Frontend Developer passionate about building
                engaging digital experiences. Here, you'll find my projects,
                insights on the latest tech trends, and a glimpse into my
                journey in web development. Let's explore the world of code,
                creativity, and everything in between!
              </motion.p>
              <motion.button
                className="mt-8 bg-primary-light hover:bg-primary px-8 py-4 rounded-full font-baloo font-bold text-xl text-white"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
