"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// carousel hooks //
export const useCarouselNavigation = (api) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const onSelect = useCallback((api) => {
    if (!api) {
      return;
    }
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

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
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect).on("select", onSelect);
  }, [api, onSelect]);

  return {
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    handleKeyDown,
  };
};

export const useCarouselPagination = (api) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollToIndex = useCallback(
    (index) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api],
  );

  const onInit = useCallback((api) => {
    setScrollSnaps(api?.scrollSnapList());
  }, []);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api?.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [api, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    scrollToIndex,
  };
};

export const useCarouselActiveSlide = (api) => {
  const [selectedNode, setSelectedNode] = useState(null);

  const onSelect = useCallback((api) => {
    if (!api) {
      return;
    }

    const slideNodes = api.slideNodes();
    const selectedScrollSnap = api.selectedScrollSnap();

    if (
      slideNodes &&
      selectedScrollSnap !== null &&
      slideNodes[selectedScrollSnap]
    ) {
      slideNodes.forEach((node) => {
        node.classList.remove("active-slide-node");
      });
      slideNodes[selectedScrollSnap].classList.add("active-slide-node");
      setSelectedNode(slideNodes[selectedScrollSnap]);
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect).on("select", onSelect);
  }, [api, onSelect]);

  return {
    selectedNode,
  };
};
// ------- //

// carousel context //
const CarouselContext = createContext(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
};

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
    const {
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      handleKeyDown,
    } = useCarouselNavigation(api);
    const { selectedIndex, scrollSnaps, scrollToIndex } =
      useCarouselPagination(api);
    const { selectedNode } = useCarouselActiveSlide(api);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          setApi,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          selectedNode,
          selectedIndex,
          scrollSnaps,
          scrollPrev,
          scrollNext,
          scrollToIndex,
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
// ------- //

// carousel components //
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

const CarouselPaginationButton = forwardRef(
  (
    {
      className,
      activeClassName,
      index,
      selectedIndex,
      variant = "none",
      size = "none",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(`h-2 w-6 rounded-full bg-muted`, className, {
          [cn("bg-primary", activeClassName)]: index === selectedIndex,
        })}
        variant={variant}
        size={size}
        {...props}
      />
    );
  },
);
CarouselPaginationButton.displayName = "CarouselPaginationButton";

const CarouselPagination = forwardRef(
  ({ className, carouselButton, ...props }, ref) => {
    const { selectedIndex, scrollSnaps, scrollToIndex } = useCarousel();

    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-4 mx-auto flex w-full items-center justify-center gap-x-1",
          className,
        )}
        {...props}
      >
        {scrollSnaps.map((_, index) => (
          <CarouselPaginationButton
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            onClick={() => scrollToIndex(index)}
            {...carouselButton}
          />
        ))}
      </div>
    );
  },
);
CarouselPagination.displayName = "CarouselPagination";
// ------- //

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
};
