"use client";

import { activePathChecker, cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

const ActiveLink = forwardRef(
  ({ children, href, className, activeClassName, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = activePathChecker(pathname, href);
    return (
      <Link
        href={href}
        className={cn(className, {
          [cn("text-primary", activeClassName)]: isActive,
        })}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    );
  },
);
ActiveLink.displayName = "ActiveLink";

export { ActiveLink };
