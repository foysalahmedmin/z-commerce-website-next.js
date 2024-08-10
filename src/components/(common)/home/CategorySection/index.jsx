import { categories } from "@/assets/data/categories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import CategoryTabItem from "./CategoryTabItem";

const CategorySection = () => {
  return (
    <section className="bg-card py-12 md:py-16">
      <div className="container">
        {categories.length > 0 && (
          <Tabs defaultValue={categories[0]?.value}>
            <div className="container mb-6 flex flex-wrap items-center gap-4">
              <h3 className="shrink-0 font-bold uppercase">
                Featured Categories
              </h3>
              <TabsList className="relative mb-0 inline-flex gap-0 overflow-visible">
                {categories?.map((item, i) => (
                  <TabsTrigger key={i} value={item?.value}>
                    <span className="inline-block px-2 text-sm font-semibold capitalize md:text-base">
                      {item?.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent>
              {categories?.map((item, i) => (
                <CategoryTabItem
                  key={i}
                  value={item?.value}
                  categories={item?.categories}
                />
              ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
