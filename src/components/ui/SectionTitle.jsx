import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const SectionTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "short-underline mx-auto mb-10 max-w-[768px] px-4 pb-2 text-center after:mx-auto after:border-b-4",
        className,
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
        "font-comfortaa mb-2 text-base font-light uppercase tracking-[.2rem] text-primary",
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
