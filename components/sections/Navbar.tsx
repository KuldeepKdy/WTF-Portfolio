"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { motion, useAnimate } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
    } else {
      topLineAnimate([
        [topLineScope.current, { translateY: 0 }],
        [topLineScope.current, { rotate: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: 0 }],
        [bottomLineScope.current, { rotate: 0 }],
      ]);
    }
    // Add or remove the "no-scroll" class based on navbar state
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
  ]);

  return (
    <header>
      <div className="fixed inset-0 w-full h-full bg-stone-900">
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }: NavItem) => (
            <a href={href} key={label} className="text-stone-200 ">
              <div className="container !max-w-full flex items-center justify-between">
                <span>{label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
        <div className="container !max-w-full ">
          <div className="flex justify-between h-20 items-center ">
            <div className=" ">
              <Link href="/">
                <span className="text-xl font-bold uppercase text-white">
                  Kuldeep&nbsp; Yadav
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
        <div className="container !max-w-full ">
          <div className="flex justify-end h-20 items-center ">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border bg-stone-200 border-stone-400 rounded-full inline-flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              <Button variant="primary" className=" hidden md:inline-flex ">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Swittcher  */}
      {/* <ColorMode /> */}
    </header>
  );
}

export default Navbar;
