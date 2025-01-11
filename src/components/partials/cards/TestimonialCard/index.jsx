import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TestimonialCard = ({ className, item }) => {
  const { image, name } = item;
  return (
    <div
      className={cn(
        "card relative -z-10 h-full scale-75 py-6 opacity-50 transition-all duration-500 group-[.is-snapped]/slide:z-10 group-[.is-snapped]/slide:scale-100 group-[.is-snapped]/slide:opacity-100",
        className,
      )}
    >
      <div className="w-full rounded-lg bg-card group-[.is-snapped]/slide:shadow-lg">
        <div className="relative -mt-6 inline-flex items-center overflow-hidden rounded-full rounded-bl-none border-2 border-l-0 border-t-0 border-background bg-card shadow-inner">
          <div className="relative inline-flex aspect-square h-12 shrink-0 overflow-hidden rounded-r-full p-[2px]">
            <Image
              className="size-full bg-card shadow"
              src={image}
              alt="home-slider-image-4"
              width={40}
              height={40}
            />
          </div>
          <div className="px-4 leading-none">
            <strong className="block text-lg font-bold uppercase">
              {name}
            </strong>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="line-clamp-3 text-lg italic text-foreground/75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corporis corrupti porro, deleniti natus iste.
          </div>
          <small className="mt-1 block text-sm italic">- John Doe</small>
        </div>
        <div className="flex items-center justify-end">
          <div className="relative -mb-3 rounded-full rounded-tr-lg border-2 border-b-0 border-r-0 border-background bg-card px-4 py-2 text-lg shadow-inner">
            <StarRating rating={3.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
