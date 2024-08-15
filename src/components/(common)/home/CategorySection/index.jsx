import { categories } from "@/assets/data/categories";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import CategoryTabItem from "./CategoryTabItem";

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        {categories.length > 0 && (
          <Tabs defaultValue={categories[0]?.value}>
            <div className="mb-6 flex flex-wrap items-end gap-4 md:mb-8">
              <SectionTitle className="mb-0 md:mb-0">
                <Subtitle>Category</Subtitle>
                <Title>Browse By Category</Title>
              </SectionTitle>
              <TabsList className="relative mb-0 inline-flex gap-0 overflow-visible">
                {categories?.map((item, i) => (
                  <TabsTrigger
                    activeClassName="shadow-inner"
                    key={i}
                    value={item?.value}
                  >
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
