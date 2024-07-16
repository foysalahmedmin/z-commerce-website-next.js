import { CartOutline } from "@/assets/images/icons/Cart";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CartButton = ({
  className,
  variant = "outline",
  size = "sm",
  ...props
}) => {
  return (
    <>
      <Button
        className={cn("uppercase", className)}
        variant={variant}
        size={size}
        {...props}
      >
        ADD <CartOutline className="shrink-0 text-lg" />
      </Button>
    </>
  );
};

export default CartButton;
