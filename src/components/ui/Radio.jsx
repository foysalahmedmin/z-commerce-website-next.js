"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const radioVariants = cva("radio", {
  variants: {
    size: {
      default: "radio-size-default",
      sm: "radio-size-sm",
      md: "radio-size-md",
      lg: "radio-size-lg",
      none: "",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Radio = forwardRef(
  (
    {
      className,
      loadingClassName,
      size,
      type = "radio",
      as = "form-control",
      asChild = false,
      disabled = false,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? "span" : as;
    return (
      <Comp
        data-as={as || null}
        data-state={isLoading ? "loading" : null}
        disabled={disabled || isLoading}
        className={cn(
          radioVariants({
            size,
            className,
          }),
          {
            [cn("loading", loadingClassName)]: isLoading,
          },
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);

Radio.displayName = "Radio";

export { Radio, radioVariants };
