"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useRef } from "react";

const dropdownVariants = cva(
  "transition-[opacity,transform] z-30 absolute duration-300 bg-card origin-center text-card-foreground border rounded",
  {
    variants: {
      side: {
        left: "-left-2 -translate-x-full top-1/2 -translate-y-1/2 origin-right",
        right: "-right-2 translate-x-full top-1/2 -translate-y-1/2 origin-left",
        top: "-top-2 -translate-y-full left-1/2 -translate-x-1/2 origin-bottom",
        bottom:
          "-bottom-2 translate-y-full left-1/2 -translate-x-1/2 origin-top",
      },
    },
    defaultVariants: {
      side: "bottom",
    },
  },
);

const Dropdown = forwardRef(
  ({ onClose, isOpen, children, className, side, ...props }, ref) => {
    const internalRef = useRef(null);
    useClickOutside(internalRef, onClose);
    return (
      <div
        className={cn(
          {
            "scale-0 animate-pop opacity-0": !isOpen,
            "scale-100 animate-pop opacity-100": isOpen,
          },
          dropdownVariants({
            side,
            className,
          }),
        )}
        ref={(node) => {
          internalRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref && typeof ref === "object") {
            ref.current = node;
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Dropdown.displayName = "Dropdown";

export { Dropdown, dropdownVariants };
