import { products } from "@/assets/data/products";
import ProductOfferCard from "@/components/partials/cards/ProductOfferCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const DealSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionTitle>
          <Subtitle>New Products</Subtitle>
          <Title>Deal of the day</Title>
        </SectionTitle>
      </div>
      <div>
        <div className="pb-6 md:px-8">
          <Carousel
            className="group/carousel w-full"
            opts={{ slidesToScroll: "auto", loop: true }}
            autoplay
          >
            <div className="container">
              <CarouselContent>
                {products.slice(0, 12).map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="p-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <ProductOfferCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div>
              <CarouselPreviousTrigger
                className="invisible absolute hidden -translate-x-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
                size="icon-lg"
              />
              <CarouselNextTrigger
                className="invisible absolute hidden translate-x-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
                size="icon-lg"
              />
            </div>
            <CarouselPagination className="-bottom-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
