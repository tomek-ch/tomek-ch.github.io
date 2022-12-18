type BlogCardProps = {
  title: string;
  pubDate: string;
  url: string;
};

export const BlogCard = ({ pubDate, title, url }: BlogCardProps) => {
  return (
    <a
      href={url}
      className="block p-5 bg-slate-100 hover:bg-slate-200 rounded-xl
      dark:bg-slate-800 dark:hover:bg-slate-700 transition-all"
    >
      <h3 className="text-black dark:text-white mb-3 font-medium">{title}</h3>
      <div>{pubDate}</div>
    </a>
  );
};
