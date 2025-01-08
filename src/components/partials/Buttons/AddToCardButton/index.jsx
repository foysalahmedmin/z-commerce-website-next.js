"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const AddToCardButton = forwardRef(({ className, children = <span>
      Add to Card
    </span>, ...props }, ref) => {
  return (
    <Button className={cn("", className)} {...props} ref={ref}>
      {children}
    </Button>
  );
});

AddToCardButton.displayName = "AddToCardButton";

export default AddToCardButton;
