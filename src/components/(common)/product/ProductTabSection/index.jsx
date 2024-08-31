import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

const ProductTabSection = () => {
  return (
    <section className="container">
      <div className="rounded-md border">
        <div className="px-8 py-12 md:px-16 md:py-16">
          <Tabs defaultValue="description">
            <TabsList className="mb-6 gap-2 border-b md:mb-8 md:justify-start">
              <TabsTrigger value="description" activeClassName="shadow-inner">
                <span className="inline-block px-4 py-1 text-xl font-semibold capitalize md:text-2xl">
                  Description
                </span>
              </TabsTrigger>
              <TabsTrigger value="reviews" activeClassName="shadow-inner">
                <span className="inline-block px-4 py-1 text-xl font-semibold capitalize md:text-2xl">
                  Reviews
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent>
              <TabsItem value="description">
                <ProductDescription />
              </TabsItem>
              <TabsItem value="reviews">
                <ProductReviews />
              </TabsItem>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductTabSection;
