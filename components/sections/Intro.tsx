"use client";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <section className="section  mt-12 md:mt-16 lg:mt-20 " id="intro">
      <div className="container">
        <div className="w-full flex flex-wrap overflow-hidden">
          {"Building beautiful websites with clean code and thoughtful design to help your business grow and stand out outline"
            .split(" ")
            .map((data, index) => (
              <h2
                key={index}
                className="text-4xl overflow-hidden  leading-tight md:text-7xl lg:text-8xl  flex"
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
      </div>
    </section>
  );
};

export default Intro;
