"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const WorkShowcase = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex gap-32 items-center">
        <div className="flex-1 max-w-xl">
          <motion.h3
            className="font-baloo font-bold text-4xl text-primary"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            Explore My Work Showcase
          </motion.h3>
          <motion.p
            className="mt-8 font-fredoka text-xl text-gray-600"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            Take a closer look at the projects I've crafted, where creativity
            meets functionality. From sleek, interactive websites to dynamic web
            applications, explore the work that reflects my passion for design
            and development.
          </motion.p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <motion.div
            className="group w-full aspect-square relative rounded-xl overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            <Image
              src="/images/showcase-1.jpg"
              fill
              alt="Showcase 1"
              className="object-cover group-hover:scale-105 transition-all"
            />
          </motion.div>
          <motion.div
            className="group w-full aspect-square relative rounded-xl overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.6 },
            }}
          >
            <Image
              src="/images/showcase-2.jpg"
              fill
              alt="Showcase 2"
              className="object-cover group-hover:scale-105 transition-all"
            />
          </motion.div>
          <motion.div
            className="group w-full aspect-square relative rounded-xl overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            <Image
              src="/images/showcase-3.jpg"
              fill
              alt="Showcase 3"
              className="object-cover group-hover:scale-105 transition-all"
            />
          </motion.div>
          <div className="w-full aspect-square flex flex-col justify-center gap-8">
            <motion.p
              className="text-xl font-fredoka text-gray-600"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              Discover the projects I've built and the innovations I've brought
              to life. Explore a collection of my work that highlights my skills
              in design, development, and problem-solving. Dive in and see how I
              turn ideas into impactful digital experiences!
            </motion.p>
            <motion.button
              className="bg-primary-light hover:bg-primary text-white w-fit rounded-full font-baloo px-8 py-4 font-bold text-xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              View More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
