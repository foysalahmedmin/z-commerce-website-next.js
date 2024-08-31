import { TabsContent, TabsItem } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductVariant from "./ProductVariant";

const ProductThumbnail = ({ className, product, isVariant }) => {
  const { name, image, variants } = product;

  return (
    <>
      <div
        className={cn(
          "grid h-[32rem] w-full flex-1 grid-cols-1 grid-rows-1",
          className,
        )}
      >
        {isVariant ? (
          <TabsContent className="size-fill">
            {variants.map((variant, i) => (
              <TabsItem className="size-full" key={i} value={i}>
                <ProductVariant variant={variant} name={name} />
              </TabsItem>
            ))}
          </TabsContent>
        ) : (
          <div className="size-full rounded-md border bg-muted/25 p-[1em] shadow-inner dark:bg-background">
            <Image
              className="size-full object-contain object-center"
              height={400}
              width={500}
              src={image}
              alt={name}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductThumbnail;
