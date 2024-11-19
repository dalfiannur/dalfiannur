"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ReactNode } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { motion } from "motion/react";

type AccordionProps = {
  label: ReactNode;
  children?: ReactNode;
};

export const Accordion = ({ label, children }: AccordionProps) => {
  return (
    <Disclosure as="div" className="border-b border-mute/30">
      {({ open }) => (
        <>
          <DisclosureButton data-opened={open} className="group w-full">
            <motion.div
              className="group flex justify-between items-center px-8 py-4 gap-8 rounded-2xl text-xl font-bold font-baloo text-subtle hover:text-highlight group-data-[opened=true]:text-accent"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 },
              }}
            >
              {label}
              <div className="group-data-[opened=true]:rotate-180 transition-all">
                <FaChevronDown size={16} />
              </div>
            </motion.div>
          </DisclosureButton>
          <DisclosurePanel
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 px-8 pb-4"
            transition
          >
            {children}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
