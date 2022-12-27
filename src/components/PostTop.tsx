import { MainHeading } from "./MainHeading";

type PostTopProps = {
  title: string;
  pubDate: string;
  minutesRead: string;
};

export const PostTop = ({ title, pubDate, minutesRead }: PostTopProps) => {
  return (
    <div className="max-w-[650px]">
      <MainHeading itemProp="name headline">{title}</MainHeading>
      <div className="my-8 text-sm sm:text-base">
        {pubDate} <span className="px-1 sm:px-2">·</span> {minutesRead}
      </div>
    </div>
  );
};
