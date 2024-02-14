import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLanguage = () => {
  return (
    <Select>
      <SelectTrigger variant="none" size="sm">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="bangla">Bangla</SelectItem>
          <SelectItem value="arabic">Arabic</SelectItem>
          <SelectItem value="urdu">Urdu</SelectItem>
          <SelectItem value="hindi">Hindi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
