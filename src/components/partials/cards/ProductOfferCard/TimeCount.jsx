"use client";

import {
  CountdownTime,
  CountdownTimeUnit,
} from "@/components/ui/CountdownTime";

const TimeCount = ({ expiryDate }) => {
  return (
    <div className="absolute bottom-12 left-4 right-4 px-4 py-2 text-center">
      <CountdownTime endDate={expiryDate}>
        <CountdownTimeUnit unit="day" />
        <span className="text-xl font-bold leading-none text-card shadow">
          :
        </span>
        <CountdownTimeUnit unit="hour" />
        <span className="text-xl font-bold leading-none text-card shadow">
          :
        </span>
        <CountdownTimeUnit unit="minute" />
        <span className="text-xl font-bold leading-none text-card shadow">
          :
        </span>
        <CountdownTimeUnit unit="second" />
      </CountdownTime>
    </div>
  );
};

export default TimeCount;
