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
        className={cn(
          "w-full rounded-md rounded-t-none uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground",
          className,
        )}
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
