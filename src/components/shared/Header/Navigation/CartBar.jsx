import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

const CartBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="none" size="none">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="h-16">
          <SheetTitle>Carts</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartBar;
