import { Heart, HeartOutline } from "@/assets/images/icons/Heart";
import BayNowButton from "@/components/partials/Buttons/BayNowButton";
import { Button } from "@/components/ui/Button";
import {
  QuantityDecreaseTrigger,
  QuantityIncreaseTrigger,
  QuantityInput,
  QuantitySelector,
} from "@/components/ui/QuantitySelector";
import { cn } from "@/lib/utils";

const ProductPurchase = ({ className, product }) => {
  const { availableStock } = product;
  const wishListed = false;

  return (
    <div className={cn("flex gap-4", className)}>
      <QuantitySelector
        defaultValue={1}
        minValue={1}
        maxValue={Number(availableStock)}
      >
        <QuantityDecreaseTrigger />
        <QuantityInput />
        <QuantityIncreaseTrigger />
      </QuantitySelector>

      <BayNowButton className="flex-1 px-6" />

      <Button
        className="border-border text-foreground"
        size="icon"
        variant="outline"
      >
        {wishListed ? (
          <Heart className="size-[1.5rem]" />
        ) : (
          <HeartOutline className="size-[1.5rem]" />
        )}
      </Button>
    </div>
  );
};

export default ProductPurchase;
