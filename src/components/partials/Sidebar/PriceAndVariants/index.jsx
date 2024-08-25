import { colors } from "@/assets/data/colors";
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
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      "--accent":
                        `${convertColorFormat(item?.hex, "hsl")}`.replace(
                          /hsl\((\d+),\s*(\d+%)\s*,\s*(\d+%)\)/,
                          "$1 $2 $3",
                        ),
                    }}
                    className={`checkbox rounded-full border-accent bg-accent/50 text-2xl`}
                    id="color-1"
                    name={item?.value}
                    value={item?.value}
                  />
                  <span>{item?.label}</span>
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
          <ul className="grid w-full gap-2 md:grid-cols-2">
            {colors?.map((item, i) => (
              <li key={i}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      "--accent":
                        `${convertColorFormat(item?.hex, "hsl")}`.replace(
                          /hsl\((\d+),\s*(\d+%)\s*,\s*(\d+%)\)/,
                          "$1 $2 $3",
                        ),
                    }}
                    className={`checkbox rounded-full border-accent bg-accent/50 text-2xl`}
                    id="color-1"
                    name={item?.value}
                    value={item?.value}
                  />
                  <span>{item?.label}</span>
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
