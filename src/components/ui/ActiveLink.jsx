"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

const ActiveLink = forwardRef(
  ({ children, href, className, activeClassName, ...props }, ref) => {
    const pathname = usePathname();
    return (
      <Link
        href={href}
        className={cn(className, {
          [cn("text-primary", activeClassName)]: pathname === href,
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

