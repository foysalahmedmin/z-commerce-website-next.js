"use client";

import { cn } from "@/lib/utils";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { Countdown } from "./Countdown";

// CountdownTime Context
const CountdownTimeContext = createContext(null);

export const useCountdownTime = () => {
  const context = useContext(CountdownTimeContext);

  if (!context) {
    throw new Error("useCountdownTime must be used within a <CountdownTime />");
  }

  return context;
};

// CountdownTime Component
const CountdownTime = forwardRef(
  (
    {
      className,
      startDate: startDateProp,
      endDate: endDateProp,
      children,
      ...props
    },
    ref,
  ) => {
    // State for countdown values
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
      if (!endDateProp) return;

      const interval = setInterval(() => {
        const startDate = startDateProp ? new Date(startDateProp) : Date.now();
        const endDate = new Date(endDateProp);

        const timeLeft = endDate - startDate;
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
    }, [endDateProp, startDateProp]);

    return (
      <CountdownTimeContext.Provider
        value={{
          startDate: startDateProp,
          endDate: endDateProp,
          day,
          hour,
          minute,
          second,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "relative inline-flex items-center justify-center gap-1",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </CountdownTimeContext.Provider>
    );
  },
);

CountdownTime.displayName = "CountdownTime";

// CountdownTimeUnit Component
const CountdownTimeUnit = forwardRef(({ className, unit, ...props }, ref) => {
  const { day, hour, minute, second } = useCountdownTime();

  const getValue = () => {
    switch (unit) {
      case "day":
        return day;
      case "hour":
        return hour;
      case "minute":
        return minute;
      case "second":
        return second;
      default:
        throw new Error(`Unknown unit prop: ${unit}`);
    }
  };

  return (
    <span className={cn("inline-block", className)} ref={ref} {...props}>
      <Countdown value={getValue()} />
    </span>
  );
});

CountdownTimeUnit.displayName = "CountdownTimeUnit";

export { CountdownTime, CountdownTimeUnit };
