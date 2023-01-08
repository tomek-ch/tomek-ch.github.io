import type { ProjectMeta } from "../utils/types";
import { HeroLayout } from "./HeroLayout";
import { ExternalLink } from "./icons/ExternalLink";
import { GitHub } from "./icons/GitHub";
import { Link } from "./Link";

type ProjectHeroProps = {
  project: ProjectMeta;
};

export const ProjectHero = ({
  project: { description, heroImg, title, liveLink, linkText, githubLink },
}: ProjectHeroProps) => {
  return (
    <HeroLayout
      body={description}
      img={heroImg}
      title={title}
      links={
        <>
          <Link
            href={liveLink}
            icon={<ExternalLink width="16" />}
            variant="primary"
            target="_blank"
          >
            {linkText}
          </Link>
          <Link
            icon={<GitHub width="16" />}
            href={githubLink}
            target="_blank"
            className="text-black dark:text-white"
          >
            Code
          </Link>
        </>
      }
    />
  );
};
