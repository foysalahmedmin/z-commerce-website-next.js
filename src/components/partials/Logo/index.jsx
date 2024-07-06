import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className, asChild, href = "/", ...props }) => {
  const Comp = asChild ? "span" : Link;
  return (
    <Comp
      className={cn(
        "font-comfortaa flex items-center gap-1 uppercase tracking-widest",
        className,
      )}
      href={href}
      {...props}
    >
      <Image
        src="/images/partials/logo.svg"
        width={32}
        height={32}
        alt="logo"
      />
      <span className="text-base">Commerce</span>
    </Comp>
  );
};

export default Logo;
