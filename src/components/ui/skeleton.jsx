import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Skeleton = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("animate-pulse rounded bg-muted", className)}
      {...props}
      ref={ref}
    />
  );
});

Skeleton.displayName = "Skeleton";

export { Skeleton };
