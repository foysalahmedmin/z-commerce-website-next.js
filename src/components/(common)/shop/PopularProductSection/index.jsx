import { products } from "@/assets/data/products";
import ProductCard from "@/components/partials/Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const PopularProductSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="w-full">
        <div className="flex flex-wrap items-end gap-4">
          <SectionTitle>
            <Subtitle>Best Deal</Subtitle>
            <Title>Popular Products</Title>
          </SectionTitle>
        </div>
        <div className="mb-6 md:mb-8">
          <div className="pb-6">
            <Carousel
              className="group/carousel w-full"
              opts={{ slidesToScroll: "auto", loop: true }}
              autoplay
            >
              <CarouselContent>
                {products.slice(0, 12).map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="p-2 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5"
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
        </div>
      </div>
    </section>
  );
};

export default PopularProductSection;