import { instagram } from "@/assets/data/instagram";
import InstagramCard from "@/components/partials/Cards/InstagramCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const InstagramSection = () => {
  return (
    <section className="pt-12 md:pt-16">
      <div className="container">
        <SectionTitle variant="center">
          <Title>#Instagram</Title>
        </SectionTitle>
      </div>
      <div>
        <Carousel
          className="group/carousel w-full"
          opts={{ loop: true }}
          autoplay
        >
          <CarouselContent>
            {instagram?.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 md:basis-1/6 xl:basis-[12.5%]"
              >
                <InstagramCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default InstagramSection;
