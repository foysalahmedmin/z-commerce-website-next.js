import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <Button size="none" variant="none">
      <Search className="h-6 w-6" />
    </Button>
  );
};

export default SearchBar;
