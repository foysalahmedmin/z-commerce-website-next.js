"use client";

import { Toggler } from "@/components/ui/Toggler";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggler
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      isTrue={theme === "dark"}
      trueComp={{
        children: <Sun className="size-6 hover:text-primary" />,
      }}
      falseComp={{
        children: <Moon className="size-6 hover:text-primary" />,
      }}
    />
  );
};

export default ThemeToggler;
