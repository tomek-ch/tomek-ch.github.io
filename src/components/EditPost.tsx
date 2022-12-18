import { GitHub } from "./icons/GitHub";
import { Link } from "./Link";

type EditPostProps = {
  path: string;
};

export const EditPost = ({ path }: EditPostProps) => {
  return (
    <Link
      target="_blank"
      href={`https://github.com/tomek-ch/tomek-ch.github.io/edit/main/src/pages${path}.md`}
      className="flex gap-2 items-center w-fit text-black dark:text-white"
    >
      <GitHub width="18" />
      Edit this post
    </Link>
  );
};
