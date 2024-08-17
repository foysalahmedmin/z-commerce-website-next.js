import { cn } from "@/lib/utils";
import { CopyrightIcon } from "lucide-react";

const Copyright = ({ className, ...props }) => {
  return (
    <div className={cn("border-t bg-card", className)} {...props}>
      <div className="container flex items-center justify-center px-4 py-4 text-center text-muted-foreground">
        <CopyrightIcon size={16} />
        <span>Copyright Rimel 2022. All right reserved</span>
      </div>
    </div>
  );
};
export default Copyright;
