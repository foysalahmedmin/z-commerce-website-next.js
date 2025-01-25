"use client";

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
import { useState } from "react";

const CartItem = ({ className, item, index }) => {
  const { name, price, image, availableStock } = item;
  const [quantity, setQuantity] = useState(2);
  return (
    <tr className={cn("border-b", className)}>
      <td className="w-[4em] whitespace-nowrap py-[0.5em] text-center text-[1em]">
        {index + 1}
      </td>
      <td className="whitespace-nowrap px-[1em] py-[0.5em] text-left text-[1em]">
        <div className="inline-flex items-center gap-[0.5em]">
          <div className="size-[4em] rounded bg-muted/15 p-[0.25em] shadow-inner dark:bg-background">
            <Image
              className="size-full object-contain object-center"
              src={image}
              alt={name}
              width={100}
              height={100}
            />
          </div>
          <div className="flex-1">
            <h5 className="text-[1.15em] leading-tight">{name}</h5>
            <div className="leading-[1.25em]">
              <div className="flex items-center gap-[0.25em] text-muted-foreground">
                <strong className="text-[0.875em] text-foreground">
                  Color:
                </strong>
                <span className="size-[1em] rounded-full bg-orange-500" />
                <span className="text-[0.875em]">Orange</span>
              </div>
              <div className="flex items-center gap-[0.25em] text-muted-foreground">
                <strong className="text-[0.875em] text-foreground">
                  Size:
                </strong>
                <span className="text-[0.875em]">XXL</span>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-[1em] py-[0.5em] text-center text-[1em]">
        ${price}
      </td>
      <td className="whitespace-nowrap px-[1em] py-[0.5em] text-center text-[1em]">
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          maxValue={availableStock}
          className="inline-flex"
        >
          <QuantityDecreaseTrigger />
          <QuantityInput />
          <QuantityIncreaseTrigger />
        </QuantitySelector>
      </td>
      <td className="whitespace-nowrap py-[0.5em] text-center text-[1em] font-semibold">
        ${(price * quantity).toFixed(2)}
      </td>
      <td className="whitespace-nowrap py-[0.5em] text-center text-[1em]">
        <Button
          className="text-[0.75em] [--accent:var(--destructive)]"
          variant="outline"
          shape="icon"
        >
          <X />
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
