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

// Drawer variants
const drawerVariants = cva("group/drawer drawer z-[1000]", {
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
const drawerBackdropVariants = cva("drawer-backdrop z-[100]", {
  variants: {
    variant: {
      default: "bg-dark/25",
      none: "",
    },
    size: {
      default: "size-full",
      none: "",
    },
    side: {
      center: "origin-center",
      left: "origin-left",
      right: "origin-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    side: "center",
  },
});
const drawerContentVariants = cva("drawer-content", {
  variants: {
    variant: {
      default: "border overflow-y-auto bg-card z-[1000]",
      none: "",
    },
    size: {
      default: "w-[85vw] sm:w-[16em] md:w-[20em] lg:w-[26em] h-full",
      sm: "w-[75vw] sm:w-[12rem] md:w-[16rem] h-full",
      base: "w-[85vw] sm:w-[16rem] md:w-[20rem] lg:w-[26rem] h-full",
      lg: "w-[90vw] sm:w-[16rem] md:w-[24rem] lg:w-[32rem] h-full",
      xl: "w-[95vw] sm:w-[20rem] md:w-[32rem] lg:w-[40rem] xl:w-[48rem] h-full",
      none: "",
    },
    side: {
      center: "mx-auto origin-center",
      left: "mr-auto origin-left",
      right: "ml-auto origin-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    side: "left",
  },
});

// Drawer context
export const DrawerContext = createContext(null);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a <Drawer />");
  }
  return context;
};

// Drawer Component
const Drawer = forwardRef(
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
      <DrawerContext.Provider
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
            className={cn(drawerVariants({ variant, className }), {
              [cn("open", activeClassName)]: isOpen,
            })}
            {...props}
          >
            {children}
          </div>
        </Comp>
      </DrawerContext.Provider>
    );
  },
);
Drawer.displayName = "Drawer";

// DrawerBackdrop Component
const DrawerBackdrop = forwardRef(
  ({ className, activeClassName, variant, size, side, ...props }, ref) => {
    const {
      isOpen,
      onClose,
      variant: variantContext,
      size: sizeContext,
      side: sideContext,
    } = useDrawer();
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) {
            onClose();
          }
        }}
        className={cn(
          drawerBackdropVariants({
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
DrawerBackdrop.displayName = "DrawerBackdrop";

// DrawerContent Component
const DrawerContent = forwardRef(
  ({ className, activeClassName, variant, size, side, ...props }, ref) => {
    const {
      isOpen,
      variant: variantContext,
      size: sizeContext,
      side: sideContext,
    } = useDrawer();
    return (
      <div
        className={cn(
          drawerContentVariants({
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
DrawerContent.displayName = "DrawerContent";

// DrawerTrigger Component
const DrawerTrigger = forwardRef(
  ({ onClick, children = "Open", ...props }, ref) => {
    const { onOpen } = useDrawer();
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
DrawerTrigger.displayName = "DrawerTrigger";

// DrawerCloseTrigger Component
const DrawerCloseTrigger = forwardRef(
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
    const { onClose } = useDrawer();
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
DrawerCloseTrigger.displayName = "DrawerCloseTrigger";

// DrawerToggler Component
const DrawerToggler = forwardRef(
  ({ onClick, children = "Toggle", ...props }, ref) => {
    const { onToggle } = useDrawer();
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
DrawerToggler.displayName = "DrawerToggler";

export {
  Drawer,
  DrawerBackdrop,
  drawerBackdropVariants,
  DrawerCloseTrigger,
  DrawerContent,
  drawerContentVariants,
  DrawerToggler,
  DrawerTrigger,
  drawerVariants,
};
