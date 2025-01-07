"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import {
  createContext,
  forwardRef,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import PortalRoot from "../portals/PortalRoot";

// Modal variants
const modalVariants = cva("group/modal modal z-[1000]", {
  variants: {
    variant: {
      default: "",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const modalBackdropVariants = cva("modal-backdrop z-[100]", {
  variants: {
    variant: {
      default: "bg-dark/25",
      none: "",
    },
    size: {
      default: "size-full",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
const modalContentVariants = cva("modal-content", {
  variants: {
    variant: {
      default:
        "border h-fit max-h-full my-auto overflow-y-auto bg-card z-[1000]",
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
    side: {
      center: "mx-auto origin-center",
      left: "mx-auto origin-left",
      right: "mx-auto origin-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    side: "left",
  },
});

// Modal context
export const ModalContext = createContext(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a <Modal />");
  }
  return context;
};

// Modal component
const Modal = forwardRef(
  (
    {
      className,
      activeClassName,
      variant,
      size,
      side,
      isOpen: isOpenProp,
      setIsOpen: setIsOpenProp,
      children,
      asPortal = true,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(isOpenProp || false);

    const onOpen = () => {
      setIsOpen(true);
      if (setIsOpenProp) {
        setIsOpenProp(true);
      }
    };

    const onClose = () => {
      setIsOpen(false);
      if (setIsOpenProp) {
        setIsOpenProp(false);
      }
    };

    const onToggle = () => {
      setIsOpen((prev) => !prev);
      if (setIsOpenProp) {
        setIsOpenProp((prev) => !prev);
      }
    };

    const onOpenChange = (open) => {
      setIsOpen(open);
      if (setIsOpenProp) {
        setIsOpenProp(open);
      }
    };

    useEffect(() => {
      if (typeof isOpenProp === "boolean") {
        setIsOpen(isOpenProp);
      }
    }, [isOpenProp]);

    const Comp = asPortal ? PortalRoot : Fragment;

    return (
      <ModalContext.Provider
        value={{
          variant,
          size,
          side,
          isOpen,
          onOpen,
          onClose,
          onToggle,
          onOpenChange,
        }}
      >
        <Comp>
          <div
            ref={ref}
            className={cn(modalVariants({ variant, className }), {
              [cn("open", activeClassName)]: isOpen,
            })}
            {...props}
          >
            {children}
          </div>
        </Comp>
      </ModalContext.Provider>
    );
  },
);
Modal.displayName = "Modal";

// ModalBackdrop Component
const ModalBackdrop = forwardRef(
  ({ className, activeClassName, variant, size, ...props }, ref) => {
    const {
      isOpen,
      onClose,
      variant: variantContext,
      size: sizeContext,
    } = useModal();
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) {
            onClose();
          }
        }}
        className={cn(
          modalBackdropVariants({
            variant: variant || variantContext,
            size: size || sizeContext,
            className,
          }),
          {
            [cn("", activeClassName)]: isOpen,
          },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
ModalBackdrop.displayName = "ModalBackdrop";

// ModalContent Component
const ModalContent = forwardRef(
  ({ className, activeClassName, variant, size, side, ...props }, ref) => {
    const {
      isOpen,
      variant: variantContext,
      size: sizeContext,
      side: sideContext,
    } = useModal();
    return (
      <div
        className={cn(
          modalContentVariants({
            variant: variant || variantContext,
            size: size || sizeContext,
            side: side || sideContext,
            className,
          }),
          {
            [cn("", activeClassName)]: isOpen,
          },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
ModalContent.displayName = "ModalContent";

// ModalTrigger Component
const ModalTrigger = forwardRef(
  ({ onClick, children = "Open", ...props }, ref) => {
    const { onOpen } = useModal();
    return (
      <Button
        onClick={() => {
          if (onOpen) {
            onOpen();
          }
          if (onClick) {
            onClick();
          }
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
ModalTrigger.displayName = "ModalTrigger";

// ModalCloseTrigger Component
const ModalCloseTrigger = forwardRef(
  (
    {
      onClick,
      variant = "outline",
      shape = "icon",
      children = <X className="size-[1.5em]" />,
      ...props
    },
    ref,
  ) => {
    const { onClose } = useModal();
    return (
      <Button
        onClick={() => {
          if (onClose) {
            onClose();
          }
          if (onClick) {
            onClick();
          }
        }}
        variant={variant}
        shape={shape}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
ModalCloseTrigger.displayName = "ModalCloseTrigger";

// ModalToggler Component
const ModalToggler = forwardRef(
  ({ onClick, children = "Toggle", ...props }, ref) => {
    const { onToggle } = useModal();
    return (
      <Button
        onClick={() => {
          if (onToggle) {
            onToggle();
          }
          if (onClick) {
            onClick();
          }
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
ModalToggler.displayName = "ModalToggler";

export {
  Modal,
  ModalBackdrop,
  modalBackdropVariants,
  ModalCloseTrigger,
  ModalContent,
  modalContentVariants,
  ModalToggler,
  ModalTrigger,
  modalVariants,
};
