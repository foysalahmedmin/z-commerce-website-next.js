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
        "from absolute bottom-0 left-0 right-0 flex w-full items-center justify-center gap-2 py-4 transition-all duration-150 group-hover:via-60% group-hover:to-100%",
        className,
      )}
    >
      <div className="translate-y-4 opacity-0 transition-all  duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button className="text-xl " title="Wish List" size="icon-sm">
          {wishListed ? (
            <Heart className="text-primary-foreground" />
          ) : (
            <HeartOutline />
          )}
        </Button>
      </div>
      <div className="translate-y-4 opacity-0 transition-all delay-100  duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button className="text-xl " title="Quick View" size="icon-sm">
          <Magnify />
        </Button>
      </div>
      <div className="translate-y-4 opacity-0 transition-all delay-200  duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button className="text-xl " title="Share" size="icon-sm">
          <Share />
        </Button>
      </div>
    </div>
  );
};

export default CartInfo;
