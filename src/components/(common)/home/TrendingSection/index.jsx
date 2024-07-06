import { SectionTitle } from "@/components/ui/SectionTitle";

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
      </div>
    </section>
  );
};

export default TrendingSection;
