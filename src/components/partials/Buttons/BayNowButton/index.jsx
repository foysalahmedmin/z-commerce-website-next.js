"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const BayNowButton = forwardRef(({ className, children = <span>
      Bay Now
    </span>, ...props }, ref) => {
  return (
    <Button className={cn("", className)} {...props} ref={ref}>
      {children}
    </Button>
  );
});

BayNowButton.displayName = "AddToCardButton";

export default BayNowButton;
