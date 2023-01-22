import { useSearchQuery } from "../store/postsFilter";
import { Search } from "./icons/Search";
import { Input } from "./Input";

export const SearchInput = () => {
  const [input, setInput] = useSearchQuery();
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 -z-10" />
      <Input
        value={input}
        onChange={(e) => {
          setInput((e.target as HTMLInputElement).value);
        }}
        placeholder="Search"
        className="pl-9"
      />
    </div>
  );
};
