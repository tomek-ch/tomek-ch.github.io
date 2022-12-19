import type { ReactNode } from "react";
import { PostContent } from "./PostContent";
import { PostTop } from "./PostTop";

type BlogPostProps = {
  children: ReactNode;
  title: string;
  pubDate: string;
  minutesRead: string;
};

export const BlogPost = ({
  children,
  title,
  pubDate,
  minutesRead,
}: BlogPostProps) => {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <PostTop title={title} pubDate={pubDate} minutesRead={minutesRead} />
      <meta itemProp="publisher" content="Tomasz Chmielnicki" />
      <PostContent>{children}</PostContent>
    </article>
  );
};
