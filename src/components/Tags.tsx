import { toKebabCase } from "../utils/toKebabCase";
import { Link } from "./Link";

type TagsProps = {
  tags: string[];
  className?: string;
  activeTag?: string;
};

export const Tags = ({ tags, className = "", activeTag }: TagsProps) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          variant="tag"
          linkSize="sm"
          href={`/blog/tagged/${toKebabCase(tag)}`}
          className={
            activeTag === toKebabCase(tag)
              ? "outline outline-2 outline-blue-500 text-black dark:text-white"
              : ""
          }
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};
