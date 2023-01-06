import { useSearchQuery } from "../store/postsFilter";
import { Input } from "./Input";

export const SearchInput = () => {
  const [input, setInput] = useSearchQuery();
  return (
    <Input
      value={input}
      onChange={(e) => {
        setInput((e.target as HTMLInputElement).value);
      }}
      placeholder="Search"
    />
  );
};
