"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { forwardRef } from "react";

const drawerVariants = cva(
  "transition-[opacity,transform] group inset-0 absolute h-screen overflow-y-auto duration-300 bg-card origin-left mr-auto text-card-foreground border",
  {
    variants: {
      variant: {
        default: "border-border",
        primary: "border-primary",
        secondary: "border-primary",
        none: "",
      },
      size: {
        default: "w-[85%] md:w-[20em] text-base",
        sm: "w-[75%] sm:w-[16rem]",
        base: "w-[85%] md:w-[20rem]",
        lg: "w-[90%] md:w-[32rem] lg:w-[40rem]",
        xl: "w-[95%] md:w-[32rem] lg:w-[40rem] xl:w-[48rem]",
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
  ({ isCloseButton, closeHandler, children, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center justify-between px-4 py-4 group-[.primary]:bg-primary group-[.secondary]:bg-secondary group-[.primary]:text-primary-foreground group-[.secondary]:text-secondary-foreground lg:px-6",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex-1">{children && children}</div>
        {isCloseButton && closeHandler && (
          <Button
            className="ml-auto"
            variant="outline"
            size="icon-sm"
            onClick={() => closeHandler()}
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
      closeHandler,
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "fixed inset-0 z-[1000] h-screen w-screen origin-center overflow-hidden overflow-y-auto bg-background/85 backdrop-blur transition-[opacity,transform,visibility] duration-200",
          {
            "invisible scale-x-0 opacity-0 delay-300": !isOpen,
            "visible scale-x-100 opacity-100": isOpen,
          },
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget && closeHandler) {
            closeHandler();
          }
        }}
      >
        <div
          className={cn(
            {
              "scale-x-0 animate-pop opacity-0": !isOpen,
              "scale-x-100 animate-pop opacity-100 delay-200": isOpen,
            },
            drawerVariants({
              variant,
              size,
              className,
            }),
          )}
          ref={ref}
          {...props}
        >
          <div>
            {(header || (isCloseButton && closeHandler)) && (
              <Header
                {...header}
                isCloseButton={isCloseButton}
                closeHandler={closeHandler}
              />
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  },
);
Drawer.displayName = "Drawer";

export { Drawer, drawerVariants };
