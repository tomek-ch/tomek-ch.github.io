import type { HTMLProps, ReactNode } from "react";

type LinkProps = {
  variant?: keyof typeof variants;
  linkSize?: keyof typeof sizes;
  icon?: ReactNode;
  iconRight?: ReactNode;
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
    `bg-slate-100 hover:bg-slate-200 hover:text-black
    dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white`,
  primary: () => "bg-blue-600 hover:bg-blue-700 text-white font-medium",
};

const sizes = {
  sm: "px-3 py-1 rounded-md text-sm",
  md: "px-4 py-2 rounded-md",
};

export const Link = ({
  isActive = false,
  variant = "ghost",
  linkSize = "md",
  icon,
  iconRight,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`transition-all active:scale-95 ${
        props.className || ""
      } ${variants[variant](isActive)} ${sizes[linkSize]} ${
        icon || iconRight ? "flex gap-2 items-center w-fit text-red!" : ""
      }`}
    >
      {icon}
      {props.children}
      {iconRight}
    </a>
  );
};
