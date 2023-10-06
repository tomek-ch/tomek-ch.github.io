import { useSearchQuery } from "../store/postsFilter";
import type { Post } from "../utils/types";
import { BlogCard } from "./BlogCard";

type PostListProps = {
  posts: Post[];
  className?: string;
};

export const PostList = ({ posts, className = "" }: PostListProps) => {
  const [searchQuery] = useSearchQuery();
  const filtered = searchQuery
    ? posts.filter(({ frontmatter: { title } }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  if (!filtered.length) {
    return <p>No posts found</p>;
  }

  return (
    <div className={`flex flex-col gap-4 lg:gap-8 w-full ${className}`}>
      {filtered.map(({ frontmatter: { minutesRead, title }, url }) => (
        <BlogCard key={url} readTime={minutesRead} title={title} url={url} />
      ))}
    </div>
  );
};
