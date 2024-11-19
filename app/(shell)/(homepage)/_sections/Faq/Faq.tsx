"use client";
import { MdQuestionAnswer } from "react-icons/md";
import { Accordion } from "../../_components/Accordion";
import data from "./data.json";
import { FaChevronRight, FaQuestion } from "react-icons/fa6";
import { motion } from "motion/react";
import { SectionDivider } from "~/app/components/SectionDivider";

export const Faq = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <SectionDivider />
      <div className="relative z-1 container mx-auto">
        <div>
          <motion.h3
            className="font-bold font-baloo text-4xl text-center text-accent"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 },
            }}
          >
            Frequently Asked Questions
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
            Our FAQ section covers common questions to help you understand my
            services, workflow, and technical expertise.
          </motion.p>
        </div>
        <div className="mt-16 flex gap-32">
          <div className="flex-1 flex flex-col gap-4">
            {data.map((item, index) => (
              <Accordion key={index} label={item.question}>
                <p className="font-fredoka text-lg text-subtle">
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
            >
              <MdQuestionAnswer size={192} className="text-accent" />
            </motion.div>
            <div className="mt-8">
              <motion.h4
                className="text-center text-3xl font-baloo font-bold text-accent"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.3 },
                }}
              >
                Ask your question
              </motion.h4>
              <motion.p
                className="mt-2 text-center text-xl font-fredoka text-subtle"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.3 },
                }}
              >
                Feel free to ask questions on any time!
              </motion.p>
            </div>
            <motion.button
              className="mt-16 w-fit bg-highlight hover:bg-highlight/90 text-white px-8 py-4 font-baloo rounded-full text-xl font-semibold flex items-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              Ask Question
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
