import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "animate-pop gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 disabled:active:scale-100 disabled:animate-none disabled:cursor-no-drop fill-primary-foreground overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-foreground bg-transparent hover:border-primary hover:text-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        none: "",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 rounded-md px-4",
        lg: "h-12 rounded-md px-6",
        icon: "size-10 rounded-md",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12 rounded-md",
        none: "",
      },
      loading: {
        center:
          "relative after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed after:absolute after:inset-0 after:bg-muted after:mx-auto after:my-auto before:absolute before:inset-0 before:bg-muted cursor-wait",
        left: "relative before:content-[''] before:h-4 before:w-4 before:animate-spin before:rounded-full before:border-4 before:border-dashed cursor-wait",
        right:
          "relative after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed cursor-wait",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const loadingVariant = isLoading && (loading || "center");
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        disabled={isLoading}
        className={cn(
          buttonVariants({
            variant,
            size,
            loading: loadingVariant,
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
