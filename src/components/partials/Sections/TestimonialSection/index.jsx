import { instagram } from "@/assets/data/instagram";
import TestimonialCard from "@/components/partials/Cards/TestimonialCard";
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
        <SectionTitle>
          <Subtitle> Testimonial </Subtitle>
          <Title>Testimonials</Title>
        </SectionTitle>
        <div>
          <div className="pb-6">
            <Carousel
              className="group/carousel w-full"
              opts={{ loop: true }}
              autoplay
            >
              <CarouselContent>
                {instagram?.slice(0, 12).map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="group/slide -px-4 relative basis-1/2 self-stretch py-0"
                  >
                    <TestimonialCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -top-6 right-0 inline-flex -translate-y-full items-center gap-2 md:-top-8">
                <CarouselPreviousTrigger
                  className="static bottom-0 top-0 inline-flex -translate-y-0 transition-all duration-300"
                  shape="icon"
                />
                <CarouselNextTrigger
                  className="static bottom-0 top-0 inline-flex -translate-y-0 transition-all duration-300"
                  shape="icon"
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

export default TestimonialSection;
