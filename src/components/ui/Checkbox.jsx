import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const checkboxVariants = cva(
  "group relative size-4 inline-block rounded-md ring-offset-background cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50 has-[input:disabled]:active:scale-100 has-[input:disabled]:animate-none has-[input:disabled]:cursor-no-drop fill-primary-foreground overflow-hidden appearance-none border",
  {
    variants: {
      variant: {
        default:
          "has-[input:checked]:bg-accent has-[input:checked]:hover:bg-accent/90 text-accent-foreground hover:bg-muted/50",
        primary:
          "has-[input:checked]:bg-primary has-[input:checked]:hover:bg-primary/90 text-primary-foreground hover:bg-muted/50",
        secondary:
          "has-[input:checked]:bg-secondary has-[input:checked]:hover:bg-secondary/90 text-secondary-foreground hover:bg-muted/50",
        destructive:
          "has-[input:checked]:bg-destructive has-[input:checked]:hover:bg-destructive/90 text-destructive-foreground hover:bg-muted/50",
        outline:
          "bg-transparent has-[input:checked]:border-primary text-primary hover:border-primary",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Icon = forwardRef(({ className, children, ...props }, ref) => {
  return (
    children || (
      <svg
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 17 18"
        className={cn(
          "absolute inset-0 z-10 m-auto size-[65%] opacity-0 transition-opacity group-has-[input:checked]:opacity-100 motion-reduce:transition-none",
          className,
        )}
        ref={ref}
        {...props}
      >
        <polyline
          fill="none"
          points="1 9 7 14 15 4"
          stroke="currentColor"
          strokeDasharray="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          style={{ transition: "stroke-dashoffset 250ms linear 0.2s" }}
          className="[stroke-dashoffset:66] group-has-[input:checked]:[stroke-dashoffset:44]"
        />
      </svg>
    )
  );
});
Icon.displayName = "Icon";

const Checkbox = forwardRef(
  ({ className, variant, style, type = "checkbox", icon, ...props }, ref) => {
    return (
      <label
        className={cn(
          checkboxVariants({
            variant,
            className,
          }),
        )}
        style={style}
      >
        <input
          type={type}
          ref={ref}
          style={{ appearance: "none", display: "none" }}
          {...props}
        />
        <Icon {...icon} />
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
