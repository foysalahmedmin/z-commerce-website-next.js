import { categories } from "@/assets/data/categories";
import { cn } from "@/lib/utils";
import CategoryItem from "./CategoryItem";

const Categories = ({ className }) => {
  return (
    <div className={cn("overflow-y-auto rounded-md border py-6", className)}>
      <div className="mb-4 px-4">
        <h5 className="short-underline pb-1 uppercase">Categories</h5>
      </div>
      <ul className="divide-y">
        {categories?.map((item, i) => (
          <li key={i}>
            <CategoryItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
