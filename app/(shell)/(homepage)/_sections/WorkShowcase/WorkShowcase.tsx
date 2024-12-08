"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";
import { useRouter } from "next/navigation";

export const WorkShowcase = () => {
  const router = useRouter();
  return (
    <div className="py-20 relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto flex flex-col md:flex-row gap-8 md:gap-32 items-center px-4">
        <div className="flex-1 max-w-xl">
          <div className="font-baloo font-bold text-xl md:text-4xl text-accent">
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
              Explore My Work Showcase
            </motion.h3>
          </div>

          <div className="mt-4 md:mt-8 font-fredoka text-sm md:text-xl text-subtle">
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
              Take a closer look at the projects I&apos;ve crafted, where
              creativity meets functionality. From sleek, interactive websites
              to dynamic web applications, explore the work that reflects my
              passion for design and development.
            </motion.p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            style={{
              aspectRatio: 1,
              position: "relative",
              borderRadius: "0.75rem",
              overflow: "hidden",
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
            <Image
              src="/images/showcase-1.jpg"
              fill
              alt="Showcase 1"
              className="object-cover hover:scale-105 transition-all"
            />
          </motion.div>

          <motion.div
            style={{
              aspectRatio: 1,
              position: "relative",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.6 },
            }}
            viewport={{
              once: true,
            }}
          >
            <Image
              src="/images/showcase-2.jpg"
              fill
              alt="Showcase 2"
              className="object-cover hover:scale-105 transition-all"
            />
          </motion.div>

          <motion.div
            style={{
              aspectRatio: 1,
              position: "relative",
              borderRadius: "0.75rem",
              overflow: "hidden",
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
            <Image
              src="/images/showcase-3.jpg"
              fill
              alt="Showcase 3"
              className="object-cover hover:scale-105 transition-all"
            />
          </motion.div>

          <div className="w-full aspect-auto md:aspect-square flex flex-col justify-center gap-8">
            <div className="text-sm md:text-xl font-fredoka text-subtle">
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
                Discover the projects I&apos;ve built and the innovations
                I&apos;ve brought to life. Explore a collection of my work that
                highlights my skills in design, development, and
                problem-solving. Dive in and see how I turn ideas into impactful
                digital experiences!
              </motion.p>
            </div>

            <motion.button
              onTap={() => router.push("/showcase")}
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
              <div className="bg-highlight hover:bg-highlight/90 text-white w-fit rounded-full font-baloo px-4 md:px-6 py-1 md:py-3 font-bold text-base md:text-xl">
                View More
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
