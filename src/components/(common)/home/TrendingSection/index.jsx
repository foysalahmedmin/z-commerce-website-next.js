import { products } from "@/assets/data/products";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import TrendingProducts from "./TrendingProducts";

const TrendingSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div>
        <div className="container">
          <SectionTitle>
            <Subtitle>New Products</Subtitle>
            <Title>Trending Products</Title>
          </SectionTitle>
        </div>
        <div>
          <TrendingProducts products={products} />
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
