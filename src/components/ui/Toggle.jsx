"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";

// Toggle context //
export const ToggleContext = createContext(null);

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("useToggle must be used within a <Toggle />");
  }

  return context;
};

const Toggle = forwardRef(
  (
    { className, isOn: isOnProp, setIsOn: setIsOnProp, children, ...props },
    ref,
  ) => {
    const [isOn, setIsOn] = useState(isOnProp);

    const onToggle = () => {
      setIsOn((prev) => !prev);
      if (setIsOnProp) {
        setIsOnProp((prev) => !prev);
      }
    };

    useEffect(() => {
      if (typeof isOnProp === "boolean") {
        setIsOn(isOnProp);
      }
    }, [isOnProp]);

    return (
      <ToggleContext.Provider
        value={{
          isOn,
          onToggle,
        }}
      >
        <div
          ref={ref}
          className={cn("relative inline-flex", className)}
          {...props}
        >
          {children}
        </div>
      </ToggleContext.Provider>
    );
  },
);
Toggle.displayName = "Toggle";
// ------- //

const ToggleTrigger = forwardRef(
  (
    {
      className,
      type = "button",
      variant = "none",
      size = "icon",
      shape = "none",
      onClick,
      ...props
    },
    ref,
  ) => {
    const { onToggle } = useToggle();

    return (
      <Button
        ref={ref}
        className={cn("relative size-6", className)}
        type={type}
        variant={variant}
        size={size}
        shape={shape}
        onClick={() => {
          onToggle();
          if (onClick) {
            onClick();
          }
        }}
        {...props}
      />
    );
  },
);
ToggleTrigger.displayName = "ToggleTrigger";

const ToggleOnComp = forwardRef(
  ({ className, activeClassName, children, ...props }, ref) => {
    const { isOn } = useToggle();

    return (
      <span
        className={cn(
          "absolute inline-block rotate-180 opacity-0 transition-all duration-300",
          className,
          {
            [cn("rotate-0 opacity-100", activeClassName)]: isOn,
          },
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
ToggleOnComp.displayName = "ToggleOnComp";

const ToggleOffComp = forwardRef(
  ({ className, activeClassName, children, ...props }, ref) => {
    const { isOn } = useToggle();

    return (
      <span
        className={cn(
          "absolute inline-block rotate-0 opacity-100 transition-all duration-300",
          className,
          {
            [cn("-rotate-180 opacity-0", activeClassName)]: isOn,
          },
        )}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
ToggleOffComp.displayName = "ToggleOffComp";

export { Toggle, ToggleOffComp, ToggleOnComp, ToggleTrigger };
