import { useSearchQuery } from "../store/postsFilter";
import type { Post } from "../utils/types";
import { PostExcerpt } from "./PostExcerpt";

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
    <div className={`flex flex-col gap-12 sm:gap-14 ${className}`}>
      {filtered.map(({ frontmatter, url }) => (
        <PostExcerpt key={url} url={url} post={frontmatter} />
      ))}
    </div>
  );
};
