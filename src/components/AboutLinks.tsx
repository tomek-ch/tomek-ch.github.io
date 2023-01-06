import { Envelope } from "./icons/Envelope";
import { GitHub } from "./icons/GitHub";
import { Person } from "./icons/Person";
import { Link } from "./Link";

export const AboutLinks = () => {
  const linkStyles = "text-black dark:text-white sm:text-lg";
  return (
    <div className="mt-10 flex justify-between sm:justify-start sm:gap-14 -ml-4">
      <Link
        href="mailto:chmielnicki18@gmail.com"
        className={linkStyles}
        icon={<Envelope className="w-4 sm:w-5" />}
      >
        Email
      </Link>
      <Link
        href="https://github.com/tomek-ch"
        target="_blank"
        className={linkStyles}
        icon={<GitHub className="w-4 sm:w-5" />}
      >
        GitHub
      </Link>
      <Link
        href="/resume.pdf"
        target="_blank"
        className={linkStyles}
        icon={<Person className="w-5 sm:w-6" />}
      >
        Resume
      </Link>
    </div>
  );
};
