import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const sectionTitleVariants = cva("group mb-6 max-w-[768px] md:mb-8", {
  variants: {
    variant: {
      center:
        "center short-underline mx-auto pb-2 px-4 text-center after:border-b-2 after:border-primary after:mx-auto",
      left: "left text-left after:mr-auto",
      right: "right text-right after:ml-auto",
      none: "",
    },
  },
  defaultVariants: {
    variant: "left",
  },
});

const SectionTitle = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      className={cn(
        sectionTitleVariants({
          variant,
          className,
        }),
      )}
      ref={ref}
      {...props}
    />
  );
});
SectionTitle.displayName = "SectionTitle";

const Title = forwardRef(({ className, ...props }, ref) => {
  return (
    <h2
      className={cn("text-3xl font-bold uppercase", className)}
      {...props}
      ref={ref}
    />
  );
});
Title.displayName = "Title";

const Subtitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      className={cn(
        "font-comfortaa mb-2 inline-block border-primary px-4 py-1 text-sm uppercase tracking-[.2rem] text-primary group-[.left]:border-l-8 group-[.right]:border-r-8",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
Subtitle.displayName = "Subtitle";

const Description = forwardRef(({ className, ...props }, ref) => {
  return (
    <p className={cn("font-comfortaa mt-4", className)} {...props} ref={ref} />
  );
});
Description.displayName = "Description";

export { Description, SectionTitle, Subtitle, Title };
