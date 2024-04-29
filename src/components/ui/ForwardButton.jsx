"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { forwardRef } from "react";

const ForwardButton = forwardRef(({ className, ...props }, ref) => {
  return (
    <Button
      onClick={() => {
        window.history.forward();
      }}
      variant="none"
      className={cn("p-0 px-0 py-0 hover:text-primary", className)}
      ref={ref}
      {...props}
    >
      <ChevronRight size={48} />
    </Button>
  );
});
ForwardButton.displayName = "ForwardButton";

export { ForwardButton };

