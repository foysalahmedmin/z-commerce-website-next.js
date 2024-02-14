"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = ({ className }) => {
  const { theme } = useTheme();
  return (
    <div className={cn("inline-block h-10 w-10", className)}>
      <Image
        src={
          theme === "dark"
            ? "/images/shared/logo-dark.png"
            : "/images/shared/logo.png"
        }
        alt="logo"
        width={60}
        height={60}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
