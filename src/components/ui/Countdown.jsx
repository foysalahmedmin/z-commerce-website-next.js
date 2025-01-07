"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useRef } from "react";

const Countdown = forwardRef(
  ({ className, value = 0, maxValue = 999, ...props }, ref) => {
    const countdownRef = useRef(null);

    useEffect(() => {
      if (countdownRef.current && typeof maxValue === "number") {
        const countdownElement = countdownRef.current;
        let content = "";

        for (let i = 0; i <= maxValue; i++) {
          content += i.toString().padStart(2, "0") + "\n";
        }

        countdownElement.style.setProperty("--content", content);
      }
    }, [maxValue]);

    return (
      <span
        className={cn("countdown-container", className)}
        {...props}
        ref={ref}
      >
        <span
          className="countdown"
          data-value={value}
          style={{ "--value": value }}
          ref={countdownRef}
        />
      </span>
    );
  },
);

Countdown.displayName = "Countdown";
export { Countdown };
