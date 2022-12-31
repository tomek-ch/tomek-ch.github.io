import { MainHeading } from "./MainHeading";
import { PostDetails } from "./PostDetails";

type PostTopProps = {
  title: string;
  pubDate: string;
  minutesRead: number;
};

export const PostTop = ({ title, pubDate, minutesRead }: PostTopProps) => {
  return (
    <div className="max-w-[650px]">
      <MainHeading itemProp="name headline">{title}</MainHeading>
      <PostDetails
        className="my-8 sm:text-base"
        minutesRead={minutesRead}
        pubDate={pubDate}
      />
    </div>
  );
};
