export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
  url: string;
};

export type Post = {
  url: string;
  frontmatter: PostMeta;
};
