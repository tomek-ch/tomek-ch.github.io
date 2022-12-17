type AuthorProps = {};

export const Author = ({}: AuthorProps) => {
  return (
    <div className="flex flex-col gap-3">
      <img
        alt="Tomasz Chmielnicki"
        src="/me.jpeg"
        className="rounded-full w-24 h-24"
      />
      <h3 className="text-black dark:text-white font-medium">
        Tomasz Chmielnicki
      </h3>
      <p>Web developer, building things.</p>
    </div>
  );
};
