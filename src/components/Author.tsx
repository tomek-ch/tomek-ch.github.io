type AuthorProps = {};

export const Author = ({}: AuthorProps) => {
  return (
    <a
      href="/about"
      className="flex items-center lg:items-start lg:flex-col gap-4 lg:gap-3 rounded-xl
    hover:bg-slate-100 dark:hover:bg-slate-800 p-4 -m-4 transition-all"
    >
      <img
        alt="Tomasz Chmielnicki"
        src="/me.jpeg"
        className="rounded-full w-14 h-14 lg:w-24 lg:h-24"
      />
      <div>
        <h3 className="text-black dark:text-white mb-2 font-medium text-lg lg:text-base">
          Tomasz Chmielnicki
        </h3>
        <p>Web developer, building things.</p>
      </div>
    </a>
  );
};
