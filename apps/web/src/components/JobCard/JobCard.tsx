//Components
import Tags from "~/components/Tags/Tags";
import Focus from "~/components/hoc/Focus/Focus";
import Image from "next/image";
import BlurImage from "~/components/BlurImage/BlurImage";
import Link from "next/link";
import { H2, H3 } from "~/components/typography";

//Misc
import React, { forwardRef } from "react";
import styles from "./JobCard.module.scss";
import classNames from "classnames";

//Types
import type { Job, Employer, Category } from "@prisma/client";
import type { LinkProps } from "next/link";
import type { TagsProps } from "~/components/Tags/Tags";

export type JobCardProps = {
  category: Category;
  href: LinkProps["href"];
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
};

const JobCard = forwardRef<HTMLAnchorElement, JobCardProps>(
  (
    {
      jobTitle,
      location,
      employerWebsite,
      employerName,
      highlightColor,
      imageUrl,
      tags,
      href,
      category,
      onTagClick,
      onApply,
    },
    ref
  ) => {
    const subStr = employerName.toUpperCase().split(" ");
    const firstname = subStr[0] as string;
    const lastname = subStr[1];
    const initials = `${firstname.charAt(0)}${
      lastname ? lastname.charAt(0) : ""
    }`;

    let companyName: React.ReactNode;
    if (employerWebsite) {
      companyName = (
        <a
          className="hover:text-primary"
          href={employerWebsite}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {employerName}
        </a>
      );
    } else {
      companyName = employerName;
    }

    let image = (
      <div className={styles.JobCard__initialsWrap}>
        <div className={styles.JobCard__initials}>{initials}</div>
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
      <Focus applyClassName={styles._focused} keyBoardOnly>
        <Link
          href={href}
          className={classNames(
            styles.JobCard,
            "flerson-paper mb-6 cursor-pointer items-center gap-2 visited:text-black hover:bg-accent-bg-2 md:grid md:grid-cols-4"
          )}
          style={{
            backgroundColor: highlightColor || undefined,
          }}
          ref={ref}
        >
          <section>{image}</section>

          <section>
            <H3 className="mb-1 font-bold">{companyName}</H3>
            <H2 className="mb-3 font-bold">{jobTitle}</H2>
            <p className="text-sm text-gray-500">
              Accepts: <span className="text-gray-900">{location}</span>
            </p>
          </section>

          <section className={styles.JobCard__tags}>
            <Tags
              classes={{
                tag: styles.JobCard__tag,
                primaryTag: `${styles.JobCard__tag || ""} ${
                  styles._primary || ""
                }`,
              }}
              primaryTag={category}
              tags={tags}
              onClick={onTagClick}
            />
          </section>

          <section>
            <JobApplyButton onApply={onApply} />
          </section>
        </Link>
      </Focus>
    );
  }
);

JobCard.displayName = "JobCard";

type JobApplyButtonProps = {
  className?: string;
  onApply: React.MouseEventHandler<HTMLButtonElement>;
};

export const JobApplyButton = (props: JobApplyButtonProps) => (
  <button
    onClick={props.onApply}
    className={classNames(styles.JobApplyButton, props.className)}
  >
    Apply
  </button>
);

export default JobCard;
