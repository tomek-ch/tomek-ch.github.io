import type { Post } from "./types";

export const sortPosts = (posts: Post[]) =>
  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
