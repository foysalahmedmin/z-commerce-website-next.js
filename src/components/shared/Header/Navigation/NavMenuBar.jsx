import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListMinus } from "lucide-react";
import NavMenus from "./NavMenus";

const NavMenuBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="none" size="none">
          <ListMinus className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="h-16">
          <SheetTitle>Nav Menus</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4">
          <NavMenus />
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuBar;
