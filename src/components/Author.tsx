type AuthorProps = {};

export const Author = ({}: AuthorProps) => {
  return (
    <a
      href="/about"
      className="flex flex-col gap-3 rounded-xl
    hover:bg-slate-100 dark:hover:bg-slate-800 p-4 -m-4 transition-all"
    >
      <img
        alt="Tomasz Chmielnicki"
        src="/me.jpeg"
        className="rounded-full w-24 h-24"
      />
      <h3 className="text-black dark:text-white font-medium">
        Tomasz Chmielnicki
      </h3>
      <p>Web developer, building things.</p>
    </a>
  );
};
