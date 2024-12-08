"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";

type AccordionProps = {
  label: ReactNode;
  children?: ReactNode;
};

export const Accordion = ({ label, children }: AccordionProps) => {
  return (
    <Disclosure as="div" className="border-b">
      {({ open }) => (
        <>
          <DisclosureButton className="w-full flex justify-between items-center px-8 py-4 gap-8 rounded-2xl text-xl font-bold font-baloo">
            {label}
            <div
              data-opened={open}
              className="data-[opened=true]:rotate-180 transition-all"
            >
              <FaChevronDown size={16} />
            </div>
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
