"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = ({ className }) => {
  const { theme } = useTheme();
  return (
    <div className={cn("inline", className)}>
      <Image
        className="object-contain object-center"
        src={
          theme === "dark"
            ? "/images/shared/logo-dark.png"
            : "/images/shared/logo.png"
        }
        alt="logo"
        width={24}
        height={24}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
