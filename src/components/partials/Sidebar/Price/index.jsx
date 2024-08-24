import { cn } from "@/lib/utils";

const Price = ({ className }) => {
  return (
    <div
      className={cn("h-full overflow-y-auto rounded-md border py-6", className)}
    >
      <div className="mb-4 px-4">
        <h5 className="short-underline pb-1 uppercase">Price</h5>
      </div>
      <ul className="divide-y"></ul>
    </div>
  );
};

export default Price;
