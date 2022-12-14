import { Highlight } from "./Highlight";
import { Link } from "./Link";

export const Hero = () => {
  return (
    <div className="mt-16">
      <h1 className="sm:text-5xl text-3xl !leading-tight text-black dark:text-white font-medium">
        Hi, my name is
        <br />
        Tomasz Chmielnicki.
        <br />
        I'm a <Highlight>web developer</Highlight>.
      </h1>
      <p className="max-w-2xl sm:text-xl my-10">
        I'm passionate about creating great software - anything from intuitive
        user interfaces and useful APIs to neat utilities that get things done.
      </p>
      <div className="-mx-4 flex gap-9 sm:gap-14 sm:text-xl text-black dark:text-white">
        <Link
          className="dark:hover:!text-white"
          href="mailto:chmielnicki18@gmail.com"
        >
          Email
        </Link>
        <Link
          className="dark:hover:!text-white"
          target="_blank"
          href="https://github.com/tomek-ch"
        >
          Github
        </Link>
        <Link
          className="dark:hover:!text-white"
          target="_blank"
          href="https://tomek-ch.medium.com/"
        >
          Medium
        </Link>
      </div>
    </div>
  );
};
