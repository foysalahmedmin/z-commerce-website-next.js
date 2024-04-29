"use client";

import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        size="none"
        variant="none"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="flex cursor-pointer items-center justify-center transition-all duration-500"
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};

export default ModeToggle;
