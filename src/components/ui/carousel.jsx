"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = forwardRef(
  (
    {
      orientation = "horizontal",
      autoplay,
      opts,
      setApi,
      plugins = [],
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const autoplayPlugin = autoplay ? [emblaCarouselAutoplay()] : [];
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      [...autoplayPlugin, ...plugins],
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedNode, setSelectedNode] = useState(null);

    const onSelect = useCallback((api) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const scrollInto = useCallback(
      (index) => {
        api?.scrollTo(index);
      },
      [api],
    );

    const handleKeyDown = useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    useEffect(() => {
      const onSelect = () => {
        if (api?.slideNodes && api?.selectedScrollSnap) {
          const slideNodes = api.slideNodes();
          const selectedScrollSnap = api.selectedScrollSnap();

          if (slideNodes[selectedScrollSnap]) {
            slideNodes.forEach((node) => {
              node.classList.remove("active-slide-node");
            });
            slideNodes[selectedScrollSnap].classList.add("active-slide-node");
            setSelectedNode(slideNodes[selectedScrollSnap]);
          }
        }
      };

      onSelect();
      api?.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          snapCount: api?.scrollSnapList()?.length || 0,
          selectedNode,
          scrollPrev,
          scrollNext,
          scrollInto,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

const CarouselPagination = forwardRef(
  (
    { className, rootClassName, variant = "none", size = "none", ...props },
    ref,
  ) => {
    const { api, snapCount, scrollInto } = useCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePaginationClick = (index) => {
      scrollInto(index);
      setSelectedIndex(index);
    };

    useEffect(() => {
      const onSelect = () => {
        setSelectedIndex(api?.selectedScrollSnap());
      };

      api?.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api]);

    if (!api) return null;

    const slides = Array.from(Array(snapCount).keys());

    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-4 mx-auto flex w-full items-center justify-center",
          rootClassName,
        )}
      >
        {slides.map((index) => (
          <Button
            variant={variant}
            size={size}
            key={index}
            className={cn(
              `mx-1 h-2 w-8 rounded-full`,
              index === selectedIndex
                ? "bg-primary"
                : "bg-muted hover:bg-muted",
              className,
            )}
            onClick={() => handlePaginationClick(index)}
            {...props}
          />
        ))}
      </div>
    );
  },
);
CarouselPagination.displayName = "CarouselPagination";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
};
