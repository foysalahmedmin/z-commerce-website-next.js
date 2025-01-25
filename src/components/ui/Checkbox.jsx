"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const checkboxVariants = cva("checkbox", {
  variants: {
    size: {
      default: "checkbox-size-default",
      sm: "checkbox-size-sm",
      md: "checkbox-size-md",
      lg: "checkbox-size-lg",
      none: "",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Checkbox = forwardRef(
  (
    {
      className,
      loadingClassName,
      size,
      type = "checkbox",
      as = "input",
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
        disabled={disabled || isLoading}
        className={cn(
          checkboxVariants({
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

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
