import { Button } from "@/components/ui/Button";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap items-end gap-4">
          <SectionTitle>
            <Subtitle>Featured</Subtitle>
            <Title>New Arrival</Title>
          </SectionTitle>
        </div>
        <div className="grid h-[32rem] grid-cols-2 grid-rows-4 gap-4 md:h-[16rem] md:grid-cols-4 md:grid-rows-2 lg:h-[20rem] xl:h-[24rem] 2xl:h-[28rem]">
          <div className="relative col-span-2 row-span-2 rounded-md bg-dark px-[4%] pt-[8%]">
            <Image
              className="h-full w-full object-contain object-bottom"
              src="/images/home/feature-1.png"
              alt="hero"
              height={500}
              width={500}
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full max-w-60 p-4">
                <div className="mb-1 md:mb-2">
                  <h4 className="mb-1 text-base text-neutral-50 md:mb-2 md:text-lg">
                    PlayStation 5
                  </h4>
                  <p className="text-xs font-light text-neutral-300">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                </div>
                <div>
                  <Button
                    variant="none"
                    size="none"
                    asChild
                    className="rounded-none border-current text-xs text-neutral-50 underline"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-2 rounded-md bg-dark">
            <Image
              className="h-full w-full object-contain object-right-bottom"
              src="/images/home/feature-2.png"
              alt="hero"
              height={300}
              width={500}
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full max-w-60 p-4">
                <div className="mb-1 md:mb-2">
                  <h4 className="mb-1 text-base text-neutral-50 md:mb-2 md:text-lg">
                    Women’s Collections
                  </h4>
                  <p className="text-xs font-light text-neutral-300">
                    Featured woman collections that give you another vibe.
                  </p>
                </div>
                <div>
                  <Button
                    variant="none"
                    size="none"
                    asChild
                    className="rounded-none border-current text-xs text-neutral-50 underline"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-md bg-dark p-[8%]">
            <Image
              className="h-full w-full object-contain object-center"
              src="/images/home/feature-3.png"
              alt="hero"
              height={300}
              width={300}
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full max-w-60 p-4">
                <div className="mb-1 md:mb-2">
                  <h4 className="mb-1 text-base text-neutral-50 md:mb-2 md:text-lg">
                    Speakers
                  </h4>
                  <p className="text-xs font-light text-neutral-300">
                    Amazon wireless speakers
                  </p>
                </div>
                <div>
                  <Button
                    variant="none"
                    size="none"
                    asChild
                    className="rounded-none border-current text-xs text-neutral-50 underline"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-md bg-dark p-[8%]">
            <Image
              className="h-full w-full object-contain object-center"
              src="/images/home/feature-4.png"
              alt="hero"
              height={300}
              width={300}
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full max-w-60 p-4">
                <div className="mb-1 md:mb-2">
                  <h4 className="mb-1 text-base text-neutral-50 md:mb-2 md:text-lg">
                    Perfume
                  </h4>
                  <p className="text-xs font-light text-neutral-300">
                    GUCCI INTENSE OUD EDP
                  </p>
                </div>
                <div>
                  <Button
                    variant="none"
                    size="none"
                    asChild
                    className="rounded-none border-current text-xs text-neutral-50 underline"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
