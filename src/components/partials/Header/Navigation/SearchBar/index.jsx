import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const SearchBar = ({ className, ...props }) => {
  return (
    <label
      className={cn(
        "input h-8 w-full gap-2 bg-background px-0 lg:w-80",
        className,
      )}
      {...props}
    >
      <input
        className="peer size-full flex-1 bg-transparent px-4 text-xs outline-none lg:text-sm"
        type="search"
        placeholder="What are you looking for?"
      />
      <Button
        className="rounded-l-none border-y-0 border-l border-r-0 border-border text-foreground hover:text-primary peer-focus-within:border-foreground"
        variant="outline"
        size="icon"
      >
        <Search className="size-6" />
      </Button>
    </label>
  );
};

export default SearchBar;
