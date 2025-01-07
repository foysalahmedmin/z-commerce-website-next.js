"use client";

import { cn } from "@/lib/utils";
import { SetCartProductQuantity } from "@/redux/slices/cartSlice.js";
import { Minus, Plus } from "lucide-react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
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
      quantity,
      setQuantity,
      maxValue = 100,
      minValue = 0,
      isDispatch,
      index,
      children,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.cart);

    const handleBenefitInputChange = (name, value) => {
      const updatedInputs = products?.map((p) => ({ ...p }));
      updatedInputs[index][name] = value;
      dispatch(SetCartProductQuantity(updatedInputs));
    };

    const handleIncrement = () => {
      if (quantity < maxValue) {
        if (isDispatch) {
          handleBenefitInputChange("quantity", quantity + 1);
        } else {
          setQuantity((prev) => prev + 1);
        }
      }
    };

    const handleDecrement = () => {
      if (quantity > minValue) {
        if (isDispatch) {
          handleBenefitInputChange("quantity", quantity - 1);
        } else {
          setQuantity((prev) => prev - 1);
        }
      }
    };

    useEffect(() => {
      const inputElement = inputRef.current;

      if (inputElement) {
        const handleChange = () => {
          if (isDispatch) {
            handleBenefitInputChange("quantity", Number(inputElement.value));
          } else {
            setQuantity(Number(inputElement.value));
          }
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
        if (quantity < minValue) {
          inputElement.value = minValue;
          setQuantity(minValue);
        } else if (quantity > maxValue) {
          inputElement.value = maxValue;
          setQuantity(maxValue);
        } else {
          inputElement.value = quantity;
        }
      }
    }, [quantity, inputRef, minValue, maxValue]);

    return (
      <QuantitySelectorContext.Provider
        value={{
          inputRef,
          quantity,
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
          "form-control form-control-variant-defaulticon-none h-[2.5em] w-[5em] appearance-none rounded-none px-[0.5em] text-center text-[1em] outline-none",
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
      children = <Plus className="text-[1em]" />,
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
      children = <Minus className="text-[1em]" />,
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
