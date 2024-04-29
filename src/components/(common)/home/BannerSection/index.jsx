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
      title: " Houseplant The Perfect Choice.",
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
      title: " Houseplant The Perfect Choice.",
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
    {
      title: " Houseplant The Perfect Choice.",
      subTitle: "Welcome to Z-Commerce",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus euismod, nunc id lobortis facilisis, nunc augue
      condimentum nunc, eu scelerisque nunc nibh id nunc.`,
      image: {
        src: "/images/home/home-banner-2.png",
        alt: "home-slider-image-2",
      },
      button: {
        label: "Shop Now",
        path: "/shop",
        icon: MoveUpRight,
      },
    },
    {
      title: " Houseplant The Perfect Choice.",
      subTitle: "Welcome to Z-Commerce",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus euismod, nunc id lobortis facilisis, nunc augue
      condimentum nunc, eu scelerisque nunc nibh id nunc.`,
      image: {
        src: "/images/home/home-banner-3.png",
        alt: "home-slider-image-3",
      },
      button: {
        label: "Shop Now",
        path: "/shop",
        icon: MoveUpRight,
      },
    },
    {
      title: " Houseplant The Perfect Choice.",
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
      title: " Houseplant The Perfect Choice.",
      subTitle: "Welcome to Z-Commerce",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus euismod, nunc id lobortis facilisis, nunc augue
      condimentum nunc, eu scelerisque nunc nibh id nunc.`,
      image: {
        src: "/images/home/home-banner-5.png",
        alt: "home-slider-image-5",
      },
      button: {
        label: "Shop Now",
        path: "/shop",
        icon: MoveUpRight,
      },
    },
  ];
  return (
    <section className="bg-muted">
      <Carousel className="w-full" opts={{ loop: true }} autoplay>
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <BannerSlide item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container absolute left-0 right-0 top-1/2 mx-auto hidden -translate-y-1/2 md:block">
          <CarouselPrevious className="left-6" />
          <CarouselNext className="right-6" />
        </div>
        <CarouselPagination />
      </Carousel>
    </section>
  );
};

export default BannerSection;
