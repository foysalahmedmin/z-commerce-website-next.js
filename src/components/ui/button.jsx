import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "animate-pop relative gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 disabled:active:scale-100 disabled:animate-none fill-primary-foreground overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-foreground bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        none: "",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-8 rounded-full px-6",
        lg: "h-12 rounded-full px-8",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
        none: "",
      },
      loading: {
        default:
          "after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed",
        left: "before:content-[''] before:h-4 before:w-4 before:animate-spin before:rounded-full before:border-4 before:border-dashed",
        right:
          "after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed",
        center:
          "after:content-[''] after:h-4 after:w-4 after:animate-spin after:rounded-full after:border-4 after:border-dashed after:absolute after:inset-0 after:bg-muted after:mx-auto after:my-auto before:absolute before:inset-0 before:bg-muted",
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
    const loadingVariant =
      isLoading && (size === "icon" ? "center" : loading || "default");
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
