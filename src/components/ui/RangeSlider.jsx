"use client";

import { cn } from "@/lib/utils";
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";

const RangeSlider = forwardRef(
  (
    {
      className,
      defaultMinValue = 2500,
      defaultMaxValue = 7500,
      minRange = 0,
      maxRange = 10000,
      step = 100,
      priceGap = 500,
      ...props
    },
    ref,
  ) => {
    const [minValue, setMinValue] = useState(defaultMinValue);
    const [maxValue, setMaxValue] = useState(defaultMaxValue);
    const rangeMinRef = useRef(null);
    const rangeMaxRef = useRef(null);
    const rangeProgressRef = useRef(null);

    useEffect(() => {
      const updateRange = () => {
        rangeProgressRef.current.style.left = `${(minValue / rangeMinRef.current.max) * 100}%`;
        rangeProgressRef.current.style.right = `${100 - (maxValue / rangeMaxRef.current.max) * 100}%`;
      };

      updateRange();
    }, [minValue, maxValue]);

    const handleMinInputChange = (e) => {
      const value = parseInt(e.target.value);
      if (maxValue - value >= priceGap) {
        setMinValue(value);
      }
    };

    const handleMaxInputChange = (e) => {
      const value = parseInt(e.target.value);
      if (value - minValue >= priceGap) {
        setMaxValue(value);
      }
    };

    const handleMinRangeChange = (e) => {
      const value = parseInt(e.target.value);
      if (maxValue - value >= priceGap) {
        setMinValue(value);
      }
    };

    const handleMaxRangeChange = (e) => {
      const value = parseInt(e.target.value);
      if (value - minValue >= priceGap) {
        setMaxValue(value);
      }
    };

    return (
      <div className={cn("", className)} ref={ref} {...props}>
        <div className="mb-4 flex w-full items-center">
          <label className="input h-6 flex-1 gap-0 divide-x rounded-r-none px-2 py-2">
            <span className="inline-block shrink-0 pr-1">
              <ArrowBigDownDash strokeWidth={1} size={24} />
            </span>
            <input
              type="number"
              className="size-full bg-transparent pl-2 text-sm outline-none"
              value={minValue}
              onChange={handleMinInputChange}
            />
          </label>
          <label className="input h-6 flex-1 gap-0 divide-x rounded-l-none px-2 py-2">
            <span className="inline-block shrink-0 pr-1">
              <ArrowBigUpDash strokeWidth={1} size={24} />
            </span>
            <input
              type="number"
              className="size-full bg-transparent pl-2 text-sm outline-none"
              value={maxValue}
              onChange={handleMaxInputChange}
            />
          </label>
        </div>
        <div className="slider shadow-inner">
          <div ref={rangeProgressRef} className="progress" />
        </div>
        <div className="range-input relative">
          <input
            type="range"
            ref={rangeMinRef}
            className="range-min"
            min={minRange}
            max={maxRange}
            value={minValue}
            step={step}
            onChange={handleMinRangeChange}
          />
          <input
            type="range"
            ref={rangeMaxRef}
            className="range-max"
            min={minRange}
            max={maxRange}
            value={maxValue}
            step={step}
            onChange={handleMaxRangeChange}
          />
        </div>
      </div>
    );
  },
);

RangeSlider.displayName = "RangeSlider";

export { RangeSlider };
