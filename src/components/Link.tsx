import type { HTMLProps } from "react";

type LinkProps = {
  isActive?: boolean;
} & HTMLProps<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  return (
    <a
      {...props}
      className={`px-4 py-2 hover:bg-slate-100 rounded-md transition-all active:scale-95
        ${
          props.isActive
            ? `text-blue-600 dark:text-blue-500
            dark:hover:text-blue-500 font-medium`
            : "dark:hover:text-slate-300"
        } ${props.className || ""}
        dark:hover:bg-slate-800
      `}
    >
      {props.children}
    </a>
  );
};
