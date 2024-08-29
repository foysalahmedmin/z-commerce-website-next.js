import { productDetails } from "@/assets/data/product-details";
import { Tabs, TabsContent, TabsItem } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
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
          <div className="grid grid-cols-2">
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
            <div>
              <div>
                <h3>{name}</h3>
              </div>
            </div>
          </div>
        </Comp>
      </div>
    </section>
  );
};

export default ProductPsSection;
