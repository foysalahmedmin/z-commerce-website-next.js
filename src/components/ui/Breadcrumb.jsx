"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const Item = ({ className, item: { label, path }, ...props }) => {
  return (
    <li
      className={cn(
        "flex items-center gap-1 text-xl after:content-['/'] last:after:content-['']",
        className,
      )}
      {...props}
    >
      <Link
        href={path || "#"}
        className="text-[1em] text-foreground hover:underline"
        size="none"
      >
        {label}
      </Link>
    </li>
  );
};
export const Breadcrumb = ({ items = [], className, ...props }) => {
  return (
    <ul
      className={cn("flex items-center justify-start gap-2", className)}
      {...props}
    >
      <>
        {items?.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </>
    </ul>
  );
};
