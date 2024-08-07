import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

const CartButton = ({
  className,
  variant = "outline",
  size = "sm",
  ...props
}) => {
  return (
    <>
      <Button
        className={cn("w-full rounded-t-none uppercase", className)}
        variant={variant}
        size={size}
        {...props}
      >
        Add to Cart <ShoppingCart />
      </Button>
    </>
  );
};

export default CartButton;
