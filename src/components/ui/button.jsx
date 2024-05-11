import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex animate-pop cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap transition-all duration-300 active:scale-95 disabled:animate-none disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-foreground bg-transparent hover:border-primary hover:text-primary",
        ghost: "hover:bg-accent/90 hover:text-accent-foreground",
        link: "text-accent underline-offset-2 hover:underline",
        none: "bg-none",
      },
      size: {
        default: "h-[2.5em] rounded-md px-[1em] text-base",
        sm: "h-8 rounded-md px-4",
        base: "h-10 rounded-md px-4",
        lg: "h-12 rounded-lg px-6",
        icon: "size-[2.5em] rounded-md",
        "icon-sm": "size-8 rounded-md",
        "icon-base": "size-10 rounded-md",
        "icon-lg": "size-12 rounded-lg",
        none: "p-0 px-0 h-auto w-auto",
      },
      loading: {
        center:
          "data-[loading=true]:relative data-[loading=true]:before:absolute data-[loading=true]:before:inset-0 data-[loading=true]:before:z-10 data-[loading=true]:before:bg-muted-foreground data-[loading=true]:after:absolute data-[loading=true]:after:inset-0 data-[loading=true]:after:z-30 data-[loading=true]:after:mx-auto data-[loading=true]:after:my-auto data-[loading=true]:after:size-[1em] data-[loading=true]:after:animate-spin data-[loading=true]:after:rounded-full data-[loading=true]:after:border-[.25em] data-[loading=true]:after:border-dashed data-[loading=true]:after:border-current data-[loading=true]:after:bg-muted-foreground data-[loading=true]:after:content-[''] data-[loading=true]:cursor-wait",
        left: "data-[loading=true]:relative data-[loading=true]:before:size-[1em] data-[loading=true]:before:animate-spin data-[loading=true]:before:rounded-full data-[loading=true]:before:border-[.25em] data-[loading=true]:before:border-dashed data-[loading=true]:before:border-current data-[loading=true]:before:content-[''] data-[loading=true]:cursor-wait",
        right:
          "data-[loading=true]:relative data-[loading=true]:after:size-[1em] data-[loading=true]:after:animate-spin data-[loading=true]:after:rounded-full data-[loading=true]:after:border-[.25em] data-[loading=true]:after:border-dashed data-[loading=true]:after:border-current data-[loading=true]:after:content-[''] data-[loading=true]:cursor-wait",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: "center",
    },
  },
);

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
