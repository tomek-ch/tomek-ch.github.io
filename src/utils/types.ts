export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
  minutesRead: number;
  tags: string[];
};

export type Post = {
  url: string;
  frontmatter: PostMeta;
};
