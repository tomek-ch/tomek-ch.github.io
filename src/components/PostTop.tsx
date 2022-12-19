type PostTopProps = {
  title: string;
  pubDate: string;
  minutesRead: string;
};

export const PostTop = ({ title, pubDate, minutesRead }: PostTopProps) => {
  return (
    <div className="max-w-[650px]">
      <h1
        itemProp="name headline"
        className="text-3xl sm:text-5xl font-medium text-black dark:text-white"
      >
        {title}
      </h1>
      <div className="my-8 text-sm sm:text-base">
        {pubDate} · {minutesRead}
      </div>
    </div>
  );
};
