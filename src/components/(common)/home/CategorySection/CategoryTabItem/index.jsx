import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { TabsItem } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

const CategoryTabItem = ({ value, categories }) => {
  return (
    <TabsItem value={value} className={cn("w-full")}>
      <div className="pb-6 md:pb-0">
        <Carousel
          className="group/carousel w-full"
          opts={{ slidesToScroll: "auto", loop: true }}
          autoplay
        >
          <CarouselContent>
            {categories?.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-1/4 p-2 md:basis-1/6 xl:basis-[12.5%] 2xl:basis-[10%]"
              >
                <div className="rounded-lg bg-muted/25 p-2 text-center capitalize shadow-inner">
                  <div className="flex h-32 items-center justify-center">
                    <span>{item?.icon}</span>
                  </div>
                  <strong className="text-nowrap">{item?.label}</strong>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-6 right-0 inline-flex -translate-y-full items-center gap-2 md:-top-8">
            <CarouselPreviousTrigger
              className="static bottom-0 top-0 inline-flex -translate-y-0 transition-all duration-300"
              size="icon-lg"
            />
            <CarouselNextTrigger
              className="static bottom-0 top-0 inline-flex -translate-y-0 transition-all duration-300"
              size="icon-lg"
            />
          </div>
          <CarouselPagination className="-bottom-6 md:hidden" />
        </Carousel>
      </div>
    </TabsItem>
  );
};

export default CategoryTabItem;
