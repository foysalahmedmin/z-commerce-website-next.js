import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const SectionTitle = forwardRef(
  (
    {
      title,
      subtitle,
      description,
      className,
      titleClassName,
      subtitleClassName,
      descriptionClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn("mx-auto mb-6 max-w-[768px] px-4 text-center", className)}
        ref={ref}
        {...props}
      >
        {subtitle && (
          <small
            className={cn(
              "mb-2 font-comfortaa text-base font-light uppercase tracking-[.2rem]",
              subtitleClassName,
            )}
          >
            {subtitle}
          </small>
        )}
        {title && (
          <h2 className={cn("text-3xl font-bold capitalize", titleClassName)}>
            {title}
          </h2>
        )}
        {description && (
          <p className={cn("mt-4 font-comfortaa", descriptionClassName)}>
            {description}
          </p>
        )}
      </div>
    );
  },
);
SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
