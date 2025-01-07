import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const switchVariants = cva("switch", {
  variants: {
    size: {
      default: "switch-size-default",
      sm: "switch-size-sm",
      md: "switch-size-md",
      lg: "switch-size-lg",
      none: "",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Switch = forwardRef(
  (
    {
      className,
      loadingClassName,
      size,
      type = "checkbox",
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
          switchVariants({
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

Switch.displayName = "Switch";

export { Switch, switchVariants };
