"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="py-20 container mx-auto">
      <div className="flex flex-col gap-40">
        <div className="flex items-center gap-40 h-[calc(100vh-240px)]">
          <div className="flex-1 max-w-xl flex flex-col justify-center items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="font-baloo font-bold text-5xl text-center text-highlight uppercase tracking-widest">
                Jakarta Timur
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-subtle text-center tracking-wider leading-9">
                Jakarta Timur is the official information service website for
                the Jakarta Timur region, offering comprehensive updates on
                local news, government services, public events, and community
                programs. It serves as a central hub for residents and visitors
                seeking accurate and timely information about the region.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ flex: 1, position: "relative", aspectRatio: 320 / 129 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            viewport={{
              once: true,
            }}
          >
            <Image
              src="/images/showcase/jakarta-timur/hero-banner.webp"
              alt="Hero Banner Image"
              fill
              className="rounded-xl"
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="flex-1 min-w-[360px]">
            <div className="flex flex-col justify-center items-center gap-4">
              <motion.div
                initial={{ width: "100%", opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                }}
              >
                <h2 className="font-fredoka font-semibold text-xl text-accent">
                  The Challenge
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10, width: "100%" }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                viewport={{
                  once: true,
                }}
              >
                <h3 className="font-baloo font-bold text-5xl text-left text-highlight uppercase tracking-widest">
                  Bringing Data to Life
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
                viewport={{
                  once: true,
                }}
              >
                <p className="text-subtle text-left tracking-wider">
                  Creating a statistic dashboard came with exciting challenges.
                  The biggest hurdle was transforming complex data into clear,
                  interactive visuals that are easy to understand. This meant
                  designing responsive charts, ensuring real-time updates, and
                  crafting an interface that&apos;s both functional and visually
                  appealing. The goal was to make data exploration simple and
                  enjoyable for all users, no matter what device they&apos;re
                  on.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{
                marginTop: 50,
                position: "relative",
                flex: 1,
                aspectRatio: 64 / 81,
                opacity: 0,
                y: 10,
              }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.9 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-01.webp"
                alt="Hero Banner Image"
                fill
                className="rounded-xl"
              />
            </motion.div>
          </div>

          <div className="max-h-[1675px] overflow-y-scroll rounded-xl hide-scroll">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-02.webp"
                alt="Hero Banner Image"
                width={360}
                height={2990}
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="w-[calc(50%-40px)] min-w-[360px] shrink-0 flex flex-col  items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10, width: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="font-fredoka font-semibold text-xl w-full text-accent">
                The Solution
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              viewport={{
                once: true,
              }}
            >
              <h3 className="font-baloo font-bold text-5xl text-left text-highlight uppercase tracking-widest">
                Recharts as Customable Chart Library
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-subtle text-left tracking-wider">
                To tackle the challenge of building a dynamic statistic
                dashboard, we chose the Recharts library for its flexibility and
                powerful data visualization capabilities. Recharts allowed us to
                create interactive, responsive charts that adapt seamlessly to
                various devices. With its customizable components and real-time
                data support, we transformed complex datasets into visually
                compelling insights, enhancing user experience and making data
                analysis intuitive and engaging.
              </p>
            </motion.div>
          </div>

          <div className="w-[calc(50%-40px)] min-w-[360px] flex flex-wrap gap-10">
            <motion.div
              style={{
                position: "relative",
                aspectRatio: 339 / 143,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.9 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-03.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col max-h-max md:max-h-[600px] flex-wrap justify-center items-center gap-10">
            <motion.div
              style={{
                position: "relative",
                aspectRatio: 113 / 50,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-04.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 452 / 125,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-05.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 452 / 79,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-06.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 113 / 30,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-07.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 452 / 115,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/jakarta-timur/section-08.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
