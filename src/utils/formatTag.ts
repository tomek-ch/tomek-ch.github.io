import { toKebabCase } from "./toKebabCase";
import type { Post } from "./types";

export const formatTag = (tag: string, posts: Post[]) => {
  for (const {
    frontmatter: { tags },
  } of posts) {
    const formattedTag = tags.find((postTag) => toKebabCase(postTag) === tag);
    if (formattedTag) {
      return formattedTag;
    }
  }
  throw new Error("Couldn't find formatted tag");
};
