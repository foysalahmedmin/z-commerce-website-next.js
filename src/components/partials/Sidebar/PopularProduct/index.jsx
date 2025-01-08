import { products } from "@/assets/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";
import { partitionArrayIntoChunks } from "@/utils/partitionArrayIntoChunks";
import ProductCard from "../../Cards/ProductCard";

const PopularProduct = ({ className }) => {
  return (
    <div
      className={cn("overflow-y-auto rounded-md border py-6 pb-2", className)}
    >
      <div className="mb-4 px-4">
        <h5 className="short-underline pb-1 uppercase">Popular Products</h5>
      </div>
      <div className="px-2">
        <div>
          <Carousel
            className="group/carousel w-full"
            opts={{ slidesToScroll: "auto", loop: true }}
            autoplay
          >
            <CarouselContent>
              {partitionArrayIntoChunks(products?.slice(0, 12) || [], 4).map(
                (currentChunk, index) => (
                  <CarouselItem key={index} className="p-2">
                    <div className="grid grid-cols-1 gap-2">
                      {currentChunk.map((item, index) => (
                        <ProductCard
                          key={index}
                          item={item}
                          className="text-xs"
                          variant="sidebar"
                        />
                      ))}
                    </div>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
            <div className="absolute -top-4 right-0 inline-flex -translate-y-full items-center gap-2">
              <CarouselPreviousTrigger
                className="primary static bottom-0 top-0 inline-flex -translate-y-0 text-[0.75rem] transition-all duration-300"
                shape="icon"
                size="sm"
              />
              <CarouselNextTrigger
                className="primary static bottom-0 top-0 inline-flex -translate-y-0 text-[0.75rem] transition-all duration-300"
                shape="icon"
                size="sm"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
