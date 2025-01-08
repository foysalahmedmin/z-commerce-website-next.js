import { CartOutline } from "@/assets/images/icons/Cart";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { cn, toFixedAndLocaleStringCurrency } from "@/lib/utils";
import Image from "next/image";
import AddToCardButton from "../../Buttons/AddToCardButton";
import CartInfo from "../../CartInfo";
import TimeCounter from "../../TimeCounter";

const ProductOfferCard = ({ item, className }) => {
  const {
    id,
    name,
    image,
    description,
    rating,
    totalReviews,
    originalPrice,
    price,
    initialStock,
    availableStock,
    variants,
    tags,
  } = item;

  const isVariant = variants?.length > 0;
  const Comp = isVariant ? Tabs : id ? Link : "div";

  return (
    <div className={cn("group/card h-full text-[1rem]", className)}>
      <Comp
        href={id ? `/shope/${id}` : "#"}
        value={0}
        className="flex size-full flex-col"
      >
        <div className="relative w-full overflow-hidden rounded-md">
          <div className="size-full">
            {isVariant ? (
              <TabsContent className="size-full">
                {variants.map((variant, i) => (
                  <TabsItem
                    key={i}
                    value={i}
                    className={
                      "h-[18em] w-full overflow-hidden rounded-md border bg-muted/25 p-[0.5em] pb-[3em] shadow-inner dark:bg-background"
                    }
                  >
                    <Image
                      className={cn(
                        "size-full origin-center object-contain object-center transition-all duration-500 group-hover/card:scale-105 group-hover/card:brightness-95 group-hover/card:delay-200",
                      )}
                      height={320}
                      width={260}
                      src={variant?.image}
                      alt={name}
                    />
                  </TabsItem>
                ))}
              </TabsContent>
            ) : (
              <div
                className={
                  "h-[18em] w-full overflow-hidden rounded-md border bg-muted/25 p-[0.5em] pb-[3em] shadow-inner dark:bg-background"
                }
              >
                <Image
                  className={cn(
                    "size-full origin-center object-contain object-center transition-all duration-500 group-hover/card:scale-105 group-hover/card:brightness-95 group-hover/card:delay-200",
                  )}
                  height={320}
                  width={260}
                  src={image}
                  alt={name}
                />
              </div>
            )}
          </div>
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
          <div className="absolute bottom-[5em] left-0 right-0 w-full py-[1em]">
            <CartInfo />
          </div>
          <div className="absolute bottom-[3em] left-[1em] right-[1em] px-[1em] py-[0.5em] text-center">
            <TimeCounter endDate={"2025-01-01"} variant="card" />
          </div>
        </div>
        <div className="relative -mt-[3em] flex grow flex-col px-[0.5em]">
          <div className="flex grow flex-col space-y-[0.5em] rounded-md border bg-card px-[1em] py-[1em] shadow">
            <div className="grid grow gap-[0.5em]">
              <h3 className="text-[1em] leading-none text-title">{name}</h3>
              {description && (
                <p className="text-[0.75em] leading-none text-foreground/75">
                  {description}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-[0.5em]">
              <progress value={availableStock} max={initialStock} />
              <div className="ml-[2px] flex items-center gap-[0.25em] text-[0.75em] leading-none">
                <span className="font-semibold text-secondary">
                  {availableStock}
                </span>
                /<span className="text-primary">{initialStock}</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-[0.5em]">
              {isVariant && (
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
                        shape="icon"
                        size="sm"
                        asChild={true}
                      />
                    </TabsTrigger>
                  ))}
                </TabsList>
              )}
              <div className="relative -right-[1em] inline-flex min-w-[50%] shrink-0 items-end justify-end gap-[0.25em] rounded-s-full bg-muted/25 py-[0.25em] pl-[0.5em] pr-[1em] text-end shadow-inner">
                {originalPrice && (
                  <del className="text-[0.75em] leading-none text-muted-foreground">
                    $
                    {toFixedAndLocaleStringCurrency({
                      value: originalPrice,
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
            <div className="flex items-center justify-between gap-[0.5em]">
              {rating && (
                <div>
                  <StarRating
                    rating={rating}
                    className="text-[1em] leading-none"
                  />
                  <div className="ml-[0.15em] flex items-center gap-[0.25em] text-[0.75em] leading-none">
                    <span className="font-semibold text-secondary">
                      {rating}
                    </span>
                    /<span className="text-primary">{totalReviews}</span>
                  </div>
                </div>
              )}
              <AddToCardButton
                className="primary text-[0.875em] uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground"
                variant="outline"
              >
                ADD <CartOutline className="shrink-0 text-[1.25em]" />
              </AddToCardButton>
            </div>
          </div>
        </div>
      </Comp>
    </div>
  );
};

export default ProductOfferCard;
