"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const formControlVariants = cva("form-control", {
  variants: {
    variant: {
      default: "form-control-variant-default",
      gradient: "form-control-variant-gradient",
      outline: "form-control-variant-outline",
      ghost: "form-control-variant-ghost",
      link: "form-control-variant-link",
      none: "",
    },
    size: {
      default: "form-control-size-default",
      sm: "form-control-size-sm",
      md: "form-control-size-md",
      lg: "form-control-size-lg",
      none: "",
    },
    loading: {
      center: "loading-center",
      left: "loading-left",
      right: "loading-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const FormControl = forwardRef(
  (
    {
      className,
      loadingClassName,
      variant,
      size,
      loading,
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
        disabled={disabled || isLoading}
        className={cn(
          formControlVariants({
            variant,
            size,
            loading,
            className,
          }),
          {
            [cn("loading", loadingClassName)]: isLoading,
          },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

FormControl.displayName = "FormControl";

export { FormControl, formControlVariants };
