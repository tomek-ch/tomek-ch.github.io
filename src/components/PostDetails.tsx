type PostDetailsProps = {
  minutesRead: number;
  pubDate: string;
  className?: string;
};

export const PostDetails = ({
  minutesRead,
  pubDate,
  className = "",
}: PostDetailsProps) => {
  return (
    <div className={`text-sm ${className}`}>
      {pubDate} <span className="px-1 sm:px-2">·</span> {minutesRead}
    </div>
  );
};
