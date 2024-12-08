"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 bg-primary-lighten shadow shadow-highlight">
      <div className="container mx-auto flex justify-between items-center h-14 md:h-24 px-4">
        <h1 className="font-baloo text-2xl md:text-5xl font-black tracking-widest text-white">
          D`Coder
        </h1>
        <ul className="hidden md:flex gap-6 font-baloo font-semibold text-xl text-white">
          <li>
            <Link href="/" className="hover:text-highlight">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-highlight">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-highlight">
              Services
            </Link>
          </li>
          <li>
            <Link href="/showcase" className="hover:text-highlight">
              Work Showcase
            </Link>
          </li>
        </ul>
        <ul className="hidden md:flex gap-6 font-baloo font-semibold text-xl text-white">
          {/* <li>
            <Link href="/about" className="hover:text-highlight">
              About Me
            </Link>
          </li> */}
          <li>
            <Link
              href="/contact"
              className="bg-highlight font-bold hover:bg-highlight/90 text-white rounded-full px-6 py-2"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <button
          className="block md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <CiMenuBurger className="text-white" size={16} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <ul className="flex md:hidden flex-col absolute w-full bg-primary-lighten px-4 py-4 shadow shadow-highlight">
              <li className="text-main hover:text-highlight font-bold text-sm py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="text-main hover:text-highlight font-bold text-sm py-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-main hover:text-highlight font-bold text-sm py-2">
                <Link href="/services">Services</Link>
              </li>
              <li className="text-main hover:text-highlight font-bold text-sm py-2">
                <Link href="/showcase">Work Showcase</Link>
              </li>
              <li className="text-main hover:text-highlight font-bold text-sm py-2">
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
