import type { Post } from "../utils/types";
import { BlogCard } from "./BlogCard";

type MorePostsProps = {
  posts: Post[];
};

export const MorePosts = ({ posts }: MorePostsProps) => {
  return (
    <div className="flex flex-col gap-5 mt-8">
      <h3 className="text-black dark:text-white font-medium">More posts</h3>
      {posts.map(({ url, frontmatter: { pubDate, title } }) => (
        <BlogCard key={url} {...{ pubDate, title, url }} />
      ))}
    </div>
  );
};
