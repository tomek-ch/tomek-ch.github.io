import type { ReactNode } from "react";

type PostContentProps = {
  children: ReactNode;
  className?: string;
};

export const PostContent = ({ children, className = "" }: PostContentProps) => {
  return (
    <div
      className={`
      prose prose-slate dark:prose-invert
      prose-img:rounded-xl prose-pre:rounded-xl prose-h2:font-medium
      sm:prose-p:text-lg dark:prose-p:text-slate-400 sm:prose-headings:text-3xl
      ${className}
    `}
    >
      {children}
    </div>
  );
};
