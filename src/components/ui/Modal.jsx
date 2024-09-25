"use client";

import PortalRoot from "@/components/portals/PortalRoot";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { createContext, forwardRef, useContext, useState } from "react";

export const ModalContext = createContext(null);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a <Modal />");
  }

  return context;
};

const Modal = forwardRef(
  ({ className, defaultValue, children, ...props }, ref) => {
    const [value, setValue] = useState(defaultValue);
    return (
      <ModalContext.Provider
        value={{
          value,
          setValue,
        }}
      >
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>
      </ModalContext.Provider>
    );
  },
);
Modal.displayName = "Modal";
// ------- //

const modalVariants = cva(
  "transition-[opacity,transform] absolute m-auto duration-300 bg-card origin-center text-card-foreground border rounded",
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
  ({ isCloseButton, onClose, children, className, ...props }, ref) => {
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
            className="ml-auto"
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

const Modal = forwardRef(
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
      ...props
    },
    ref,
  ) => {
    return (
      <PortalRoot>
        <div
          className={cn(
            "px-container fixed inset-0 z-[100000] flex origin-center items-center justify-center overflow-y-auto bg-background/75 py-[1vh] backdrop-blur transition-[opacity,transform,visibility] duration-200",
            {
              "invisible scale-0 opacity-0 delay-300": !isOpen,
              "visible scale-100 opacity-100": isOpen,
            },
          )}
          onClick={(e) => {
            if (e.target === e.currentTarget && onClose) {
              onClose();
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
              {(header || (isCloseButton && onClose)) && (
                <Header
                  {...header}
                  isCloseButton={isCloseButton}
                  onClose={onClose}
                />
              )}
              <div>{children}</div>
            </div>
          </div>
        </div>
      </PortalRoot>
    );
  },
);
Modal.displayName = "Modal";

export { Modal, modalVariants };
