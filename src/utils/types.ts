type Content<T> = {
  url: string;
  frontmatter: T;
};

export type PostMeta = {
  title: string;
  description: string;
  pubDate: string;
  minutesRead: number;
  tags: string[];
};

export type Post = Content<PostMeta>;

export type ProjectMeta = {
  title: string;
  description: string;
  heroImg: string;
  githubLink: string;
  liveLink: string;
  tech: string[];
  order: number;
};

export type Project = Content<ProjectMeta>;
