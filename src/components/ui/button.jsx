import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "animate-pop relative gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        none: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        none: "",
      },
      loading: {
        default:
          "after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed",
        left: "before:content-[''] before:h-4 before:w-4 before:animate-spin before:rounded-full before:border-4 before:border-dashed",
        right:
          "after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      loadingVariant,
      asChild = false,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const loading =
      isLoading && size !== "icon" && (loadingVariant || "default");
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        disabled={isLoading}
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
