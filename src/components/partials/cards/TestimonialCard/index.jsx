import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TestimonialCard = ({ className, item }) => {
  const { image, name } = item;
  return (
    <div
      className={cn(
        "card relative -z-20 h-full scale-100 py-6 opacity-50 transition-all duration-500 group-[.active-slide-node]/slide:z-10 group-[.active-slide-node]/slide:scale-150 group-[.active-slide-node]/slide:opacity-100",
        className,
      )}
    >
      <div className="w-full rounded-lg bg-card group-[.active-slide-node]/slide:shadow-lg">
        <div className="relative -mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full rounded-bl-none border-2 border-l-0 border-t-0 border-background bg-card px-4 shadow-inner">
          <div className="relative -ml-4 mb-0 inline-flex rounded-r-full bg-muted/25 p-[2px] pl-4 shadow-inner">
            <Image
              className="size-6 rounded-full bg-card shadow"
              src={image}
              alt="home-slider-image-4"
              width={40}
              height={40}
            />
          </div>
          <div className="leading-none">
            <strong className="block text-sm font-bold uppercase">
              {name}
            </strong>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="text-xs italic text-foreground/75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corporis corrupti porro, deleniti natus iste.
          </div>
          <small className="mt-1 block text-[8px] italic">- John Doe</small>
        </div>
        <div className="flex items-center justify-end">
          <div className="relative -mb-3 rounded-full rounded-tr-lg border-2 border-b-0 border-r-0 border-background bg-card px-4 py-1 shadow-inner">
            <StarRating rating={3.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
