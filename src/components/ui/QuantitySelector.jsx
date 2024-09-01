"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button } from "./Button";

// QuantitySelector context //
const QuantitySelectorContext = createContext(null);

export const useQuantitySelector = () => {
  const context = useContext(QuantitySelectorContext);

  if (!context) {
    throw new Error(
      "useQuantitySelector must be used within a <QuantitySelector />",
    );
  }

  return context;
};

export const QuantitySelector = forwardRef(
  (
    {
      className,
      defaultValue = 1,
      maxValue = 100,
      minValue = 0,
      children,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue);
    const inputRef = useRef(null);

    const handleIncrement = () => {
      if (value < maxValue) {
        setValue((prev) => prev + 1);
      }
    };

    const handleDecrement = () => {
      if (value > minValue) {
        setValue((prev) => prev - 1);
      }
    };

    useEffect(() => {
      const inputElement = inputRef.current;

      if (inputElement) {
        const handleChange = () => {
          setValue(Number(inputElement.value));
        };
        inputElement.addEventListener("change", handleChange);

        return () => {
          inputElement.removeEventListener("change", handleChange);
        };
      }
    }, [inputRef, minValue, maxValue]);

    useEffect(() => {
      const inputElement = inputRef.current;

      if (inputElement) {
        if (value < minValue) {
          inputElement.value = minValue;
          setValue(minValue);
        } else if (value > maxValue) {
          inputElement.value = maxValue;
          setValue(maxValue);
        } else {
          inputElement.value = value;
        }
      }
    }, [value, inputRef, minValue, maxValue]);

    return (
      <QuantitySelectorContext.Provider
        value={{
          inputRef,
          value,
          handleIncrement,
          handleDecrement,
          minValue,
          maxValue,
        }}
      >
        <div
          ref={ref}
          className={cn("flex h-[2.5em] items-center", className)}
          {...props}
        >
          {children}
        </div>
      </QuantitySelectorContext.Provider>
    );
  },
);
QuantitySelector.displayName = "QuantitySelector";

// QuantityInput Component //
export const QuantityInput = forwardRef(
  ({ className, type = "number", min, max, ...props }, ref) => {
    const { inputRef, minValue, maxValue } = useQuantitySelector();
    useImperativeHandle(ref, () => inputRef?.current);

    return (
      <input
        ref={inputRef}
        className={cn(
          "input icon-none h-[2.5em] w-[5em] appearance-none rounded-none px-[0.5em] text-center text-[1em] outline-none",
          className,
        )}
        type={type}
        min={min || minValue}
        max={max || maxValue}
        {...props}
      />
    );
  },
);
QuantityInput.displayName = "QuantityInput";

// QuantityIncreaseTrigger Component //
export const QuantityIncreaseTrigger = forwardRef(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      type = "button",
      children = <Plus />,
      ...props
    },
    ref,
  ) => {
    const { handleIncrement } = useQuantitySelector();

    return (
      <Button
        className={cn(
          "rounded-l-none border-l-0 border-border text-[1em] text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
          className,
        )}
        onClick={handleIncrement}
        variant={variant}
        size={size}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
QuantityIncreaseTrigger.displayName = "QuantityIncreaseTrigger";

// QuantityDecreaseTrigger Component //
export const QuantityDecreaseTrigger = forwardRef(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      type = "button",
      children = <Minus />,
      ...props
    },
    ref,
  ) => {
    const { handleDecrement } = useQuantitySelector();

    return (
      <Button
        className={cn(
          "rounded-r-none border-r-0 border-border text-[1em] text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
          className,
        )}
        onClick={handleDecrement}
        variant={variant}
        size={size}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
QuantityDecreaseTrigger.displayName = "QuantityDecreaseTrigger";
