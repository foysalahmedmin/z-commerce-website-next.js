import { cn } from "@/lib/utils";
import Categories from "./Categories";
import PopularProduct from "./PopularProduct";
import PriceAndVariants from "./PriceAndVariants";

const Sidebar = ({ className }) => {
  return (
    <aside className={cn("", className)}>
      <Categories />
      <PriceAndVariants />
      <PopularProduct />
    </aside>
  );
};

export default Sidebar;
