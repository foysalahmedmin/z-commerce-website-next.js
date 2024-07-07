import { cn } from "@/lib/utils";
import { Button } from "./Button";

const { forwardRef } = require("react");

const TabButton = forwardRef(
  ({ index, tab, selectedTab, setSelectedTab, className, ...props }, ref) => {
    const { label, value } = tab;
    return (
      <Button
        {...props}
        onClick={() => setSelectedTab({ ...tab, index })}
        className={cn(
          "flex w-full items-center justify-center rounded-md p-3 text-sm font-medium transition-all duration-300",
          {
            "bg-primary text-white":
              selectedTab?.value === value || selectedTab?.index === index,
          },
          className,
        )}
        ref={ref}
      >
        {label}
      </Button>
    );
  },
);
TabButton.displayName = "Tab";

const Tabs = forwardRef(
  (
    { tabs = [], selectedTab, setSelectedTab, className, tabButton, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center rounded-md p-3 text-sm font-medium transition-all duration-300",
          className,
        )}
        {...props}
        ref={ref}
      >
        {tabs.map((tab, i) => (
          <tabButton
            key={i}
            {...tabButton}
            index={i}
            tab={tab}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

export default Tabs;
