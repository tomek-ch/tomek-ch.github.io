import { MainHeading } from "./MainHeading";
import { PostDetails } from "./PostDetails";
import { Tags } from "./Tags";

type PostTopProps = {
  title: string;
  pubDate: string;
  minutesRead: number;
  tags: string[];
};

export const PostTop = ({
  title,
  pubDate,
  minutesRead,
  tags,
}: PostTopProps) => {
  return (
    <div className="max-w-[650px]">
      <Tags tags={tags} className="mb-6" />
      <MainHeading itemProp="name headline">{title}</MainHeading>
      <PostDetails
        className="my-8 sm:text-base"
        minutesRead={minutesRead}
        pubDate={pubDate}
      />
    </div>
  );
};
