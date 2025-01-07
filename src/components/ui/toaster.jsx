"use client";

import PortalRoot from "@/components/portals/PortalRoot";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ChevronRight, X } from "lucide-react";
import { forwardRef, useState } from "react";

const toasterVariants = cva(
  "transition-[opacity,transform] fixed bottom-4 right-4 m-auto duration-300 bg-card origin-center text-card-foreground border rounded",
  {
    variants: {
      variant: {
        default: "border-border",
        primary: "border-primary",
        secondary: "border-primary",
        none: "",
      },
      size: {
        default: "w-full md:w-[32em] lg:w-[40em] text-base",
        sm: "w-full md:w-[32rem]",
        base: "w-full md:w-[32rem] lg:w-[40rem]",
        lg: "w-full lg:w-[40rem] xl:w-[48rem]",
        xl: "w-full xl:w-[48rem] 2xl:w-[52rem]",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Header = forwardRef(
  (
    {
      isCloseButton,
      onClose,
      isMinimized,
      isMinimizeButton,
      minimizeToggler,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "flex items-center justify-between gap-2 px-4 py-4 group-[.primary]:bg-primary group-[.secondary]:bg-secondary group-[.primary]:text-primary-foreground group-[.secondary]:text-secondary-foreground md:px-6",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex-1">{children && children}</div>
        {isMinimizeButton && (
          <Button
            className="ml-auto size-6"
            variant="ghost"
            shape="icon"
            size="sm"
            onClick={() => minimizeToggler()}
          >
            <ChevronRight
              className={cn("transition-all duration-300", {
                "rotate-90": !isMinimized,
                "-rotate-90": isMinimized,
              })}
              size={16}
            />
          </Button>
        )}
        {isCloseButton && onClose && (
          <Button
            className="ml-auto size-6"
            variant="outline"
            shape="icon"
            size="sm"
            onClick={() => onClose()}
          >
            <X size={16} />
          </Button>
        )}
      </div>
    );
  },
);

Header.displayName = "Header";

const Toaster = forwardRef(
  (
    {
      children,
      header,
      className,
      isCloseButton,
      isMinimizeButton,
      isOpen,
      onClose,
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    const [isMinimized, setIsMinimized] = useState(false);
    return (
      <PortalRoot id="toaster-root">
        <div
          className={cn(
            {
              "scale-0 animate-pop opacity-0": !isOpen,
              "scale-100 animate-pop opacity-100 delay-200": isOpen,
            },
            toasterVariants({
              variant,
              size,
              className,
            }),
          )}
          ref={ref}
          {...props}
        >
          <div>
            {(header || (isCloseButton && onClose)) && (
              <Header
                {...header}
                isCloseButton={isCloseButton}
                onClose={onClose}
                isMinimized={isMinimized}
                isMinimizeButton={isMinimizeButton}
                minimizeToggler={() => setIsMinimized((prev) => !prev)}
              />
            )}
            <div
              className={cn("overflow-hidden transition-all duration-300", {
                "h-0": isMinimized && isMinimizeButton,
              })}
            >
              {children}
            </div>
          </div>
        </div>
      </PortalRoot>
    );
  },
);
Toaster.displayName = "Toaster";

export { Toaster, toasterVariants };
