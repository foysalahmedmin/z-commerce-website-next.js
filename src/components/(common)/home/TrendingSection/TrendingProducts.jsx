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
          <TabsList className="container relative mb-6 gap-0 overflow-visible border-b">
            {tabs?.map((tab, i) => (
              <TabsTrigger
                className="relative -mb-[1px] border border-transparent caret-transparent"
                activeClassName="border-border border-b-background rounded-t-md bg-background after:hidden"
                key={i}
                value={tab}
              >
                <span className="inline-block px-4 text-base font-semibold capitalize md:text-lg">
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
