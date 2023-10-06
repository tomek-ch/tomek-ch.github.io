type Content<T> = {
  url: string;
  frontmatter: T;
};

export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
  minutesRead: string;
  tags: string[];
};

export type Post = Content<PostMeta>;

export type ProjectMeta = {
  title: string;
  description: string;
  heroImg: string;
  githubLink: string;
  liveLink: string;
  linkText: string;
  tech: string[];
  order: number;
};

export type Project = Content<ProjectMeta>;
