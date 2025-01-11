"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import emblaCarouselClassNames from "embla-carousel-class-names";
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

// ----- Custom Hooks -----

// Navigation hook for carousel (prev/next buttons)
export const useCarouselNavigation = (api) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const onSelect = useCallback(() => {
    if (api) {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }
  }, [api]);

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
    if (api) {
      onSelect();
      api.on("reInit", onSelect).on("select", onSelect);
    }
  }, [api, onSelect]);

  return {
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    handleKeyDown,
  };
};

// Pagination hook for carousel (pagination, index tracking)
export const useCarouselPagination = (api) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollToIndex = useCallback(
    (index) => {
      if (api) api.scrollTo(index);
    },
    [api],
  );

  const onInit = useCallback(() => {
    if (api) setScrollSnaps(api.scrollSnapList());
  }, [api]);

  const onSelect = useCallback(() => {
    if (api) setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (api) {
      onInit();
      onSelect();
      api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    }
  }, [api, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, scrollToIndex };
};

// Hover hook for autoplay control
export const useCarouselAutoplayHover = (api) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (api && api.plugins && api.plugins().autoplay) {
      api.plugins().autoplay.stop();
    } else {
      console.warn("Autoplay plugin is not available.");
    }
  }, [api]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (api && api.plugins && api.plugins().autoplay) {
      api.plugins().autoplay.play();
    } else {
      console.warn("Autoplay plugin is not available.");
    }
  }, [api]);

  useEffect(() => {
    if (api && api.containerNode && api.plugins && api.plugins().autoplay) {
      const node = api.containerNode();

      if (node) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          node.removeEventListener("mouseenter", handleMouseEnter);
          node.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    } else {
      console.warn("API or Autoplay plugin is not available.");
    }
  }, [api, handleMouseEnter, handleMouseLeave]);

  return { isHovered };
};

// ----- Carousel Context -----

// Context for sharing carousel-related data
export const CarouselContext = createContext(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

// ----- Carousel Component -----

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
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      [
        emblaCarouselClassNames(),
        ...(autoplay ? [emblaCarouselAutoplay({ delay: 5000 })] : []),
        ...plugins,
      ],
    );

    const navigation = useCarouselNavigation(api);
    const pagination = useCarouselPagination(api);
    const hover = useCarouselAutoplayHover(api);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          setApi,
          opts,
          orientation,
          ...navigation,
          ...pagination,
          ...hover,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={navigation.handleKeyDown}
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

// ----- Carousel Components -----

const CarouselContent = forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex h-full",
          { "flex-col": orientation === "vertical" },
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full self-stretch",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPreviousTrigger = forwardRef(
  (
    {
      className,
      shape = "icon",
      variant = "outline",
      children = <ArrowLeft className="size-4" />,
      ...props
    },
    ref,
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (
      <Button
        ref={ref}
        shape={shape}
        variant={variant}
        className={cn(
          "absolute rounded-full text-[1em]",
          orientation === "horizontal"
            ? "left-0 top-1/2 -translate-y-1/2"
            : "left-1/2 top-0 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
CarouselPreviousTrigger.displayName = "CarouselPreviousTrigger";

const CarouselNextTrigger = forwardRef(
  (
    {
      className,
      shape = "icon",
      variant = "outline",
      children = <ArrowRight className="size-4" />,
      ...props
    },
    ref,
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        shape={shape}
        variant={variant}
        className={cn(
          "absolute rounded-full text-[1em]",
          orientation === "horizontal"
            ? "right-0 top-1/2 -translate-y-1/2"
            : "bottom-0 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
CarouselNextTrigger.displayName = "CarouselNextTrigger";

const CarouselPaginationTrigger = forwardRef(
  (
    {
      className,
      activeClassName,
      isActive,
      variant = "none",
      size = "none",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          `h-1.5 w-full max-w-6 flex-1 rounded-full bg-muted px-0`,
          className,
          { [cn("bg-primary", activeClassName)]: isActive },
        )}
        variant={variant}
        size={size}
        {...props}
      />
    );
  },
);
CarouselPaginationTrigger.displayName = "CarouselPaginationTrigger";

const CarouselPagination = forwardRef(
  ({ className, buttonProps, ...props }, ref) => {
    const { selectedIndex, scrollSnaps, scrollToIndex } = useCarousel();
    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-4 left-0 right-0 mx-auto flex w-full items-center justify-center gap-1",
          className,
        )}
        {...props}
      >
        {scrollSnaps.map((_, index) => (
          <CarouselPaginationTrigger
            key={index}
            isActive={index === selectedIndex}
            onClick={() => scrollToIndex(index)}
            {...buttonProps}
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
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPaginationTrigger,
  CarouselPreviousTrigger,
};
