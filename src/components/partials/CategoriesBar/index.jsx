import { categories } from "@/assets/data/categories";
import { ChevronRight } from "lucide-react";

const CategoriesBar = () => {
  return (
    <div className="h-full">
      <ul>
        {categories?.map((item, i) => (
          <li key={i}>
            <div className="flex cursor-pointer items-center justify-between gap-2 border-y px-4 py-1 hover:bg-muted/25 hover:shadow-inner">
              <span>{item?.label}</span>
              <ChevronRight size={16} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesBar;
