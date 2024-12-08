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
      <div className="relative z-1 container mx-auto flex gap-32 items-center">
        <div className="flex-1 max-w-xl">
          <motion.h3
            style={{
              fontFamily: "var(--font-baloo)",
              fontWeight: 700,
              fontSize: 36,
              lineHeight: "2.5rem",
              color: "hsl(var(--color-accent) / var(--tw-text-opacity, 1))",
            }}
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
            style={{
              marginTop: 32,
              fontFamily: "var(--font-fredoka)",
              fontSize: 20,
              lineHeight: "1.75rem",
              color: "hsl(var(--color-subtle))",
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            Take a closer look at the projects I&apos;ve crafted, where
            creativity meets functionality. From sleek, interactive websites to
            dynamic web applications, explore the work that reflects my passion
            for design and development.
          </motion.p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
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
          >
            <Image
              src="/images/showcase-3.jpg"
              fill
              alt="Showcase 3"
              className="object-cover hover:scale-105 transition-all"
            />
          </motion.div>

          <div className="w-full aspect-square flex flex-col justify-center gap-8">
            <motion.p
              style={{
                fontSize: 20,
                fontFamily: "var(--font-fredoka)",
                lineHeight: "1.75rem",
                color: "hsl(var(--color-subtle))",
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              Discover the projects I&apos;ve built and the innovations
              I&apos;ve brought to life. Explore a collection of my work that
              highlights my skills in design, development, and problem-solving.
              Dive in and see how I turn ideas into impactful digital
              experiences!
            </motion.p>

            <motion.button
              onTap={() => router.push("/showcase")}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              <div className="bg-highlight hover:bg-highlight/90 text-white w-fit rounded-full font-baloo px-6 py-3 font-bold text-xl">
                View More
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
