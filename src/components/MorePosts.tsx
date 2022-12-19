import type { Post } from "../utils/types";
import { BlogCard } from "./BlogCard";
import { Link } from "./Link";

type MorePostsProps = {
  posts: Post[];
};

export const MorePosts = ({ posts }: MorePostsProps) => {
  return (
    <div className="flex flex-col gap-5 mt-8">
      <h3 className="text-black dark:text-white font-medium">More posts</h3>
      {posts.map(({ url, frontmatter: { title, minutesRead } }) => (
        <BlogCard key={url} readTime={minutesRead} title={title} url={url} />
      ))}
      <Link variant="secondary" className="w-fit ml-auto" href="/blog">
        See all
      </Link>
    </div>
  );
};
