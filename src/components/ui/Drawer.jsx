"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { forwardRef } from "react";

const drawerVariants = cva(
  "transition-[opacity,transform] text-base z-[9999] group inset-0 absolute h-screen overflow-y-auto duration-300 bg-card origin-left mr-auto text-card-foreground border",
  {
    variants: {
      variant: {
        default: "border-border",
        primary: "border-primary",
        secondary: "border-primary",
        none: "",
      },
      size: {
        default: "w-[85vw] md:w-[16em]",
        sm: "w-[75vw] sm:w-[12rem]",
        base: "w-[85vw] md:w-[16rem]",
        lg: "w-[90vw] md:w-[16rem] lg:w-[20rem]",
        xl: "w-[95vw] md:w-[20rem] lg:w-[32rem] xl:w-[40rem]",
        none: "",
      },
      open: {
        md: "md:static md:scale-x-100 md:opacity-100 md:delay-200",
        lg: "lg:static lg:scale-x-100 lg:opacity-100 lg:delay-200",
        xl: "xl:static xl:scale-x-100 xl:opacity-100 xl:delay-200",
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
  ({ isCloseButton, onClose, children, className, open, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center justify-between px-4 py-4 group-[.primary]:bg-primary group-[.secondary]:bg-secondary group-[.primary]:text-primary-foreground group-[.secondary]:text-secondary-foreground md:px-6",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex-1">{children && children}</div>
        {isCloseButton && onClose && (
          <Button
            className={cn("ml-auto", {
              "md:hidden": open && open === "md",
              "lg:hidden": open && open === "lg",
              "xl:hidden": open && open === "xl",
            })}
            variant="outline"
            size="icon-sm"
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

const Drawer = forwardRef(
  (
    {
      children,
      header,
      className,
      isCloseButton,
      isOpen,
      onClose,
      variant,
      size,
      open,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative h-screen">
        <div
          className={cn(
            {
              "scale-x-0 opacity-0": !isOpen,
              "scale-x-100 opacity-100 delay-200": isOpen,
            },
            drawerVariants({
              variant,
              size,
              open,
              className,
            }),
          )}
          ref={ref}
          {...props}
        >
          <div className="flex h-screen flex-col">
            {(header || (isCloseButton && onClose)) && (
              <Header
                {...header}
                open={open}
                isCloseButton={isCloseButton}
                onClose={onClose}
              />
            )}
            <div className="flex-1">{children}</div>
          </div>
        </div>
        <div
          className={cn(
            "fixed inset-0 z-[999] origin-center overflow-hidden overflow-y-auto bg-background/75 backdrop-blur transition-[opacity,transform,visibility] duration-200",
            {
              "invisible scale-x-0 opacity-0 delay-300": !isOpen,
              "visible scale-x-100 opacity-100": isOpen,
            },
            {
              "md:invisible md:hidden md:scale-x-0 md:opacity-0":
                open && open === "md",
              "lg:invisible lg:hidden lg:scale-x-0 lg:opacity-0":
                open && open === "lg",
              "xl:invisible xl:hidden xl:scale-x-0 xl:opacity-0":
                open && open === "xl",
            },
          )}
          onClick={(e) => {
            if (e.target === e.currentTarget && onClose) {
              onClose();
            }
          }}
        />
      </div>
    );
  },
);
Drawer.displayName = "Drawer";

export { Drawer, drawerVariants };
