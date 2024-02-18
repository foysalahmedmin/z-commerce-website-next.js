import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BannerSection = () => {
  return (
    <section>
      <div className="">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem className="relative">
              <div className="container flex h-full  min-h-[calc(100vh-6.5rem)] items-center">
                <div className="flex items-center justify-between gap-6 px-6">
                  <div className="max-w-md">
                    <div className="mb-4">
                      <h1 className="mb-4 text-2xl lg:text-4xl">
                        Houseplant <br /> The Perfect Choice.
                      </h1>
                      <hr className="max-w-40 border-2 border-color" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus euismod, nunc id lobortis facilisis, nunc augue
                      condimentum nunc, eu scelerisque nunc nibh id nunc.
                    </p>
                  </div>
                  <div className=""></div>
                </div>
              </div>
              <div className="banner-circle absolute right-[2.5%] top-[2.5%] -z-10 h-80 w-80 origin-top-right rounded-[60%_10%_30%_60%] bg-primary/50" />
            </CarouselItem>
            <CarouselItem>
              <div className="container flex h-full  min-h-[calc(100vh-6.5rem)] items-center">
                <div>
                  <h1>The Perfect Choice.</h1>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="container absolute left-0 right-0 top-1/2 mx-auto -translate-y-1/2">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
          <CarouselPagination />
        </Carousel>
      </div>
    </section>
  );
};

export default BannerSection;
