import ProductCard from "@/components/partials/cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";

const TrendingTabProducts = ({ tab, selectedTab, products }) => {
  return (
    <div
      className={cn("w-full", {
        hidden: tab?.value !== selectedTab?.value,
      })}
    >
      <Carousel
        className="group relative w-full"
        opts={{ loop: true }}
        autoplay
      >
        <CarouselContent>
          {products.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ProductCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="px-container absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 overflow-x-hidden overflow-y-visible md:block">
          <div className="relative h-12">
            <CarouselPrevious
              className="invisible left-0 -translate-x-full opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"
              size="icon-lg"
            />
            <CarouselNext
              className="invisible right-0 translate-x-full opacity-0 transition-all duration-300 group-hover:visible group-hover:right-0 group-hover:translate-x-0 group-hover:opacity-100"
              size="icon-lg"
            />
          </div>
        </div>
        <CarouselPagination />
      </Carousel>
    </div>
  );
};

export default TrendingTabProducts;
