import { products } from "@/assets/data/products";
import { SectionTitle } from "@/components/ui/SectionTitle";
import TrendingProducts from "./TrendingProducts";

const TrendingSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div>
          <SectionTitle
            title={{ children: "Trending Products" }}
            subtitle={{ children: "New Products" }}
          />
        </div>
        <div>
          <TrendingProducts products={products} />
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
