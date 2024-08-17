import {
  CountdownTime,
  CountdownTimeUnit,
} from "@/components/ui/CountdownTime";
import { cn } from "@/lib/utils";

const TimeCounter = ({ className, endDate, ...props }) => {
  return (
    <CountdownTime
      className={cn("gap-4", className)}
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
