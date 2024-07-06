"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const On = forwardRef(
  ({ isOn, className, activeClassName, children, ...props }, ref) => {
    return (
      <span
        className={cn(
          "absolute inline-block rotate-180 opacity-0 transition-all duration-300",
          className,
          {
            [cn("rotate-0 opacity-100", activeClassName)]: isOn,
          },
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
On.displayName = "TrueComp";

const Off = forwardRef(
  ({ isOn, className, activeClassName, children, ...props }, ref) => {
    return (
      <span
        className={cn(
          "absolute inline-block rotate-0 opacity-100 transition-all duration-300",
          className,
          {
            [cn("-rotate-180 opacity-0", activeClassName)]: isOn,
          },
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
Off.displayName = "FalseComp";

const Toggler = forwardRef(({ className, isOn, on, off, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn("relative size-6", className)}
      variant="none"
      size="none"
      {...props}
    >
      <On isOn={isOn} {...on} />
      <Off isOn={isOn} {...off} />
    </Button>
  );
});
Toggler.displayName = "Toggler";

export { Toggler };
