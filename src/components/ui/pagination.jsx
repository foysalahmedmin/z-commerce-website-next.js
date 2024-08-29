"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { Button } from "./Button";

const Pagination = forwardRef(
  ({ pages = 0, currentPage = 0, className, pageButton, ...props }, ref) => {
    const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
    return (
      <div
        className={cn("inline-flex items-center gap-2", className)}
        {...props}
        ref={ref}
      >
        <Button className="rounded-full" size="icon">
          <ArrowLeft />
        </Button>
        <>
          {pagesArray.map((page) => (
            <PageButton
              key={page}
              pageNumber={page}
              currentPage={currentPage}
              {...pageButton}
            />
          ))}
        </>
        <Button className="rounded-full" size="icon">
          <ArrowRight />
        </Button>
      </div>
    );
  },
);
Pagination.displayName = "Pagination";

export const PageButton = forwardRef(
  (
    {
      pageNumber,
      currentPage = 0,
      className,
      activeClassName,
      size = "icon-sm",
      variant = "outline",
      ...props
    },
    ref,
  ) => {
    const isActive = pageNumber === currentPage;
    return (
      <Button
        className={cn("text-sm", className, {
          [cn(
            "border-primary bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground",
            activeClassName,
          )]: isActive,
        })}
        {...props}
        ref={ref}
        size={size}
        variant={variant}
      >
        {pageNumber}
      </Button>
    );
  },
);
PageButton.displayName = "PageButton";

export { Pagination };
