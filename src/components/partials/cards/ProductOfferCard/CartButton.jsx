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
        className={cn(
          "uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground",
          className,
        )}
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
