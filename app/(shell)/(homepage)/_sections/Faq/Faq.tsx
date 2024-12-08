"use client";
import { Accordion } from "../../_components/Accordion";
import data from "./data.json";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";
import Image from "next/image";

export const Faq = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto px-4">
        <div>
          <div className="font-bold font-baloo text-xl md:text-4xl text-center text-accent">
            <motion.h3
              initial={{
                y: 30,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              viewport={{
                once: true,
              }}
            >
              Frequently Asked Questions
            </motion.h3>
          </div>
          <div className="mt-4 font-fredoka text-xs md:text-xl text-center text-subtle">
            <motion.p
              initial={{
                y: 30,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              viewport={{
                once: true,
              }}
            >
              Our FAQ section covers common questions to help you understand my
              services, workflow, and technical expertise.
            </motion.p>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-32">
          <div className="flex-1 flex flex-col gap-0 md:gap-4">
            {data.map((item, index) => (
              <Accordion key={index} label={item.question}>
                <p className="font-fredoka text-xs md:text-lg text-subtle">
                  {item.answer}
                </p>
              </Accordion>
            ))}
          </div>
          <div className="flex-1 max-w-xl aspect-square h-fit bg-primary-light/5 rounded-2xl flex flex-col items-center justify-center">
            <motion.div
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
                src="/images/faq.svg"
                width={500}
                height={500}
                alt="Faq Icon"
              />
            </motion.div>
            <div className="mt-8">
              <motion.div
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
                <h4 className="text-center text-xl md:text-3xl font-baloo font-bold text-accent">
                  Ask your question
                </h4>
              </motion.div>
              <motion.div
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
                <p className="mt-2 text-center text-xs md:text-xl font-fredoka text-subtle">
                  Feel free to ask questions on any time!
                </p>
              </motion.div>
            </div>
            <motion.button
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
              <div className="mt-8 md:mt-16 w-fit bg-highlight hover:bg-highlight/90 text-white px-6 md:px-8 py-2 md:py-4 font-baloo rounded-full text-base md:text-xl font-semibold flex items-center gap-4">
                Ask Question
                <FaChevronRight />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
