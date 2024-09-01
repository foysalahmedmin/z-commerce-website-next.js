import { Button } from "@/components/ui/Button";
import {
  QuantityDecreaseTrigger,
  QuantityIncreaseTrigger,
  QuantityInput,
  QuantitySelector,
} from "@/components/ui/QuantitySelector";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";

const CartItem = ({ className, item, index }) => {
  const { name, price, image, availableStock } = item;
  return (
    <tr className={cn("border-b last:border-b-0", className)}>
      <td className="w-16 whitespace-nowrap py-2 text-center">{index + 1}</td>
      <td className="whitespace-nowrap px-4 py-2 text-left">
        <div className="inline-flex items-center gap-2">
          <div className="size-16 rounded bg-muted/15 p-1 shadow-inner dark:bg-background">
            <Image
              className="size-full object-contain object-center"
              src={image}
              alt={name}
              width={100}
              height={100}
            />
          </div>
          <div className="flex-1">
            <h5>{name}</h5>
            <div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <strong className="text-foreground">Color:</strong>{" "}
                <span className="size-4 rounded-full bg-orange-500" />{" "}
                <span>Orange</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <strong className="text-foreground">Size:</strong>
                <span>XXL</span>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-center">${price}</td>
      <td className="whitespace-nowrap px-4 py-2 text-center">
        <QuantitySelector defaultValue={2} className="inline-flex">
          <QuantityDecreaseTrigger />
          <QuantityInput />
          <QuantityIncreaseTrigger />
        </QuantitySelector>
      </td>
      <td className="whitespace-nowrap py-2 text-center font-semibold">
        ${price * 2}
      </td>
      <td className="whitespace-nowrap py-2 text-center">
        <Button
          className="[--accent:var(--destructive)]"
          variant="outline"
          size="icon-sm"
        >
          <X />
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
