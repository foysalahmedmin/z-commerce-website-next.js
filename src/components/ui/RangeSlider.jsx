"use client";

import { cn } from "@/lib/utils";
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Context for RangeSlider
const RangeSliderContext = createContext(null);

const useRangeSliderContext = () => {
  const context = useContext(RangeSliderContext);
  if (!context) {
    throw new Error(
      "useRangeSliderContext must be used within <RangeSlider />",
    );
  }
  return context;
};

// RangeSlider Component
const RangeSlider = forwardRef(
  (
    {
      className,
      minValue: minValueProp = 2500,
      maxValue: maxValueProp = 7500,
      minGap = 500,
      minLimit = 0,
      maxLimit = 10000,
      stepSize = 100,
      children,
      ...props
    },
    ref,
  ) => {
    const [minValue, setMinValue] = useState(minValueProp);
    const [maxValue, setMaxValue] = useState(maxValueProp);

    const minInputRef = useRef(null);
    const maxInputRef = useRef(null);
    const progressRef = useRef(null);

    const onMinChange = useCallback(
      (value) => {
        if (maxValue - value >= minGap) setMinValue(value);
      },
      [maxValue, minGap],
    );

    const onMaxChange = useCallback(
      (value) => {
        if (value - minValue >= minGap) setMaxValue(value);
      },
      [minValue, minGap],
    );

    useEffect(() => {
      if (minValueProp !== undefined) {
        onMinChange(minValueProp);
      }
    }, [minValueProp, onMinChange]);

    useEffect(() => {
      if (maxValueProp !== undefined) {
        onMaxChange(maxValueProp);
      }
    }, [maxValueProp, onMaxChange]);

    useEffect(() => {
      if (progressRef.current && minInputRef.current && maxInputRef.current) {
        progressRef.current.style.left = `${(minValue / maxLimit) * 100}%`;
        progressRef.current.style.right = `${100 - (maxValue / maxLimit) * 100}%`;
      }
    }, [minValue, maxValue, maxLimit]);

    return (
      <RangeSliderContext.Provider
        value={{
          minValue,
          maxValue,
          minLimit,
          maxLimit,
          stepSize,
          onMinChange,
          onMaxChange,
          minInputRef,
          maxInputRef,
          progressRef,
        }}
      >
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>
      </RangeSliderContext.Provider>
    );
  },
);

RangeSlider.displayName = "RangeSlider";

// RangeSliderInput Component
const RangeSliderInput = forwardRef(({ className, ...props }, ref) => {
  const {
    minValue,
    maxValue,
    minLimit,
    maxLimit,
    stepSize,
    onMinChange,
    onMaxChange,
    minInputRef,
    maxInputRef,
    progressRef,
  } = useRangeSliderContext();

  return (
    <div className={cn("", className)} ref={ref} {...props}>
      <div className="slider shadow-inner">
        <div ref={progressRef} className="progress" />
      </div>
      <div className="range-input relative">
        <input
          type="range"
          ref={minInputRef}
          className="range-min"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          step={stepSize}
          onChange={(e) => onMinChange(Number(e.target.value))}
        />
        <input
          type="range"
          ref={maxInputRef}
          className="range-max"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          step={stepSize}
          onChange={(e) => onMaxChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
});

RangeSliderInput.displayName = "RangeSliderInput";

// MinInput Component
const MinInput = forwardRef(({ className, ...props }, ref) => {
  const { minValue, onMinChange } = useRangeSliderContext();

  return (
    <label
      className={cn(
        "form-control form-control-variant-default gap-0 divide-x rounded-r-none px-2 py-2",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="inline-block shrink-0 pr-1">
        <ArrowBigDownDash className="size-[1.25em]" strokeWidth={1} />
      </span>
      <input
        type="number"
        className="size-full bg-transparent pl-2 outline-none"
        value={minValue}
        onChange={(e) => onMinChange(Number(e.target.value))}
      />
    </label>
  );
});

MinInput.displayName = "MinInput";

// MaxInput Component
const MaxInput = forwardRef(({ className, ...props }, ref) => {
  const { maxValue, onMaxChange } = useRangeSliderContext();

  return (
    <label
      className={cn(
        "form-control form-control-variant-default gap-0 divide-x rounded-r-none px-2 py-2",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="inline-block shrink-0 pr-1">
        <ArrowBigUpDash className="size-[1.25em]" strokeWidth={1} />
      </span>
      <input
        type="number"
        className="size-full bg-transparent pl-2 outline-none"
        value={maxValue}
        onChange={(e) => onMaxChange(Number(e.target.value))}
      />
    </label>
  );
});

MaxInput.displayName = "MaxInput";

// Export Components
export { MaxInput, MinInput, RangeSlider, RangeSliderInput };
