import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { MoveUpRight } from "lucide-react";
import BannerSlide from "./BannerSlide";

const BannerSection = () => {
  const data = [
    {
      title: "Man Fashion",
      subTitle: "Welcome to Z-Commerce",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus euismod, nunc id lobortis facilisis, nunc augue
      condimentum nunc, eu scelerisque nunc nibh id nunc.`,
      image: {
        src: "/images/home/home-banner-4.png",
        alt: "home-slider-image-4",
      },
      button: {
        label: "Shop Now",
        path: "/shop",
        icon: MoveUpRight,
      },
    },
    {
      title: "Woman Fashion",
      subTitle: "Welcome to Z-Commerce",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus euismod, nunc id lobortis facilisis, nunc augue
      condimentum nunc, eu scelerisque nunc nibh id nunc.`,
      image: {
        src: "/images/home/home-banner-3.png",
        alt: "home-slider-image-1",
      },
      button: {
        label: "Shop Now",
        path: "/shop",
        icon: MoveUpRight,
      },
    },
  ];
  return (
    <section className="bg-background">
      <Carousel
        className="group relative w-full"
        opts={{ loop: true }}
        autoplay
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <BannerSlide item={item} />
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
    </section>
  );
};

export default BannerSection;
