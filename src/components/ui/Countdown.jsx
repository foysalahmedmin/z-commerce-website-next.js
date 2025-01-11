"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useState } from "react";

const Countdown = forwardRef(
  ({ className, value = 2, maxValue = 99, ...props }, ref) => {
    const [content, setContent] = useState("00");

    useEffect(() => {
      if (typeof maxValue === "number") {
        let content = "";
        for (let i = 0; i <= maxValue; i++) {
          content += i.toString().padStart(2, "0") + "</br>";
        }
        setContent(content);
      }
    }, [maxValue]);

    return (
      <div
        className={cn(
          "relative inline-grid h-[1em] overflow-hidden",
          className,
        )}
        {...props}
        ref={ref}
      >
        <div
          style={{
            "--value": value,
            top: "calc(var(--value) * -1em)",
            transition: "all 1s cubic-bezier(1, 0, 0, 1)",
          }}
          className="relative left-0 right-0 inline-block leading-none transition-all duration-1000"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  },
);

Countdown.displayName = "Countdown";
export { Countdown };
