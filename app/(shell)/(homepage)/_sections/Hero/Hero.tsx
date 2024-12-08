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
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
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
              style={{
                width: "100%",
                aspectRatio: 8 / 3,
                position: "relative",
              }}
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
                style={{
                  fontSize: 12,
                  lineHeight: "16px",
                  background: "hsl(var(--color-accent) / 0.6)",
                  color: "white",
                  padding: "8px 16px",
                  width: "fit-content",
                  borderRadius: "9999px",
                }}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              >
                Tech World
              </motion.div>

              <motion.h1
                style={{
                  marginTop: 32,
                  fontWeight: 700,
                  fontSize: 48,
                  lineHeight: 1,
                  fontFamily: "var(--font-baloo)",
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
              >
                <span className="text-white">
                  Welcome to My Digital Playground:
                </span>{" "}
                <span className="text-highlight">
                  Exploring Creativity, Code and Innovation
                </span>
              </motion.h1>

              <motion.p
                style={{
                  marginTop: 32,
                  fontFamily: "var(--font-fredoka)",
                  fontSize: 20,
                  lineHeight: "28px",
                  color: "hsl(var(--color-subtle))",
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
              >
                Hi there! I&apos;m a Fullstack Developer passionate about building
                dynamic and scalable web applications. Here, you&apos;ll find my
                projects, insights on the latest tech trends, and a glimpse into
                my journey in software development. Let&apos;s explore the world of
                code, creativity, and everything in between!
              </motion.p>

              <motion.button
                style={{
                  marginTop: 32,
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
              >
                <div className="bg-highlight hover:bg-highlight/90 px-8 py-4 rounded-full font-baloo font-bold text-xl text-white">
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
