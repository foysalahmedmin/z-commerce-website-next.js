import { StarRatting } from "@/components/ui/StarRating";
import { cn, toFixedAndLocaleStringCurrency } from "@/lib/utils";
import ProductPurchase from "./ProductPurchase";
import ProductSizeList from "./ProductSizeList";
import ProductVariantList from "./ProductVariantList";

const ProductPs = ({ className, product, isVariant }) => {
  const {
    name,
    description,
    variants,
    sizes,
    price,
    originalPrice,
    inStock,
    rating,
    totalReviews,
  } = product;

  return (
    <>
      <div
        className={cn(
          "max-w-xl flex-1 space-y-6 self-stretch md:space-y-8 lg:w-4/12 xl:w-5/12",
          className,
        )}
      >
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
                <span className="font-semibold text-green-500">In Stock</span>
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
        {isVariant && <ProductVariantList variants={variants} />}
        {sizes && <ProductSizeList sizes={sizes} />}
        {(isVariant || sizes) && <hr />}
        <ProductPurchase product={product} />
      </div>
    </>
  );
};

export default ProductPs;
