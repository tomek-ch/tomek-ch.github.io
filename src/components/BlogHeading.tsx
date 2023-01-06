import { useSearchQuery } from "../store/postsFilter";
import { MainHeading } from "./MainHeading";

type BlogHeadingProps = {
  defaultText: string;
};

export const BlogHeading = ({ defaultText }: BlogHeadingProps) => {
  const [searchQuery] = useSearchQuery();
  const text = searchQuery ? `Results for „${searchQuery}”` : defaultText;
  return <MainHeading className="mb-10 sm:mb-14">{text}</MainHeading>;
};
