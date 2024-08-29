import { productDetails } from "@/assets/data/product-details";
import ProductPsSection from "@/components/(common)/product/ProductPsSection";
import ProductTabSection from "@/components/(common)/product/ProductTabSection";

const ProductPage = () => {
  return (
    <main>
      <ProductPsSection product={productDetails} />
      <ProductTabSection />
    </main>
  );
};

export default ProductPage;
