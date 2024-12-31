"use client";
import Link from "next/link";
// import React, { useState } from "react";
import Button from "../Button";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
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
              <div className="size-11 border bg-stone-200 border-stone-400 rounded-full inline-flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                  />
                  <rect x="3" y="7" width="18" height="2" fill="currentColor" />
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
