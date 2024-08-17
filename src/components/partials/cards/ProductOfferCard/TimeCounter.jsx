"use client";

import {
  CountdownTime,
  CountdownTimeUnit,
} from "@/components/ui/CountdownTime";

const TimeCounter = ({ endDate }) => {
  return (
    <div className="absolute bottom-12 left-4 right-4 px-4 py-2 text-center">
      <CountdownTime endDate={endDate}>
        <CountdownTimeUnit
          className="rounded bg-card px-2 text-base font-bold shadow"
          unit="day"
        />
        <span className="text-xl font-bold leading-none text-card shadow">
          :
        </span>
        <CountdownTimeUnit
          className="rounded bg-card px-2 text-base font-bold shadow"
          unit="hour"
        />
        <span className="text-xl font-bold leading-none text-card shadow">
          :
        </span>
        <CountdownTimeUnit
          className="rounded bg-card px-2 text-base font-bold shadow"
          unit="minute"
        />
        <span className="text-xl font-bold leading-none text-card shadow">
          :
        </span>
        <CountdownTimeUnit
          className="rounded bg-card px-2 text-base font-bold shadow"
          unit="second"
        />
      </CountdownTime>
    </div>
  );
};

export default TimeCounter;
