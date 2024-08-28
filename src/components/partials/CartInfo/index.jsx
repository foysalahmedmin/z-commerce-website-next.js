import { Heart, HeartOutline } from "@/assets/images/icons/Heart";
import { Magnify } from "@/assets/images/icons/Magnify";
import { Share } from "@/assets/images/icons/Share";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CartInfo = ({ className }) => {
  const wishListed = false;
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 text-[1em]",
        className,
      )}
    >
      <div className="translate-y-[1em] opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
        <Button
          className="bg-card text-[0.75em] text-title shadow hover:bg-primary hover:text-primary-foreground  hover:shadow-primary"
          title="Wish List"
          size="icon"
        >
          {wishListed ? (
            <Heart className="size-[1.5em] text-primary-foreground" />
          ) : (
            <HeartOutline className="size-[1.5em]" />
          )}
        </Button>
      </div>
      <div className="translate-y-[1em] opacity-0 transition-all delay-100  duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
        <Button
          className="bg-card text-[0.75em] text-title shadow hover:bg-primary hover:text-primary-foreground  hover:shadow-primary"
          title="Quick View"
          size="icon"
        >
          <Magnify className="size-[1.5em]" />
        </Button>
      </div>
      <div className="translate-y-[1em] opacity-0 transition-all delay-200  duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
        <Button
          className="bg-card text-[0.75em] text-title shadow hover:bg-primary hover:text-primary-foreground  hover:shadow-primary"
          title="Share"
          size="icon"
        >
          <Share className="size-[1.5em]" />
        </Button>
      </div>
    </div>
  );
};

export default CartInfo;
