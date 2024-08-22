const CategoryList = () => {
  return (
    <div className="invisible absolute right-container-space z-[10000] rounded-md pl-container-space opacity-0 transition-all duration-500 group-hover/category-item:visible group-hover/category-item:opacity-100 md:bottom-6 md:top-6 md:w-[calc(calc(100%-16.5rem)-var(--container-space))] xl:bottom-8 xl:top-8 xl:w-[calc(calc(100%-22rem)-var(--container-space))]">
      <div className="size-full overflow-y-auto rounded-md border bg-card py-6"></div>
    </div>
  );
};

export default CategoryList;
