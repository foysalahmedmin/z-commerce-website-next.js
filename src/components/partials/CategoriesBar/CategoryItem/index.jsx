import { ChevronRight } from "lucide-react";
import CategoryList from "../CategoryList";

const CategoryItem = ({ item }) => {
  const { label } = item;
  return (
    <div className="group/category-item">
      <div className="flex cursor-pointer items-center justify-between gap-2 px-4 py-1 hover:bg-muted/25 hover:shadow-inner">
        <span>{label}</span>
        <ChevronRight size={16} />
      </div>
      <CategoryList />
    </div>
  );
};

export default CategoryItem;
