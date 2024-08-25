import { RangeSlider } from "@/components/ui/RangeSlider";
import { cn } from "@/lib/utils";

const PriceAndVariants = ({ className }) => {
  return (
    <div className={cn("overflow-y-auto rounded-md border py-6", className)}>
      <div className="mb-4 px-4">
        <h5 className="short-underline pb-1 uppercase">Price & Variants</h5>
      </div>
      <div className="px-4">
        <RangeSlider className="mb-4" />
      </div>
      <ul className="divide-y"></ul>
    </div>
  );
};

export default PriceAndVariants;
