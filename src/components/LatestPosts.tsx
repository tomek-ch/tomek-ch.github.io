import type { Post } from "../utils/types";
import { BlogCard } from "./BlogCard";
import { SecondaryHeading } from "./SecondaryHeading";

type LatestPostsProps = {
  posts: Post[];
};

export const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <div className="mt-32 mb-20">
      <SecondaryHeading className="mb-6 sm:mb-8">Latest posts</SecondaryHeading>
      <div className="flex flex-col sm:grid grid-cols-3 gap-6 sm:gap-10">
        {posts.map(({ url, frontmatter: { title, minutesRead } }) => (
          <BlogCard readTime={minutesRead} title={title} url={url} />
        ))}
      </div>
    </div>
  );
};
