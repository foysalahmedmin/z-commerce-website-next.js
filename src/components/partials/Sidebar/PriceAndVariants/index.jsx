import { colors } from "@/assets/data/colors";
import { sizes } from "@/assets/data/sizes";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { cn } from "@/lib/utils";
import { convertColorFormat } from "@/utils/convertColorFormat";

const PriceAndVariants = ({ className }) => {
  return (
    <div className={cn("overflow-y-auto rounded-md border py-6", className)}>
      <div className="mb-4 px-4">
        <h5 className="short-underline pb-1 uppercase">Price & Variants</h5>
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="px-4">
          <RangeSlider className="mb-4" />
        </div>
        <hr />
        <div className="px-4">
          <strong className="mb-4 block uppercase text-foreground">
            Colors:
          </strong>
          <ul className="grid w-full gap-2 md:grid-cols-2">
            {colors?.map((item, i) => (
              <li key={i}>
                <label
                  style={{
                    "--accent":
                      `${convertColorFormat(item?.hex, "hsl")}`.replace(
                        /hsl\((\d+),\s*(\d+%)\s*,\s*(\d+%)\)/,
                        "$1 $2 $3",
                      ),
                  }}
                  className="inline-flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    className="checkbox rounded-full border-2 border-accent bg-accent/25 text-2xl hover:bg-accent/75"
                    name={item?.value}
                    value={item?.value}
                  />
                  <span className="capitalize">{item?.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="px-4">
          <strong className="mb-4 block uppercase text-foreground">
            Sizes:
          </strong>
          <ul className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
            {sizes?.map((item, i) => (
              <li key={i}>
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className={`checkbox border-accent text-base`}
                    name={item?.value}
                    value={item?.value}
                  />
                  <span className="uppercase">{item?.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceAndVariants;
