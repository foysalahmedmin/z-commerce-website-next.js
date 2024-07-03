import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "bg-accent text-accent-foreground hover:bg-accent/75",
      gradient:
        "to-accent-secondary hover:to-accent-secondary/75 bg-gradient-to-b from-accent text-accent-foreground hover:from-accent/75 active:bg-gradient-to-t",
      outline:
        "bg-transparent border border-accent/50 text-accent hover:bg-accent/15",
      ghost: "bg-transparent text-accent hover:bg-accent/15",
      link: "text-accent underline-offset-2 hover:underline",
      none: "bg-none bg-transparent border-none text-foreground hover:bg-none hover:bg-transparent",
    },
    size: {
      default: "h-[2.5em] rounded-md px-[1em] text-base",
      sm: "h-8 rounded-md px-4 text-sm",
      base: "h-10 rounded-md px-4",
      lg: "h-12 rounded-lg px-6",
      icon: "p-0 px-0 py-0 size-[2.5em] rounded-md",
      "icon-sm": "p-0 px-0 py-0 size-8 rounded-md",
      "icon-base": "p-0 px-0 py-0 size-10 rounded-md",
      "icon-lg": "p-0 px-0 py-0 size-12 rounded-lg",
      none: "p-0 px-0 h-auto w-auto",
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
    loading: "center",
  },
});

const Button = forwardRef(
  (
    {
      className,
      variant,
      size,
      loading,
      asChild = false,
      disabled = false,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        data-loading={isLoading}
        disabled={isLoading || disabled}
        className={cn(
          buttonVariants({
            variant,
            size,
            loading,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
