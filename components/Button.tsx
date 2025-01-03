import React, { ButtonHTMLAttributes, ReactNode } from "react";

export default function Button(
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={`"  rounded-xl  border  uppercase inline-flex items-center gap-2 transition-all duration-500 relative group/button ",  
        ${
          variant == "primary" &&
          "bg-red-orange-500 h-11 px-6 border-red-orange-500 text-white"
        }
        ${
          variant == "secondary" &&
          "border-red-orange-500 h-11 px-6 hover:bg-red-orange-500 hover:text-white "
        }
        ${
          variant == "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500  after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full"
        }
        ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
}
