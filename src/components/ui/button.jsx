"use client";

import useRippleEffect from "@/hooks/useRippleEffect";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useImperativeHandle, useRef } from "react";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "bg-accent text-accent-foreground hover:bg-accent/75",
      gradient:
        "to-accent-secondary hover:to-accent-secondary/75 bg-gradient-to-b from-accent text-accent-foreground hover:from-accent/75 active:bg-gradient-to-t",
      outline:
        "bg-transparent border border-accent/50 text-accent hover:bg-accent/15",
      ghost: "bg-transparent text-accent hover:bg-accent/15",
      link: "text-accent underline-offset-2 bg-none bg-transparent border-none hover:bg-none hover:bg-transparent hover:underline",
      none: "",
    },
    size: {
      default: "h-[2.5em] rounded px-[1em] text-base",
      sm: "h-8 rounded px-4 text-sm",
      base: "h-10 rounded px-4",
      lg: "h-12 rounded-lg px-6",
      icon: "size-[2.5em] rounded",
      "icon-sm": "size-8 rounded",
      "icon-base": "size-10 rounded",
      "icon-lg": "size-12 rounded-lg",
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
    const buttonRef = useRef(ref?.current || null);

    useRippleEffect(buttonRef);
    useImperativeHandle(ref, () => buttonRef.current);

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
        ref={buttonRef}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
