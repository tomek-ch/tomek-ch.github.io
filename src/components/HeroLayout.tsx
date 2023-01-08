type HeroLayoutProps = {
  title: string;
  body: string;
  img: string;
  href?: string;
  reverse?: boolean;
};

export const HeroLayout = ({
  href,
  title,
  body,
  img,
  reverse,
}: HeroLayoutProps) => {
  const C = href ? "a" : "div";
  return (
    <C
      href={href}
      className={`flex flex-col lg:items-center gap-10 lg:gap-20 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div>
        <h3 className="text-2xl sm:text-3xl text-black dark:text-white font-medium mb-7">
          {title}
        </h3>
        <p className="leading-relaxed">{body}</p>
      </div>
      <img
        className="rounded-xl border-2 border-slate-100 dark:border-slate-800 max-w-xl"
        src={img}
        alt={title}
        width="676"
        height="341"
      />
    </C>
  );
};
