import { Button } from "@/components/ui/Button";
import { StarRatting } from "@/components/ui/StarRating";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { cn, toFixedAndLocaleStringCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import AddToCardButton from "../../Buttons/AddToCardButton";
import CartInfo from "../../CartInfo";

const ProductCard = ({ item, className, variant = "grid", size }) => {
  const {
    name,
    description,
    rating,
    totalReview,
    previousPrice,
    price,
    variants,
    tags,
  } = item;
  return (
    <>
      {variant === "grid" && (
        <div
          className={cn(
            "group/card h-full overflow-hidden rounded-md border text-[1rem] shadow",
            className,
          )}
        >
          <Tabs defaultValue={0} className="flex h-full w-full flex-col">
            <TabsContent className="relative w-full">
              {variants.map((variant, i) => (
                <TabsItem
                  key={i}
                  value={i}
                  className={
                    "h-[15em] w-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
                  }
                >
                  <Image
                    className={cn(
                      "h-full w-full origin-center object-contain object-center transition-all duration-500 group-hover/card:scale-105 group-hover/card:brightness-95 group-hover/card:delay-200",
                    )}
                    height={320}
                    width={260}
                    src={variant?.image}
                    alt={name}
                  />
                </TabsItem>
              ))}
              {tags && tags.length > 0 && (
                <div className="absolute left-0 top-[1em] inline-flex flex-col gap-y-[0.25em]">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className={cn(
                        "inline-block rounded-e-full bg-primary py-[0.25em] pl-[1em] pr-[0.5em] text-[0.75em] capitalize leading-none text-primary-foreground shadow",
                        {
                          "bg-primary": i % 3 === 0,
                        },
                        {
                          "bg-secondary": (i - 1) % 3 === 0,
                        },
                        {
                          "bg-ternary": (i - 2) % 3 === 0,
                        },
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 w-full py-[1em]">
                <CartInfo />
              </div>
            </TabsContent>
            <div className="flex grow flex-col space-y-[0.5em] bg-card px-[1em] py-[1em]">
              <div className="grid grow gap-[0.5em]">
                <h3 className="text-[1em] leading-none text-title">{name}</h3>
                {description && (
                  <p className="text-[0.75em] leading-none text-foreground/75 ">
                    {description}
                  </p>
                )}
              </div>
              {rating && (
                <div className="flex items-center justify-between gap-[0.25em]">
                  <StarRatting
                    rating={rating}
                    className="text-[1em] leading-none"
                  />
                  <div className="flex items-center gap-[0.25em] text-[0.875em] leading-none">
                    <span className="font-semibold leading-none text-secondary">
                      {rating}
                    </span>
                    /
                    <span className="leading-none text-primary">
                      {totalReview}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between gap-[0.5em]">
                {variants?.length > 1 && (
                  <TabsList className="mb-0 flex-wrap justify-start gap-[0.5em] overflow-visible overflow-x-visible overflow-y-visible px-[0.25em]">
                    {variants.map((variant, i) => (
                      <TabsTrigger
                        className="flex size-[1em] overflow-hidden rounded-full after:hidden"
                        activeClassName="ring-[0.15em] ring-muted-foreground/50 ring-offset-[0.15em]"
                        key={i}
                        value={i}
                      >
                        <Button
                          style={{ background: variant?.color }}
                          className="size-full rounded-full"
                          variant="none"
                          size="icon-sm"
                          asChild={true}
                        />
                      </TabsTrigger>
                    ))}
                  </TabsList>
                )}
                <div className="relative -right-[1em] inline-flex min-w-[50%] shrink-0 items-end justify-end gap-[0.25em] rounded-s-full bg-muted/25 py-[0.25em] pl-[0.5em] pr-[1em] text-end shadow-inner">
                  {previousPrice && (
                    <del className="text-[0.75em] leading-none text-muted-foreground">
                      $
                      {toFixedAndLocaleStringCurrency({
                        value: previousPrice,
                      })}
                    </del>
                  )}
                  {price && (
                    <strong className="text-[1em] font-semibold leading-none text-title">
                      $
                      {toFixedAndLocaleStringCurrency({
                        value: price,
                      })}
                    </strong>
                  )}
                </div>
              </div>
              <div className="!mt-[1em]">
                <AddToCardButton
                  className="w-full rounded-md rounded-t-none text-[0.875em] uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground"
                  variant="outline"
                >
                  <span>Add to Cart</span>{" "}
                  <ShoppingCart className="size-[1.5em]" />
                </AddToCardButton>
              </div>
            </div>
          </Tabs>
        </div>
      )}
      {variant === "list" && (
        <div
          className={cn(
            "group/card h-full overflow-hidden rounded-md border text-[1rem] shadow",
            className,
          )}
        >
          <Tabs defaultValue={0} className="flex h-full w-full">
            <TabsContent className="relative w-full self-stretch">
              {variants.map((variant, i) => (
                <TabsItem
                  key={i}
                  value={i}
                  className={
                    "h-full min-h-[12em] w-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
                  }
                >
                  <Image
                    className={cn(
                      "h-full w-full origin-center object-contain object-center transition-all duration-500 group-hover/card:scale-105 group-hover/card:brightness-95 group-hover/card:delay-200",
                    )}
                    height={320}
                    width={260}
                    src={variant?.image}
                    alt={name}
                  />
                </TabsItem>
              ))}
              {tags && tags.length > 0 && (
                <div className="absolute left-0 top-[1em] inline-flex flex-col gap-y-[0.25em]">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className={cn(
                        "inline-block rounded-e-full bg-primary py-[0.25em] pl-[1em] pr-[0.5em] text-[0.75em] capitalize leading-none text-primary-foreground shadow",
                        {
                          "bg-primary": i % 3 === 0,
                        },
                        {
                          "bg-secondary": (i - 1) % 3 === 0,
                        },
                        {
                          "bg-ternary": (i - 2) % 3 === 0,
                        },
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 w-full py-[1.5em] text-[0.75em]">
                <CartInfo />
              </div>
            </TabsContent>
            <div className="flex min-w-[14em] grow flex-col space-y-[0.5em] self-stretch bg-card px-[1em] py-[1em]">
              <div className="grid grow gap-[0.5em]">
                <h3 className="text-[1em] leading-none text-title">{name}</h3>
                {description && (
                  <p className="text-[0.75em] leading-none text-foreground/75">
                    {description}
                  </p>
                )}
              </div>
              {rating && (
                <div className="flex items-center justify-between gap-[0.25em]">
                  <StarRatting
                    rating={rating}
                    className="text-[1em] leading-none"
                  />
                  <div className="flex items-center gap-[0.25em] text-[0.875em] leading-none">
                    <span className="font-semibold leading-none text-secondary">
                      {rating}
                    </span>
                    /
                    <span className="leading-none text-primary">
                      {totalReview}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between gap-[0.5em]">
                {variants?.length > 1 && (
                  <TabsList className="mb-0 flex-wrap justify-start gap-[0.5em] overflow-visible overflow-x-visible overflow-y-visible px-[0.25em]">
                    {variants.map((variant, i) => (
                      <TabsTrigger
                        className="flex size-[1em] overflow-hidden rounded-full after:hidden"
                        activeClassName="ring-[0.15em] ring-muted-foreground/50 ring-offset-[0.15em]"
                        key={i}
                        value={i}
                      >
                        <Button
                          style={{ background: variant?.color }}
                          className="size-full rounded-full"
                          variant="none"
                          size="icon-sm"
                          asChild={true}
                        />
                      </TabsTrigger>
                    ))}
                  </TabsList>
                )}
                <div className="relative -right-[1em] inline-flex min-w-[50%] shrink-0 items-end justify-end gap-[0.25em] rounded-s-full bg-muted/25 py-[0.25em] pl-[0.5em] pr-[1em] text-end shadow-inner">
                  {previousPrice && (
                    <del className="text-[0.75em] leading-none text-muted-foreground">
                      $
                      {toFixedAndLocaleStringCurrency({
                        value: previousPrice,
                      })}
                    </del>
                  )}
                  {price && (
                    <strong className="text-[1em] font-semibold leading-none text-title">
                      $
                      {toFixedAndLocaleStringCurrency({
                        value: price,
                      })}
                    </strong>
                  )}
                </div>
              </div>
              <div className="!mt-[1em]">
                <AddToCardButton
                  className="w-full rounded-md rounded-t-none text-[0.875em] uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground"
                  variant="outline"
                >
                  <span>Add to Cart</span>{" "}
                  <ShoppingCart className="size-[1.5em]" />
                </AddToCardButton>
              </div>
            </div>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default ProductCard;
