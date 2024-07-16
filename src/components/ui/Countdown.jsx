"use client";

import { cn } from "@/lib/utils";

const { forwardRef } = require("react");

const Countdown = forwardRef(({ className, value = 0, ...props }, ref) => {
  return (
    <span className={cn("countdown-container", className)} {...props} ref={ref}>
      <span
        className={cn({ countdown: value < 100, "fixed-value": value > 100 })}
        data-value={value}
        style={{ "--value": value }}
      />
    </span>
  );
});

Countdown.displayName = "Countdown";
export { Countdown };
