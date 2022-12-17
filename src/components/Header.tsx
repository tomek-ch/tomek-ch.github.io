import type { ReactNode } from "react";
import { Link } from "./Link";

type HeaderProps = {
  activeRoute: string;
  children: ReactNode;
};

export const Header = ({ activeRoute, children }: HeaderProps) => {
  return (
    <header className="flex py-8 justify-between sm:justify-end text-black dark:text-slate-400 -mr-4">
      {children}
      {[
        ["/", "Home"],
        ["/blog", "Blog"],
        ["/projects", "Projects"],
      ].map(([path, name]) => (
        <Link key={path} href={path} isActive={path.slice(1) === activeRoute}>
          {name}
        </Link>
      ))}
    </header>
  );
};
