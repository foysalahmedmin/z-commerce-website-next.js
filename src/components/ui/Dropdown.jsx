"use client";

import { Button } from "@/components/ui/Button";
import { useClickOutside } from "@/hooks/ui/useClickOutside";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import {
  createContext,
  forwardRef,
  Fragment,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import PortalRoot from "../portals/PortalRoot";

// Dropdown variants
const dropdownVariants = cva("group/dropdown dropdown", {
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

// DropdownContent variants
const dropdownContentVariants = cva("dropdown-content after:hidden", {
  variants: {
    variant: {
      default: "border bg-card h-fit w-fit border rounded-form-control p-4",
      none: "",
    },
    side: {
      top: "dropdown-content-top",
      bottom: "dropdown-content-bottom",
      left: "dropdown-content-left",
      right: "dropdown-content-right",
    },
  },
  defaultVariants: {
    variant: "default",
    side: "bottom",
  },
});

// Dropdown context
export const DropdownContext = createContext(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a <Dropdown />");
  }
  return context;
};

// Dropdown component
const Dropdown = forwardRef(
  (
    {
      className,
      activeClassName,
      variant,
      side,
      isOpen: isOpenProp,
      setIsOpen: setIsOpenProp,
      children,
      asPortal = false,
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
      <DropdownContext.Provider
        value={{
          variant,
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
            className={cn(dropdownVariants({ variant, className }), {
              [cn("open", activeClassName)]: isOpen,
            })}
            {...props}
          >
            {children}
          </div>
        </Comp>
      </DropdownContext.Provider>
    );
  },
);
Dropdown.displayName = "Dropdown";

// DropdownContent Component
const DropdownContent = forwardRef(
  ({ className, activeClassName, variant, side, ...props }, ref) => {
    const { onClose } = useDropdown();
    const dropdownContentRef = useRef(null);
    useImperativeHandle(ref, () => dropdownContentRef.current);
    useClickOutside(dropdownContentRef, onClose);
    const {
      isOpen,
      variant: variantContext,
      side: sideContext,
    } = useDropdown();
    return (
      <div
        className={cn(
          dropdownContentVariants({
            variant: variant || variantContext,
            side: side || sideContext,
            className,
          }),
          {
            [cn("", activeClassName)]: isOpen,
          },
        )}
        ref={dropdownContentRef}
        {...props}
      />
    );
  },
);
DropdownContent.displayName = "DropdownContent";

// DropdownTrigger Component
const DropdownTrigger = forwardRef(({ onClick, ...props }, ref) => {
  const { onOpen } = useDropdown();
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
    />
  );
});
DropdownTrigger.displayName = "DropdownTrigger";

// DropdownCloseTrigger Component
const DropdownCloseTrigger = forwardRef(
  (
    {
      onClick,
      variant = "outline",
      size = "icon",
      children = <X className="size-[1.5em]" />,
      ...props
    },
    ref,
  ) => {
    const { onClose } = useDropdown();
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
        size={size}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
DropdownCloseTrigger.displayName = "DropdownCloseTrigger";

// DropdownToggler Component
const DropdownToggler = forwardRef(
  ({ onClick, children = "Toggle", ...props }, ref) => {
    const { onToggle } = useDropdown();
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
DropdownToggler.displayName = "DropdownToggler";

export {
  Dropdown,
  DropdownCloseTrigger,
  DropdownContent,
  dropdownContentVariants,
  DropdownToggler,
  DropdownTrigger,
  dropdownVariants,
};
