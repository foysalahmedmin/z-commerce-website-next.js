import { Button } from "@/components/ui/Button";
import Parallax from "@/components/ui/Parallax";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const ParallaxBannerSection = () => {
  const { title, subTitle, description, image, button } = {
    title: "Man Fashion",
    subTitle: "Welcome to Z-Commerce",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus euismod, nunc id lobortis facilisis, nunc augue
    condimentum nunc, eu scelerisque nunc nibh id nunc.`,
    image: {
      src: "/images/home/home-parallax-banner.svg",
      alt: "home-slider-image-4",
    },
    button: {
      label: "Shop Now",
      path: "/shop",
      icon: MoveUpRight,
    },
  };
  return (
    <Parallax backgroundImageURL={image.src}>
      <section>
        <div className="container flex min-h-[calc(100vh-var(--header-height))] items-center justify-end py-12 md:py-16">
          <div className="light max-w-md text-center md:max-w-xl md:basis-1/2 md:text-right">
            {subTitle && (
              <h3 className="my-0 mb-4 inline-block border-r-4 border-primary px-2 text-base uppercase md:text-lg">
                {subTitle}
              </h3>
            )}
            {title && (
              <h1 className="text-3xl uppercase lg:text-5xl">{title}</h1>
            )}
            {title && (
              <hr className="mx-auto my-4 max-w-40 border-2 border-foreground md:ml-auto md:mr-0" />
            )}

            {description && <p className="mb-6">{description}</p>}
            {button?.label && button?.path && (
              <Link href={button?.path || "#"}>
                <Button asChild>
                  Shop Now{" "}
                  {button?.icon && (
                    <button.icon strokeWidth={3} className="size-4" />
                  )}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ParallaxBannerSection;
