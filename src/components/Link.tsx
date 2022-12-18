import type { HTMLProps } from "react";

type LinkProps = { variant?: keyof typeof variants } & ({
  isActive?: boolean;
} & HTMLProps<HTMLAnchorElement>);

const variants = {
  secondary: () => `border border-slate-300 hover:border-slate-400 text-black
    dark:text-white dark:border-slate-600 dark:hover:border-slate-500`,
  ghost: (isActive: boolean) => `hover:bg-slate-100 dark:hover:bg-slate-800
    ${
      isActive
        ? `text-blue-600 dark:text-blue-500
        dark:hover:text-blue-500 font-medium`
        : "dark:hover:text-slate-300"
    }`,
};

export const Link = ({
  isActive = false,
  variant = "ghost",
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`px-4 py-2 rounded-md transition-all active:scale-95 ${
        props.className || ""
      } ${variants[variant](isActive)}
      `}
    >
      {props.children}
    </a>
  );
};
