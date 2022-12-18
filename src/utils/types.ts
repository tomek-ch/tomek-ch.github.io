export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
};

export type Post = {
  url: string;
  frontmatter: PostMeta;
};
