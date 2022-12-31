import type { HTMLProps } from "react";

type LinkProps = {
  variant?: keyof typeof variants;
  linkSize?: keyof typeof sizes;
} & ({
  isActive?: boolean;
} & HTMLProps<HTMLAnchorElement>);

const variants = {
  secondary: () => `border border-slate-300 hover:border-slate-400 text-black
    dark:text-white dark:border-slate-700 dark:hover:border-slate-600`,
  ghost: (isActive: boolean) => `hover:bg-slate-100 dark:hover:bg-slate-800
    ${
      isActive
        ? `text-blue-600 dark:text-blue-500
        dark:hover:text-blue-500 font-medium`
        : "dark:hover:text-white"
    }`,
  tag: () =>
    "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
};

const sizes = {
  sm: "px-3 py-1 rounded-md text-sm",
  md: "px-4 py-2 rounded-md",
};

export const Link = ({
  isActive = false,
  variant = "ghost",
  linkSize = "md",
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`transition-all active:scale-95 ${
        props.className || ""
      } ${variants[variant](isActive)} ${sizes[linkSize]}
      `}
    >
      {props.children}
    </a>
  );
};
