import { Button } from "@/components/ui/Button";
import Link from "next/link";

const BannerSlide = ({ item }) => {
  const { title, subTitle, description, image, button } = item;
  return (
    <div className="relative z-30 md:mx-12">
      <div className="container flex h-full min-h-[36rem] w-full  items-center md:min-h-[calc(100vh-6.5rem)]">
        <div className="flex w-full items-center justify-center gap-6 py-12 md:justify-between">
          <div className="max-w-md text-center md:max-w-xl md:basis-1/2 md:text-left">
            {subTitle && (
              <h3 className="my-0 mb-4 inline-block border-l-4 border-primary px-2 text-base uppercase md:text-lg">
                {subTitle}
              </h3>
            )}
            {title && (
              <h1 className="text-3xl uppercase lg:text-5xl">{title}</h1>
            )}
            {title && (
              <hr className="border-color mx-auto my-4 max-w-40 border-2 md:mx-0" />
            )}

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
          <div className="relative hidden h-96 basis-1/2 md:block">
            {image?.src && (
              <img
                className="mx-auto h-full w-full object-contain object-center"
                src={image?.src}
                alt={image?.alt}
              />
            )}
            <div className="banner-circle absolute inset-0 -z-10 mx-auto my-auto aspect-square h-[90vw] origin-top-right rounded-full bg-primary/50 group-active:bg-red-300 md:h-[70vh] [&_p]:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
