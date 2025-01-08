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
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCardButton from "../../Buttons/AddToCardButton";
import CartInfo from "../../CartInfo";

const ProductCard = ({ item, className, variant = "grid" }) => {
  const {
    id,
    name,
    image,
    description,
    rating,
    totalReviews,
    originalPrice,
    price,
    variants,
    tags,
  } = item;
  const isVariant = variants?.length > 0;
  const Comp = isVariant ? Tabs : id ? Link : "div";
  return (
    <>
      {variant === "grid" && (
        <div
          className={cn(
            "group/card h-full overflow-hidden rounded-md border text-[1rem] shadow",
            className,
          )}
        >
          <Comp
            href={id ? `/shope/${id}` : "#"}
            value={0}
            className="flex size-full flex-col"
          >
            <div className="relative w-full">
              <div className="size-full">
                {isVariant ? (
                  <TabsContent className="size-full">
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
                      "h-[15em] w-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
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
              <div className="absolute bottom-0 left-0 right-0 w-full py-[1em]">
                <CartInfo />
              </div>
            </div>
            <div className="flex grow flex-col space-y-[0.5em] bg-card px-[1em] py-[1em]">
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
                  <StarRating
                    rating={rating}
                    className="text-[1em] leading-none"
                  />
                  <div className="flex items-center gap-[0.25em] text-[0.875em] leading-none">
                    <span className="font-semibold leading-none text-secondary">
                      {rating}
                    </span>
                    /
                    <span className="leading-none text-primary">
                      {totalReviews}
                    </span>
                  </div>
                </div>
              )}
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
                  className="primary w-full rounded-md rounded-t-none text-[0.875em] uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground"
                  variant="outline"
                >
                  <span>Add to Cart</span>{" "}
                  <ShoppingCart className="size-[1.5em]" />
                </AddToCardButton>
              </div>
            </div>
          </Comp>
        </div>
      )}
      {variant === "list" && (
        <div
          className={cn(
            "group/card h-full overflow-hidden rounded-md border text-[1rem] shadow",
            className,
          )}
        >
          <Comp value={0} className="flex size-full">
            <div className="relative min-h-[12em] w-full min-w-[8em] flex-1 self-stretch">
              <div className="size-full">
                {isVariant ? (
                  <TabsContent className="size-full">
                    {variants.map((variant, i) => (
                      <TabsItem
                        key={i}
                        value={i}
                        className={
                          "size-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
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
                      "size-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
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
              <div className="absolute bottom-0 left-0 right-0 w-full py-[1em]">
                <CartInfo />
              </div>
            </div>
            <div className="flex min-w-[13.5em] flex-1 flex-shrink-0 grow flex-col space-y-[0.5em] self-stretch bg-card px-[1em] py-[1em]">
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
                  <StarRating
                    rating={rating}
                    className="text-[1em] leading-none"
                  />
                  <div className="flex items-center gap-[0.25em] text-[0.875em] leading-none">
                    <span className="font-semibold leading-none text-secondary">
                      {rating}
                    </span>
                    /
                    <span className="leading-none text-primary">
                      {totalReviews}
                    </span>
                  </div>
                </div>
              )}
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
                  className="primary w-full rounded-md rounded-t-none text-[0.875em] uppercase hover:bg-primary/75 group-hover/card:bg-primary group-hover/card:text-primary-foreground"
                  variant="outline"
                >
                  <span>Add to Cart</span>{" "}
                  <ShoppingCart className="size-[1.5em]" />
                </AddToCardButton>
              </div>
            </div>
          </Comp>
        </div>
      )}
      {variant === "sidebar" && (
        <div
          className={cn(
            "group/card h-full overflow-hidden rounded-md border text-[1rem] shadow",
            className,
          )}
        >
          <Comp value={0} className="flex size-full">
            <div className="relative min-h-[10em] w-full min-w-[8em] flex-1 self-stretch">
              <div className="size-full">
                {isVariant ? (
                  <TabsContent className="size-full">
                    {variants.map((variant, i) => (
                      <TabsItem
                        key={i}
                        value={i}
                        className={
                          "size-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
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
                      "size-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background"
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
              <div className="absolute bottom-0 left-0 right-0 w-full py-[1.5em] text-[0.75em]">
                <CartInfo />
              </div>
            </div>
            <div className="flex w-[13.5em] flex-1 flex-shrink-0 grow flex-col space-y-[0.5em] self-stretch bg-card px-[1em] py-[1em]">
              <div className="grid grow gap-[0.5em]">
                <h3 className="text-[1em] leading-none text-title">{name}</h3>
                {description && (
                  <p className="text-[0.75em] leading-none text-foreground/75">
                    {description}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-[0.5em]">
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
                <div className="relative inline-flex min-w-[50%] shrink-0 items-end justify-end gap-[0.25em] rounded-full bg-muted/25 px-[0.5em] py-[0.25em] text-end shadow-inner">
                  {originalPrice && (
                    <del className="text-[0.75em] leading-none text-muted-foreground">
                      $
                      {toFixedAndLocaleStringCurrency({
                        value: originalPrice,
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
              <div className="flex items-center justify-between gap-[0.5em]">
                {rating && (
                  <div>
                    <StarRating
                      rating={rating}
                      className="gap-[0.15em] text-[1em] leading-none"
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
          </Comp>
        </div>
      )}
    </>
  );
};

export default ProductCard;
