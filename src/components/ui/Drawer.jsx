"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { forwardRef } from "react";

const drawerVariants = cva(
  "transition-[opacity,transform] z-[1000] group inset-0 absolute h-screen overflow-y-auto duration-300 bg-card origin-left mr-auto text-card-foreground border",
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

const Root = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <dialog ref={ref} className={cn("relative", className)} {...props}>
      {children}
    </dialog>
  );
});
Root.displayName = "Root";

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

const Backdrop = forwardRef(
  ({ className, isOpen, open, closeHandler, ...props }, ref) => {
    return (
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
          className,
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget && closeHandler) {
            closeHandler();
          }
        }}
        ref={ref}
        {...props}
      />
    );
  },
);
Backdrop.displayName = "Backdrop";

const Drawer = forwardRef(
  (
    {
      children,
      root,
      header,
      backdrop,
      className,
      isCloseButton,
      isOpen,
      closeHandler,
      variant,
      size,
      open,
      ...props
    },
    ref,
  ) => {
    return (
      <Root isOpen={isOpen} {...root}>
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
          <div className="h-full">
            {(header || (isCloseButton && closeHandler)) && (
              <Header
                {...header}
                isCloseButton={isCloseButton}
                closeHandler={closeHandler}
              />
            )}
            <div className="h-full">{children}</div>
          </div>
        </div>
        <Backdrop {...backdrop} />
      </Root>
    );
  },
);
Drawer.displayName = "Drawer";

export { Drawer, drawerVariants };
