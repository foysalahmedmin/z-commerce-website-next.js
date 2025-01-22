import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { forwardRef } from 'react';

const Summary = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <summary
      ref={ref}
      className={cn(
        "flex items-center justify-between rounded-lg bg-card transition-all duration-300",
        className,
      )}
      {...props}
    >
      <div>{children}</div>
      <ChevronRight className="group-open:rotate-90 transition-all duration-300" />
    </summary>
  );
});
Summary.displayName = 'Summary';

const Accordion = forwardRef(({ children, className, summary, ...props }, ref) => {
  return (
    <details
      className={cn(
        "max-h-svh overflow-hidden transition-all group duration-500 open:max-h-svh ",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Summary {...summary} />
      <div className="transition-all overflow-hidden duration-300">
        {children}
      </div>
    </details>
  );
});
Accordion.displayName = 'Accordion';

export { Accordion };

