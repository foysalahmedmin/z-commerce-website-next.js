import { productDetails } from "@/assets/data/product-details";
import { sizes } from "@/assets/data/sizes";
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

const ProductPsSection = ({ product }) => {
  const {
    _id,
    name,
    description,
    image,
    variants,
    price,
    originalPrice,
    inStock,
    stockQuantity,
    rating,
    totalReviews,
    tags,
    category,
  } = productDetails;

  const isVariant = variants?.length > 0;
  const Comp = isVariant ? Tabs : "div";

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Comp defaultValue={0}>
          <div className="grid grid-cols-2 gap-y-6 md:gap-x-8 xl:gap-x-12">
            <div>
              <div className="h-[25em] w-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background">
                {isVariant ? (
                  <TabsContent className="size-full">
                    {variants.map((variant, i) => (
                      <TabsItem className="size-full" key={i} value={i}>
                        <Image
                          className={cn(
                            "size-full object-contain object-center transition-all duration-500",
                          )}
                          height={400}
                          width={500}
                          src={variant?.image}
                          alt={name}
                        />
                      </TabsItem>
                    ))}
                  </TabsContent>
                ) : (
                  <div>
                    <Image
                      className={cn(
                        "size-full object-contain object-center transition-all duration-500",
                      )}
                      height={400}
                      width={500}
                      src={image}
                      alt={name}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl md:text-5xl">{name}</h2>
                <div className="flex divide-x-2">
                  <div className="flex items-center gap-2 pr-4">
                    <StarRatting
                      rating={rating}
                      className="text-[1.5em] leading-none"
                    />
                    <span className="text-muted-foreground">
                      ({totalReviews} Reviews)
                    </span>
                  </div>
                  <div className="pl-4">
                    {inStock ? (
                      <span className="font-semibold text-green-500">
                        In Stock
                      </span>
                    ) : (
                      <span className="font-semibold text-red-500">
                        Not Available
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <strong className="text-xl font-semibold !leading-none text-title md:text-3xl">
                    $
                    {toFixedAndLocaleStringCurrency({
                      value: price,
                    })}
                  </strong>
                  {originalPrice && (
                    <del className="!leading-none text-muted-foreground line-through md:text-lg">
                      $
                      {toFixedAndLocaleStringCurrency({
                        value: originalPrice,
                      })}
                    </del>
                  )}
                </div>
              </div>
              <div>
                <p>{description}</p>
              </div>
              <hr />
              {isVariant && (
                <div className="flex items-center gap-4">
                  <span className="inline-block text-xl">Colors:</span>
                  <TabsList className="mb-0 flex-wrap justify-start gap-[0.5em] overflow-visible overflow-x-visible overflow-y-visible px-[0.25em]">
                    {variants.map((variant, i) => (
                      <TabsTrigger
                        className="flex size-[1.5rem] overflow-hidden rounded-full after:hidden"
                        activeClassName="ring-[0.15rem] ring-muted-foreground/50 ring-offset-[0.15rem]"
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
                </div>
              )}
              {sizes && (
                <div className="flex items-center gap-4">
                  <span className="inline-block text-xl leading-none">
                    Sizes:
                  </span>
                  <div className="flex items-center gap-4">
                    {sizes.map((size, i) => (
                      <label
                        className="flex cursor-pointer items-center gap-1 leading-none"
                        key={i}
                      >
                        <input
                          className="radio text-[1.5rem] leading-none"
                          type="radio"
                          name="size"
                          value={size}
                        />
                        <span className="inline-block font-semibold uppercase">
                          {size.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Comp>
      </div>
    </section>
  );
};

export default ProductPsSection;
