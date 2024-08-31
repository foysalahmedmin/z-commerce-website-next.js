import { productDetails } from "@/assets/data/product-details";
import ProductSection from "@/components/(common)/product/ProductSection";
import ProductTabSection from "@/components/(common)/product/ProductTabSection";
import RelatedProductSection from "@/components/(common)/product/RelatedProductSection";

const ProductPage = () => {
  return (
    <main>
      <ProductSection product={productDetails} />
      <ProductTabSection />
      <RelatedProductSection />
    </main>
  );
};

export default ProductPage;
