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
                PPID Jakarta Timur
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
                PPID (Pejabat Pengelola Informasi dan Dokumentasi) Jakarta Timur
                is the spearhead of information services in DKI Jakarta
                Province. Its task is to manage and provide information services
                to the public.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ flex: 1, position: "relative", aspectRatio: 16 / 9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            viewport={{
              once: true,
            }}
          >
            <Image
              src="/images/showcase/ppid-jakarta-timur/hero-banner.webp"
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                viewport={{
                  once: true,
                }}
              >
                <h3 className="font-baloo font-bold text-5xl text-left text-highlight uppercase tracking-widest">
                  Run Smooth on Mobile and Desktop Device
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
                  In developing the website to be fully responsive and run
                  smoothly across both mobile and desktop devices, I encountered
                  several challenges. One of the main difficulties was ensuring
                  that the layout and design elements adapted seamlessly to
                  different screen sizes, from small mobile screens to large
                  desktop monitors. This involved careful planning of flexible
                  grid systems, media queries, and scalable images to ensure
                  that the user experience remained consistent and visually
                  appealing regardless of the device.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{
                marginTop: 50,
                position: "relative",
                flex: 1,
                aspectRatio: 320 / 173,
                opacity: 0,
                y: 10,
              }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.9 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-01.webp"
                alt="Hero Banner Image"
                fill
                className="rounded-xl"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
            viewport={{
              once: true,
            }}
          >
            <Image
              src="/images/showcase/ppid-jakarta-timur/section-02.webp"
              alt="Hero Banner Image"
              width={360}
              height={920}
              className="rounded-xl"
            />
          </motion.div>
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
                Using CSS First-Utility Framework like TailwindCSS
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
                TailwindCSS is a utility-first CSS framework that simplifies web
                styling by providing ready-to-use classes directly in HTML,
                reducing the need for custom CSS files. Its highly customizable
                design system allows developers to adjust themes, colors, and
                spacing while ensuring consistency and maintainability. Built-in
                responsive design classes enable mobile-first development with
                ease. TailwindCSS speeds up development by minimizing context
                switching between HTML and CSS, resulting in cleaner and more
                organized code. Supported by a large community and extensive
                documentation, it’s a reliable choice for scalable, modern web
                projects.
              </p>
            </motion.div>
          </div>

          <div className="w-[calc(50%-40px)] min-w-[360px] flex flex-wrap gap-10">
            <motion.div
              style={{
                position: "relative",
                aspectRatio: 480 / 169,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.9 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-03.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>
            <motion.div
              style={{
                position: "relative",
                aspectRatio: 192 / 71,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-04.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-wrap justify-center items-center gap-10">
            <motion.div
              style={{
                position: "relative",
                aspectRatio: 640 / 337,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-05.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 384 / 173,
                width: 640,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-06.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <div className="flex flex-col gap-10">
              <motion.div
                style={{
                  position: "relative",
                  aspectRatio: 72 / 83,
                  width: 320,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                }}
              >
                <Image
                  src="/images/showcase/ppid-jakarta-timur/section-07.webp"
                  fill
                  alt="Hero Banner Image"
                  className="rounded-xl"
                />
              </motion.div>

              <motion.div
                style={{
                  position: "relative",
                  aspectRatio: 12 / 11,
                  width: 320,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                }}
              >
                <Image
                  src="/images/showcase/ppid-jakarta-timur/section-08.webp"
                  fill
                  alt="Hero Banner Image"
                  className="rounded-xl"
                />
              </motion.div>
            </div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 13 / 10,
                width: 320,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-10.webp"
                fill
                alt="Hero Banner Image"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              style={{
                position: "relative",
                aspectRatio: 36 / 77,
                width: 320,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/images/showcase/ppid-jakarta-timur/section-09.webp"
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
