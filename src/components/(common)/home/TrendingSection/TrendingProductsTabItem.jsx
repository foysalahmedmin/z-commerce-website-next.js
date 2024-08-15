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
      <div className="pb-6">
        <Carousel
          className="group/carousel w-full"
          opts={{ slidesToScroll: "auto", loop: true }}
          autoplay
        >
          <CarouselContent>
            {products.map((item, index) => (
              <CarouselItem
                key={index}
                className="p-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ProductCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-6 right-0 inline-flex -translate-y-full items-center gap-2 md:-top-8">
            <CarouselPreviousTrigger
              className="static bottom-0 top-0 inline-flex -translate-y-0 transition-all duration-300"
              size="icon-lg"
            />
            <CarouselNextTrigger
              className="static bottom-0 top-0 inline-flex -translate-y-0 transition-all duration-300"
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
