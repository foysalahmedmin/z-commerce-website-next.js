import * as React from "react";

import { cn } from "@/lib/utils";

const Title = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      className={cn(
        "relative pb-1 text-2xl after:absolute after:inset-0 after:max-w-12 after:border-b-2 after:border-primary after:content-[''] md:pb-2 md:text-4xl md:after:max-w-24 md:after:border-b-4",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Title.displayName = "Title";

export { Title };
