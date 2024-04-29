"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { forwardRef } from "react";

const BackButton = forwardRef(({ className, ...props }, ref) => {
  return (
    <Button
      onClick={() => {
        window.history.back();
      }}
      variant="none"
      className={cn("p-0 px-0 py-0 hover:text-primary", className)}
      ref={ref}
      {...props}
    >
      <ChevronLeft size={48} />
    </Button>
  );
});
BackButton.displayName = "BackButton";

export { BackButton };

