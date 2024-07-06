"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { Button } from "./Button";

const SortToggler = forwardRef(
  (
    {
      className,
      children,
      value = 1,
      toggler,
      variant = "ghost",
      size = "icon-sm",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        onClick={() => {
          if (toggler !== undefined) toggler();
        }}
        className={cn("rounded-full [--accent:var(--foreground)]", className)}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      >
        <ArrowRight
          className={cn("origin-center transition-transform duration-300", {
            "rotate-90": value === 1,
            "-rotate-90": value === -1,
          })}
          size={20}
        />
        {children && size !== ("icon-sm" || "icon") && children}
      </Button>
    );
  },
);

SortToggler.displayName = "SortToggler";

export default SortToggler;
