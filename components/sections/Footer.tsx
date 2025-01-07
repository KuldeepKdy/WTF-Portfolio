"use client";
import { motion } from "framer-motion";
import Button from "../Button";

const navItems = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];
const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const url = new URL(e.currentTarget.href);
  const hash = url.hash;
  const target = document.querySelector(hash);

  if (!target) return;
  target.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2 ">
              <div className="w-full flex flex-wrap">
                {`Enough talk. Let's make something great together.`
                  .split(" ")
                  .map((data, index) => (
                    <h2
                      key={index}
                      className="text-4xl flex md:text-7xl lg:text-8xl mt-8 font-extralight overflow-hidden"
                    >
                      <motion.span
                        initial={{ translateY: "100%" }}
                        whileInView={{
                          translateY: "0%",
                        }}
                        className=""
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                      >
                        {data}&nbsp;
                      </motion.span>
                    </h2>
                  ))}
              </div>

              <Button
                variant="secondary"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover:-translate-x-1/2">
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
                  </div>
                }
                className="mt-8"
              >
                kuldeepkdy4@gmail.com
              </Button>
            </div>
            <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label} onClick={handleClickMobileNavItem}>
                  <Button variant="text" className="text-lg">
                    {label}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Kuldeep Yadav &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
