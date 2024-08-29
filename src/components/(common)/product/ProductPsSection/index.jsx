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
    previousPrice,
    isStock,
    available,
    rating,
    totalReview,
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
            <div className="h-80 w-full overflow-hidden border-b bg-muted/25 p-[1em] shadow-inner dark:bg-background">
              {isVariant ? (
                <TabsContent>
                  {variants.map((variant, i) => (
                    <TabsItem className="size-full" key={i} value={i}>
                      <Image
                        className={cn(
                          "h-80 w-full object-contain object-center transition-all duration-500",
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
                <div></div>
              )}
            </div>
            <div></div>
          </div>
        </Comp>
      </div>
    </section>
  );
};

export default ProductPsSection;
