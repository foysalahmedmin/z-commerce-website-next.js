import { products } from "@/assets/data/products";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import TrendingProductTabItem from "./TrendingProductTabItem";

const TrendingProductSection = () => {
  const groupedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const tabs = Object.keys(groupedProducts) || [];
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-6 md:mb-8">
          {tabs.length > 0 && (
            <Tabs value={tabs[0]}>
              <div className="mb-6 flex flex-wrap items-end gap-4 md:mb-8">
                <SectionTitle className="mb-0 md:mb-0">
                  <Subtitle>New Products</Subtitle>
                  <Title>Trending Products</Title>
                </SectionTitle>
                <TabsList className="relative mb-0 inline-flex gap-0 overflow-visible">
                  {tabs?.map((item, i) => (
                    <TabsTrigger
                      activeClassName="shadow-inner"
                      key={i}
                      value={item}
                    >
                      <span className="inline-block px-2 text-sm font-semibold capitalize md:text-base">
                        {item}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <TabsContent>
                {tabs?.map((item, i) => (
                  <TrendingProductTabItem
                    key={i}
                    value={item}
                    products={groupedProducts[item]}
                  />
                ))}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingProductSection;
