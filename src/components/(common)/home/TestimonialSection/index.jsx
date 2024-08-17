import { instagram } from "@/assets/data/instagram";
import TestimonialCard from "@/components/partials/cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const TestimonialSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionTitle variant="center">
          <Subtitle> Testimonial </Subtitle>
          <Title>Testimonials</Title>
        </SectionTitle>
      </div>
      <div>
        <div className="pb-6 md:px-10">
          <Carousel
            className="group/carousel w-full"
            opts={{ loop: true }}
            autoplay
          >
            <div className="container">
              <CarouselContent>
                {instagram?.slice(0, 12).map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="group/slide slide relative -z-20 basis-1/2 self-stretch px-4 py-16 aria-[current=true]:z-10 xl:basis-1/3 xl:py-12"
                  >
                    <TestimonialCard item={item} />
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

export default TestimonialSection;
