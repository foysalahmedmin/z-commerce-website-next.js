import ProductCard from "@/components/partials/cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { TabsItem } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

const TrendingProductsTabItem = ({ value, products }) => {
  return (
    <TabsItem value={value} className={cn("w-full")}>
      <div className="pb-6 md:px-8">
        <Carousel
          className="group w-full"
          opts={{ slidesToScroll: "auto", loop: true }}
          autoplay
        >
          <div className="container">
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="p-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <ProductCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div>
            <CarouselPreviousTrigger
              className="invisible absolute hidden -translate-x-full opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 md:inline-flex"
              size="icon-lg"
            />
            <CarouselNextTrigger
              className="invisible absolute hidden translate-x-full opacity-0 transition-all duration-300 group-hover:visible group-hover:right-0 group-hover:translate-x-0 group-hover:opacity-100 md:inline-flex"
              size="icon-lg"
            />
          </div>
          <CarouselPagination className="-bottom-6" />
        </Carousel>
      </div>
    </TabsItem>
  );
};

export default TrendingProductsTabItem;
