const ProductSizeList = ({ className, sizes }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="inline-block text-xl leading-none">Sizes:</span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {sizes?.map((size, i) => (
          <label
            className="flex cursor-pointer items-center gap-1 leading-none"
            key={i}
          >
            <input
              className="radio text-[1.5rem] leading-none"
              type="radio"
              name="size"
              value={size}
            />
            <span className="inline-block font-semibold uppercase">
              {size.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductSizeList;
