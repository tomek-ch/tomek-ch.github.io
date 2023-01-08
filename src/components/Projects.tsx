import type { Project } from "../utils/types";
import { HeroLayout } from "./HeroLayout";
import { ExternalLink } from "./icons/ExternalLink";
import { Link } from "./Link";
import { SecondaryHeading } from "./SecondaryHeading";

type ProjectsProps = {
  projects: Project[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="mb-20">
      <SecondaryHeading className="mb-6 sm:mb-8">
        Personal projects
      </SecondaryHeading>
      <div className="flex flex-col gap-20">
        {projects.map(
          ({ url, frontmatter: { title, description, heroImg } }, idx) => (
            <HeroLayout
              body={description}
              img={heroImg}
              title={title}
              href={url}
              reverse={idx % 2 !== 0}
              links={
                <Link
                  icon={<ExternalLink width="16" />}
                  href={url}
                  className="mt-2"
                  variant="primary"
                >
                  Read more
                </Link>
              }
            />
          )
        )}
      </div>
    </div>
  );
};
