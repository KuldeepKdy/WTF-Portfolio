import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes } from "react";

const Testimonial = (
  props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    role,
    company,
    image,
    imagePositionY,
    className,
    ...rest
  } = props;

  return (
    <div
      key={name}
      className={` ${className} grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center`}
      {...rest}
    >
      <div className="aspect-square relative md:aspect-[9/16] md:col-span-2">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0" }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute h-full bg-stone-900"
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div className="text-3xl flex overflow-hidden flex-wrap md:text-5xl lg:text-6xl mt-8 md:mt-0">
          <div className="w-full flex flex-wrap overflow-hidden">
            {quote.split(" ").map((data, index) => (
              <h2 key={index} className=" overflow-hidden flex">
                <motion.span
                  initial={{ translateY: "100%" }}
                  whileInView={{
                    translateY: "0%",
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                  className="overflow-hidden"
                  exit={{
                    translateY: "100%",
                    transition: {
                      duration: 0.1,
                      delay: index * 0.07,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                >
                  {data}&nbsp;
                </motion.span>
              </h2>
            ))}
          </div>
        </div>
        <cite className="mt-4 md:mt-8 not-italic text-2xl block md:text-lg lg:text-xl">
          {name},{role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
