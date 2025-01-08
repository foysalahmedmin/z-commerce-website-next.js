"use client";

import { useTheme } from "@/components/provider/ThemeProvider";
import { Toggler } from "@/components/ui/Toggler";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggler
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      isOn={theme === "dark"}
      className="hover:text-primary"
      on={{
        children: <Sun className="size-6" />,
      }}
      off={{
        children: <Moon className="size-6" />,
      }}
    />
  );
};

export default ThemeToggler;
