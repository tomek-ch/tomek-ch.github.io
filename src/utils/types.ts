export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
  minutesRead: number;
};

export type Post = {
  url: string;
  frontmatter: PostMeta;
};
