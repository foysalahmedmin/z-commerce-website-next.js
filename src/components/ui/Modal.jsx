"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { forwardRef } from "react";

const modalVariants = cva(
  "transition-[opacity,transform] absolute m-auto duration-300 bg-card origin-center text-card-foreground border rounded-md",
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

const Modal = forwardRef(
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
          "px-container fixed inset-0 z-[1000] flex h-screen w-screen origin-center items-center justify-center overflow-y-auto bg-background/85 py-[1vh] backdrop-blur transition-[opacity,transform,visibility] duration-200",
          {
            "invisible scale-0 opacity-0 delay-300": !isOpen,
            "visible scale-100 opacity-100": isOpen,
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
              "scale-0 animate-pop opacity-0": !isOpen,
              "scale-100 animate-pop opacity-100 delay-200": isOpen,
            },
            modalVariants({
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
Modal.displayName = "Modal";

export { Modal, modalVariants };
