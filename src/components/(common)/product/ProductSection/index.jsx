import { sizes } from "@/assets/data/sizes";
import { Tabs } from "@/components/ui/Tabs";
import ProductPs from "./ProductPs";
import ProductThumbnail from "./ProductThumbnail";

const ProductSection = ({ product }) => {
  const isVariant = product?.variants?.length > 0;
  const Comp = isVariant ? Tabs : "div";

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Comp value={0}>
          <div className="flex flex-col items-center gap-y-6 md:gap-x-8 lg:flex-row xl:gap-x-12">
            <ProductThumbnail product={product} isVariant={isVariant} />
            <ProductPs product={{ ...product, sizes }} isVariant={isVariant} />
          </div>
        </Comp>
      </div>
    </section>
  );
};

export default ProductSection;
