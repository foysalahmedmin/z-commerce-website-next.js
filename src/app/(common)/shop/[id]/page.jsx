import { productDetails } from "@/assets/data/product-details";
import ProductSection from "@/components/(common)/product/ProductSection";
import ProductTabSection from "@/components/(common)/product/ProductTabSection";

const ProductPage = () => {
  return (
    <main>
      <ProductSection product={productDetails} />
      <ProductTabSection />
    </main>
  );
};

export default ProductPage;
