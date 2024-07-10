import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import TrendingProductsTabItem from "./TrendingProductsTabItem";

const TrendingProducts = ({ products }) => {
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
    <div>
      {tabs.length > 0 && (
        <Tabs defaultValue={tabs[0]}>
          <TabsList className="container mb-6">
            {tabs?.map((tab, i) => (
              <TabsTrigger key={i} value={tab}>
                <span className="inline-block px-2 text-lg font-semibold capitalize">
                  {tab}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent>
            {tabs?.map((tab, i) => (
              <TrendingProductsTabItem
                key={i}
                value={tab}
                products={groupedProducts[tab]}
              />
            ))}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default TrendingProducts;
