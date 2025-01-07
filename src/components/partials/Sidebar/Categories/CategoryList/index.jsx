import { cn } from "@/lib/utils";
import Link from "next/link";

const CategoryList = ({ categories }) => {
  return (
    <div className="right-container-inset pl-container-inset invisible absolute z-[10000] h-fit rounded-md opacity-0 transition-all duration-300 group-hover/category-item:visible group-hover/category-item:opacity-100 md:bottom-6 md:top-6 md:max-h-[calc(calc(100vh-var(--header-height))-4.5rem)] md:w-[calc(calc(100%-16.5rem)-var(--container-inset))] xl:bottom-8 xl:top-8 xl:max-h-[calc(calc(100vh-var(--header-height))-6.5rem)] xl:w-[calc(calc(100%-22rem)-var(--container-inset))]">
      <div className="size-full overflow-y-auto rounded-md border bg-background px-4 py-6 shadow">
        <div className="overflow-hidden">
          <ul className="-m-[1px] grid grid-cols-1 bg-background p-[-4px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categories?.map((item, i) => (
              <li key={i} className="border-b border-r p-4">
                <Link
                  href="#"
                  className={cn(
                    "short-underline mb-2 block font-semibold text-title hover:text-pretty hover:text-primary hover:after:w-full",
                  )}
                >
                  {item?.label}
                </Link>
                {item?.categories?.length > 0 && (
                  <ul>
                    {item?.categories?.map((item, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="inline-block hover:text-primary hover:underline"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
