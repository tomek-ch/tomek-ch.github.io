import { ArrowLeft } from "./icons/ArrowLeft";
import { Link } from "./Link";

export const BackToBlog = () => {
  return (
    <Link href="/blog" className="sm:text-lg" icon={<ArrowLeft width={16} />}>
      Blog
    </Link>
  );
};
