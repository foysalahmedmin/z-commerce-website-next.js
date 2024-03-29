import { Button } from "@/components/ui/button";
import Link from "next/link";

const BannerSlide = ({ item }) => {
  const { title, subTitle, description, image, button } = item;
  return (
    <div className="relative">
      <div className="container flex h-full min-h-[36rem] w-full  items-center md:min-h-[calc(100vh-6.5rem)]">
        <div className="flex w-full items-center justify-between gap-6 py-12  md:px-12">
          <div className="max-w-sm md:max-w-xl md:basis-1/2">
            {subTitle && (
              <h3 className="my-0 mb-4 border-l-4 border-primary px-2 text-base uppercase md:text-lg">
                {subTitle}
              </h3>
            )}
            {title && (
              <h1 className="max-w-sm text-3xl lg:text-5xl">{title}</h1>
            )}
            {title && <hr className="my-4 max-w-40 border-2 border-color" />}

            {description && <p className="mb-6">{description}</p>}
            {button?.label &&
              (button?.path ? (
                <Link href={button?.path}>
                  <Button>
                    Shop Now{" "}
                    {button?.icon && (
                      <button.icon strokeWidth={3} className="size-4" />
                    )}
                  </Button>
                </Link>
              ) : (
                <Button>
                  Shop Now{" "}
                  {button?.icon && (
                    <button.icon strokeWidth={3} className="size-4" />
                  )}
                </Button>
              ))}
          </div>
          <div className="hidden h-96 basis-1/2 md:block">
            {image?.src && (
              <img
                className="mx-auto h-full w-full object-contain object-center"
                src={image?.src}
                alt={image?.alt}
              />
            )}
          </div>
        </div>
      </div>
      <div className="banner-circle absolute right-[2.5%] top-[2.5%] -z-10 aspect-square h-[90vw] origin-top-right rounded-[60%_10%_30%_60%] bg-primary/50 md:h-[70vh]" />
    </div>
  );
};

export default BannerSlide;
