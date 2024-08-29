import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
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
        src: "/images/home/home-banner-1.png",
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
        src: "/images/home/home-banner-2.png",
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
    <section className="h-full">
      <div className="dark size-full">
        <section className="size-full rounded-md border bg-dark text-dark-foreground">
          <Carousel
            className="group/carousel relative size-full"
            opts={{ loop: true }}
            autoplay
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem key={index} className="group/slide">
                  <BannerSlide item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPreviousTrigger
              className="invisible absolute left-8 hidden -translate-x-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
              size="icon-lg"
            />
            <CarouselNextTrigger
              className="invisible absolute right-8 hidden translate-x-full opacity-0 transition-all duration-300 group-hover/carousel:visible group-hover/carousel:translate-x-0 group-hover/carousel:opacity-100 md:inline-flex"
              size="icon-lg"
            />
            <CarouselPagination />
          </Carousel>
        </section>
      </div>
    </section>
  );
};

export default BannerSection;
