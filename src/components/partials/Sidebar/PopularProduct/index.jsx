import { products } from "@/assets/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";
import ProductCard from "../../Cards/ProductCard";

const PopularProduct = ({ className }) => {
  return (
    <div className={cn("overflow-y-auto rounded-md border py-6", className)}>
      <div className="mb-4 px-4">
        <h5 className="short-underline pb-1 uppercase">Popular Products</h5>
      </div>
      <div className="px-2">
        <div className="pb-6">
          <Carousel
            className="group/carousel w-full"
            opts={{ slidesToScroll: "auto", loop: true }}
            autoplay
          >
            <CarouselContent>
              {products.slice(0, 12).map((item, index) => (
                <CarouselItem key={index} className="p-2">
                  <ProductCard item={item} className="text-xs" variant="list" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-4 right-0 inline-flex -translate-y-full items-center gap-2">
              <CarouselPreviousTrigger
                className="static bottom-0 top-0 inline-flex -translate-y-0 text-[0.75rem] transition-all duration-300"
                size="icon"
              />
              <CarouselNextTrigger
                className="static bottom-0 top-0 inline-flex -translate-y-0 text-[0.75rem] transition-all duration-300"
                size="icon"
              />
            </div>
            <CarouselPagination className="-bottom-6" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
