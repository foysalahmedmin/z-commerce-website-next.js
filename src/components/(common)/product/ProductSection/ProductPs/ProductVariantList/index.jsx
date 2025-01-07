import { Button } from "@/components/ui/Button";
import { TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

const ProductVariantList = ({ className, variants }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="inline-block text-xl">Colors:</span>
      <TabsList className="mb-0 flex-wrap justify-start gap-[0.5em] overflow-visible overflow-x-visible overflow-y-visible px-[0.25em]">
        {variants?.map((variant, i) => (
          <TabsTrigger
            className="flex size-[1.5rem] overflow-hidden rounded-full after:hidden"
            activeClassName="ring-[0.15rem] ring-muted-foreground/50 ring-offset-[0.15rem]"
            key={i}
            value={i}
          >
            <Button
              style={{ background: variant?.color }}
              className="size-full rounded-full"
              variant="none"
              shape="icon"
              size="sm"
              asChild={true}
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default ProductVariantList;
