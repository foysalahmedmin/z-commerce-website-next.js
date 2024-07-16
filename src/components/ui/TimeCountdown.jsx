"use client";

import { cn } from "@/lib/utils";
import { Countdown } from "./Countdown";

const { forwardRef, useState, useEffect } = require("react");

const TimeCountdown = forwardRef(({ className, expiryDate, ...props }, ref) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (!expiryDate) return;

    const interval = setInterval(() => {
      const timeLeft = new Date(expiryDate) - Date.now();
      if (timeLeft < 0) {
        clearInterval(interval);
        return;
      }
      setDay(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHour(Math.floor((timeLeft / 1000 / 60 / 60) % 24));
      setMinute(Math.floor((timeLeft / 1000 / 60) % 60));
      setSecond(Math.floor((timeLeft / 1000) % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [expiryDate]);

  return (
    <div
      className={cn(
        "countdown-container flex items-center justify-center gap-1",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="rounded-lg bg-card px-2 text-base">
        <Countdown className=" font-bold" value={day} />
      </span>
      <span className="text-xl font-bold leading-none text-card">:</span>
      <span className="rounded-lg bg-card px-2 text-base">
        <Countdown className=" font-bold" value={hour} />
      </span>
      <span className="text-xl font-bold leading-none text-card">:</span>
      <span className="rounded-lg bg-card px-2 text-base">
        <Countdown className=" font-bold" value={minute} />
      </span>
      <span className="text-xl font-bold leading-none text-card">:</span>
      <span className="rounded-lg bg-card px-2 text-base">
        <Countdown className=" font-bold" value={second} />
      </span>
    </div>
  );
});

TimeCountdown.displayName = "TimeCountdown";

export { TimeCountdown };
