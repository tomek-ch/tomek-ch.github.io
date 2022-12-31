import type { PostMeta } from "../utils/types";
import { PostDetails } from "./PostDetails";

type PostExcerptProps = {
  post: PostMeta;
  url: string;
};

export const PostExcerpt = ({
  post: { description, minutesRead, pubDate, title },
  url,
}: PostExcerptProps) => {
  return (
    <a
      href={url}
      className="p-4 -m-4 hover:bg-slate-100 transition-all rounded-xl dark:hover:bg-slate-800"
    >
      <h2 className="text-black dark:text-white text-xl sm:text-2xl font-medium">
        {title}
      </h2>
      <PostDetails
        className="my-2"
        minutesRead={minutesRead}
        pubDate={pubDate}
      />
      <p>{description}</p>
    </a>
  );
};
