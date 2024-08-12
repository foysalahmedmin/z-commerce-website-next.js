import { Button } from "@/components/ui/Button";
import Image from "next/image";
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
              <hr className="mx-auto my-4 max-w-40 border-2 border-foreground md:mx-0" />
            )}

            {description && <p className="mb-6">{description}</p>}
            {button?.label && button?.path && (
              <Link href={button?.path || "#"}>
                <Button>
                  Shop Now{" "}
                  {button?.icon && (
                    <button.icon strokeWidth={3} className="size-4" />
                  )}
                </Button>
              </Link>
            )}
          </div>
          <div className="relative hidden h-96 basis-1/2 md:block md:h-[28rem] xl:h-[30rem]">
            {image?.src && (
              <Image
                className="mx-auto h-full w-full object-contain object-center"
                height={500}
                width={500}
                src={image?.src}
                alt={image?.alt}
              />
            )}
            <div className="absolute inset-0 -z-10 mx-auto my-auto aspect-square h-[50vw] max-h-80 origin-center rounded-[100%] bg-primary-100 delay-1000 group-[.active-slide-node]/slide:animate-pop-circle md:h-[50vh] [&_p]:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
