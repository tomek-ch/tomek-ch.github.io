import type { Post } from "./types";
import { getTags } from "./getTags";
import { formatTag } from "./formatTag";

export const getFormattedTags = (posts: Post[]) =>
  getTags(posts).map((tag) => formatTag(tag, posts));
