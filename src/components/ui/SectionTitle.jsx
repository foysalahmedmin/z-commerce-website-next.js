import { cn } from "@/lib/utils";
import { forwardRef } from "react";

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

const SectionTitle = forwardRef(
  ({ title, subtitle, description, className, ...props }, ref) => {
    return (
      <div
        className={cn("mx-auto mb-6 max-w-[768px] px-4 text-center", className)}
        ref={ref}
        {...props}
      >
        {subtitle && Object.keys(subtitle)?.length && (
          <Subtitle {...subtitle} />
        )}
        {title && Object.keys(title)?.length && <Title {...title} />}
        {description && Object.keys(description)?.length && (
          <Description {...description} />
        )}
      </div>
    );
  },
);
SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
