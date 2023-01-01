import { toKebabCase } from "../utils/toKebabCase";
import { Link } from "./Link";

type TagsProps = {
  tags: string[];
  className?: string;
};

export const Tags = ({ tags, className = "" }: TagsProps) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          variant="tag"
          linkSize="sm"
          href={`/blog/tagged/${toKebabCase(tag)}`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};
