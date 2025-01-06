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
      <div className="aspect-square md:aspect-[9/16] md:col-span-2">
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
        <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
          <span>&ldquo;</span>
          <span className="">{quote}</span>
          <span>&rdquo;</span>
        </div>
        <cite className="mt-4 md:mt-8 not-italic text-2xl block md:text-lg lg:text-xl">
          {name},{role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
