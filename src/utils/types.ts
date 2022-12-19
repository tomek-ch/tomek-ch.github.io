export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
  url: string;
  minutesRead: string;
};

export type Post = {
  url: string;
  frontmatter: PostMeta;
};
