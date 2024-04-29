"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const TrueComp = forwardRef(
  ({ isTrue, className, activeClassName, children, ...props }, ref) => {
    return (
      <span
        className={cn(
          "absolute inline-block rotate-180 opacity-0 transition-all duration-300",
          className,
          {
            [cn("rotate-0 opacity-100", activeClassName)]: isTrue,
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
TrueComp.displayName = "TrueComp";

const FalseComp = forwardRef(
  ({ isTrue, className, activeClassName, children, ...props }, ref) => {
    return (
      <span
        className={cn(
          "absolute inline-block rotate-0 opacity-100 transition-all duration-300",
          className,
          {
            [cn("-rotate-180 opacity-0", activeClassName)]: isTrue,
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
FalseComp.displayName = "FalseComp";

const Toggler = forwardRef(
  ({ className, isTrue, trueComp, falseComp, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn("relative", className)}
        variant="none"
        {...props}
      >
        <TrueComp isTrue={isTrue} {...trueComp} />
        <FalseComp isTrue={isTrue} {...falseComp} />
      </Button>
    );
  },
);
Toggler.displayName = "Toggler";

export { Toggler };
