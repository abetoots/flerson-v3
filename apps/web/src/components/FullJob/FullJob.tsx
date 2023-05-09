//Components
import Tags from "~/components/Tags/Tags";
import BlurImage from "~/components/BlurImage/BlurImage";
import Image from "next/image";
import { H1, H2 } from "~/components/typography";

//Misc
import classNames from "classnames";

//Types
import type { TagsProps } from "~/components/Tags/Tags";
import type {
  BaseSalary,
  Category,
  Employer,
  EmploymentType,
  Job,
} from "@prisma/client";

export type FullJobProps = {
  category: Category;
  tags: TagsProps["tags"];
  location: Job["applicantLocationRequirements"];
  jobTitle: Job["title"];
  highlightColor: Job["highlight"];
  employerName: Employer["name"];
  employerWebsite: Employer["url"];
  onTagClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tag: string,
    isPrimaryTag: boolean
  ) => void;
  imageUrl: Job["imageUrl"];
  onApply: JobApplyButtonProps["onApply"];
  description: string;
  howToApply: string;
  salary: BaseSalary;
  employmentType: EmploymentType[];
};

const FullJob = ({
  employerName,
  description,
  howToApply,
  imageUrl,
  jobTitle,
  location,
  salary,
  employmentType,
  employerWebsite,
  category,
  onApply,
  onTagClick,
  tags,
}: FullJobProps) => {
  const subStr = employerName.toUpperCase().split(" ");
  const initials = `${subStr[0]?.charAt(0) || ""}${
    subStr[1] ? subStr[1].charAt(0) : ""
  }`;

  let renderDescription;
  if (description) {
    renderDescription = (
      <>
        <H2 className="mb-3">Job Description:</H2>
        {description}
      </>
    );
  }

  let renderHowToApply;
  if (howToApply) {
    renderHowToApply = (
      <>
        <H2 className="mb-3">How To Apply:</H2>
        {howToApply}
      </>
    );
  }

  let image = (
    <div className="mx-auto">
      <div className="flerson-initials">{initials}</div>
    </div>
  );
  if (imageUrl) {
    //https://nextjs.org/docs/api-reference/next/image
    image = (
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          fill
          sizes=""
          style={{ objectFit: "cover" }}
          alt={`${jobTitle} image`}
          placeholder="blur"
          blurDataURL={BlurImage}
        />
      </div>
    );
  }

  return (
    <div className="flerson-paper m-6 mx-auto md:max-w-screen-lg">
      <div className="mb-6">
        <section className="mb-6 w-full ">{image}</section>
        <section className="mb-6 md:w-full md:text-center">
          <div className="mb-6">
            <H1 className="mb-6">{jobTitle}</H1>
            <H2 className="mb-3">
              <a
                className="text-blue-800 visited:text-purple-900 hover:underline"
                href={employerWebsite}
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {employerName}
              </a>
            </H2>
            <p>
              Accepts: <span>{location}</span>
            </p>
          </div>
          <div>
            <p>
              Salary:{" "}
              <span className="font-semibold">
                {salary.maxValue
                  ? `${salary.value} - ${salary.maxValue}`
                  : salary.value}{" "}
                {salary.currency}
              </span>
            </p>
            <p>
              Salary Type: <span>{salary.unitType}</span>
            </p>
            <p>
              Employment: <span> {employmentType.join(", ")}</span>
            </p>
          </div>
        </section>

        <section className="mb-6 md:w-full md:text-center">
          <Tags
            classes={{
              tag: "flerson-tag",
              primaryTag: "flerson-tag",
            }}
            primaryTag={category}
            tags={tags}
            onClick={onTagClick}
          />
        </section>
        <section className="mx-auto text-center">
          <JobApplyButton className=" max-w-xl" onApply={onApply} />
        </section>
      </div>
      <div>
        <section className="mb-6">{renderDescription}</section>
        <section className="mb-6">{renderHowToApply}</section>
      </div>
    </div>
  );
};

export default FullJob;

type JobApplyButtonProps = {
  className?: string;
  onApply: React.MouseEventHandler<HTMLButtonElement>;
};

export const JobApplyButton = (props: JobApplyButtonProps) => (
  <button
    onClick={props.onApply}
    className={classNames("flerson-applybtn", props.className)}
  >
    Apply
  </button>
);
