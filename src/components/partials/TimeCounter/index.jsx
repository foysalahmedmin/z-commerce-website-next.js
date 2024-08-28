import {
  CountdownTime,
  CountdownTimeUnit,
} from "@/components/ui/CountdownTime";
import { cn } from "@/lib/utils";

const TimeCounter = ({ className, endDate, variant, ...props }) => {
  return variant === "card" ? (
    <CountdownTime
      className={cn("gap-1", className)}
      endDate={endDate}
      {...props}
    >
      <CountdownTimeUnit
        className="rounded bg-card px-[0.5em] text-base font-bold shadow"
        unit="day"
      />
      <span className="text-[1.25em] font-bold leading-none text-card shadow">
        :
      </span>
      <CountdownTimeUnit
        className="rounded bg-card px-[0.5em] text-base font-bold shadow"
        unit="hour"
      />
      <span className="text-[1.25em] font-bold leading-none text-card shadow">
        :
      </span>
      <CountdownTimeUnit
        className="rounded bg-card px-[0.5em] text-base font-bold shadow"
        unit="minute"
      />
      <span className="text-[1.25em] font-bold leading-none text-card shadow">
        :
      </span>
      <CountdownTimeUnit
        className="rounded bg-card px-[0.5em] text-base font-bold shadow"
        unit="second"
      />
    </CountdownTime>
  ) : (
    <CountdownTime
      className={cn("gap-[1em]", className)}
      endDate={endDate}
      {...props}
    >
      <div className="inline-flex size-10 items-center justify-center rounded-full bg-light text-center text-dark shadow-inner md:size-14">
        <div>
          <CountdownTimeUnit
            className="text-xs font-bold md:text-base"
            unit="day"
          />
          <span className="block text-[6px] font-semibold capitalize leading-none md:text-[10px]">
            days
          </span>
        </div>
      </div>
      <div className="inline-flex size-10 items-center justify-center rounded-full bg-light text-center text-dark shadow-inner md:size-14">
        <div>
          <CountdownTimeUnit
            className="text-xs font-bold md:text-base"
            unit="hour"
          />
          <span className="block text-[6px] font-semibold capitalize leading-none md:text-[10px]">
            hours
          </span>
        </div>
      </div>
      <div className="inline-flex size-10 items-center justify-center rounded-full bg-light text-center text-dark shadow-inner md:size-14">
        <div>
          <CountdownTimeUnit
            className="text-xs font-bold md:text-base"
            unit="minute"
          />
          <span className="block text-[6px] font-semibold capitalize leading-none md:text-[10px]">
            minutes
          </span>
        </div>
      </div>
      <div className="inline-flex size-10 items-center justify-center rounded-full bg-light text-center text-dark shadow-inner md:size-14">
        <div>
          <CountdownTimeUnit
            className="text-xs font-bold md:text-base"
            unit="second"
          />
          <span className="block text-[6px] font-semibold capitalize leading-none md:text-[10px]">
            seconds
          </span>
        </div>
      </div>
    </CountdownTime>
  );
};

export default TimeCounter;
