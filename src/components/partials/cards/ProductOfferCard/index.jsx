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
import Image from "next/image";
import CartButton from "./CartButton";
import CartInfo from "./CartInfo";
import TimeCounter from "./TimeCounter";

const ProductOfferCard = ({ item }) => {
  const {
    name,
    description,
    rating,
    totalReview,
    previousPrice,
    price,
    available,
    stock = 50,
    variants,
    tags,
  } = item;
  return (
    <div className="group/card h-full">
      <Tabs defaultValue={0} className="flex h-full w-full flex-col">
        <TabsContent className="relative w-full overflow-hidden rounded-md">
          {variants.map((variant, i) => (
            <TabsItem
              key={i}
              value={i}
              className={
                "h-72 w-full overflow-hidden rounded-md border bg-muted/25 pb-12 shadow-inner dark:bg-background"
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
            <div className="absolute left-0 top-4 inline-flex flex-col gap-y-1">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-block rounded-e-full bg-primary py-1 pl-4 pr-2 text-[10px] capitalize leading-none text-primary-foreground shadow",
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
          <CartInfo />
          <TimeCounter endDate={"2025-01-01"} />
        </TabsContent>
        <div className="relative -mt-12 flex grow flex-col px-2">
          <div className="flex grow flex-col space-y-2 rounded-md border bg-card px-4 py-4 shadow">
            <div className="grid grow">
              <h3 className="text-base text-title">{name}</h3>
              {description && (
                <p className="text-xs text-title/75">{description}</p>
              )}
            </div>
            <div className="flex items-center justify-between gap-2">
              <progress value={available} max={stock} />
              <div className="ml-[2px] flex items-center gap-1 text-xs leading-none">
                <span className="font-semibold text-secondary">
                  {available}
                </span>
                /<span className="text-primary">{stock}</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <TabsList className="mb-0 flex-wrap justify-start gap-2 overflow-visible overflow-x-visible overflow-y-visible">
                {variants.map((variant, i) => (
                  <TabsTrigger
                    className="flex size-4 overflow-hidden rounded-full after:hidden"
                    activeClassName="ring-1 ring-offset-2"
                    key={i}
                    value={i}
                  >
                    <Button
                      style={{ background: variant?.color }}
                      className="size-4 rounded-full"
                      variant="none"
                      size="icon-sm"
                      asChild={true}
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="relative -right-4 inline-flex min-w-[50%] shrink-0 items-end justify-end gap-[2px] rounded-s-full bg-muted/25 py-1 pl-2 pr-4 text-end shadow-inner">
                {previousPrice && (
                  <del className="text-[10px] leading-none text-muted-foreground">
                    $
                    {toFixedAndLocaleStringCurrency({
                      value: previousPrice,
                    })}
                  </del>
                )}
                {price && (
                  <strong className="text-sm font-semibold leading-none text-title">
                    $
                    {toFixedAndLocaleStringCurrency({
                      value: price,
                    })}
                  </strong>
                )}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              {rating && (
                <div>
                  <StarRatting rating={rating} className="text leading-none" />
                  <div className="ml-[2px] flex items-center gap-1 text-xs leading-none">
                    <span className="font-semibold text-secondary">
                      {rating}
                    </span>
                    /<span className="text-primary">{totalReview}</span>
                  </div>
                </div>
              )}
              <CartButton />
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductOfferCard;
