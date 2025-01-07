"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

const checkActivePath = ({ currentPath, path }) => {
  if (!currentPath || !path) {
    return false;
  } else {
    return (
      trimPath(currentPath) === trimPath(path) ||
      currentPath?.startsWith(trimPath(path) + "/")
    );
  }
};

const ActiveLink = forwardRef(
  ({ children, href, className, activeClassName, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = checkActivePath(pathname, href);
    return (
      <Link
        href={href || ""}
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
