import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const SearchBar = ({ className, ...props }) => {
  return (
    <label
      className={cn(
        "input h-8 w-full flex-row-reverse gap-2 rounded-none border-transparent border-b-border px-2 lg:w-80",
        className,
      )}
      {...props}
    >
      <input
        className="h-full w-full bg-transparent text-xs outline-none lg:text-sm"
        type="search"
        placeholder="What are you looking for?"
      />
      <Button
        className="rounded-full hover:text-accent"
        variant="none"
        size="none"
      >
        <Search className="size-6" />
      </Button>
    </label>
  );
};

export default SearchBar;
