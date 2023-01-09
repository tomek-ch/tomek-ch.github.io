import type { ReactNode } from "react";

type HeroLayoutProps = {
  title: string;
  body: string;
  img: string;
  href?: string;
  reverse?: boolean;
  links?: ReactNode;
};

export const HeroLayout = ({
  title,
  body,
  img,
  reverse,
  links,
  href,
}: HeroLayoutProps) => {
  const C = href ? "a" : "div";
  return (
    <div
      className={`flex flex-col lg:items-center gap-10 lg:gap-20 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div>
        <C href={href}>
          <h3 className="text-2xl sm:text-3xl text-black dark:text-white font-medium mb-7">
            {title}
          </h3>
        </C>
        <p className="leading-relaxed">{body}</p>
        {links && <div className="flex gap-2 mt-6">{links}</div>}
      </div>
      <C href={href}>
        <img
          className="rounded-xl border-2 border-slate-100 dark:border-slate-800 max-w-full lg:max-w-xl"
          src={img}
          alt={title}
          width="676"
          height="341"
        />
      </C>
    </div>
  );
};
