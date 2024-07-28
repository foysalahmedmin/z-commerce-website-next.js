import { instagram } from "@/assets/data/instagram";
import InstagramCard from "@/components/partials/cards/InstagramCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const InstagramSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionTitle>
          <Title>#Testimonials</Title>
        </SectionTitle>
      </div>
      <div>
        <div className="pb-6 md:px-8">
          <Carousel
            className="group/carousel w-full"
            opts={{ loop: true }}
            autoplay
          >
            <div className="container">
              <CarouselContent>
                {instagram?.slice(0, 12).map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/6">
                    <InstagramCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
