import type { ReactNode } from "react";

type HeaderProps = {
  activeRoute: string;
  children: ReactNode;
};

type HeaderLinkProps = {
  children: ReactNode;
  href: string;
  isActive: boolean;
};

const HeaderLink = ({ children, href, isActive }: HeaderLinkProps) => {
  return (
    <a
      href={href}
      className={`px-4 py-2 hover:bg-slate-100 rounded-md transition-all active:scale-95
        ${
          isActive
            ? "text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 font-medium"
            : ""
        }
        dark:hover:bg-slate-800 dark:hover:text-slate-300
      `}
    >
      {children}
    </a>
  );
};

export const Header = ({ activeRoute, children }: HeaderProps) => {
  return (
    <header className="flex py-8 justify-between md:justify-end">
      {children}
      {[
        ["/", "Home"],
        ["/blog", "Blog"],
        ["/projects", "Projects"],
      ].map(([path, name]) => (
        <HeaderLink href={path} isActive={path.slice(1) === activeRoute}>
          {name}
        </HeaderLink>
      ))}
    </header>
  );
};
