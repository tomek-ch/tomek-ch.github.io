import { toKebabCase } from "./toKebabCase";
import type { Post } from "./types";

export const getTaggedPosts = (tag: string, posts: Post[]) =>
  posts.filter(({ frontmatter: { tags } }) =>
    tags.some((postTag) => toKebabCase(postTag) === tag)
  );
