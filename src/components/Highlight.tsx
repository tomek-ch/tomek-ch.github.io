import type { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
};

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span
      className="bg-clip-text text-transparent bg-gradient-to-r
    from-blue-600 via-sky-600 to-cyan-600
    dark:from-blue-500 dark:via-sky-500 dark:to-cyan-500"
    >
      {children}
    </span>
  );
};
