import { toKebabCase } from "./toKebabCase";
import type { Post } from "./types";

export const getTags = (posts: Post[]) =>
  posts.reduce(
    (acc, { frontmatter: { tags } }) => [
      ...acc,
      ...tags.map(toKebabCase).filter((tag) => !acc.includes(tag)),
    ],
    [] as string[]
  );
