import type { ReactNode } from "react";
import { PostContent } from "./PostContent";
import { PostTop } from "./PostTop";

type BlogPostProps = {
  children: ReactNode;
  title: string;
  pubDate: string;
};

export const BlogPost = ({ children, title, pubDate }: BlogPostProps) => {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <PostTop title={title} pubDate={pubDate} />
      <meta itemProp="publisher" content="Tomasz Chmielnicki" />
      <PostContent>{children}</PostContent>
    </article>
  );
};
