import { PrismaClient } from "@prisma/client";
import type { Job, Employer, JobSeeker } from "@prisma/client";
import { ObjectId } from "mongodb";
import { subDays } from "date-fns";
import { DEFAULT_HIGHLIGHT_HEX } from "~/utils/constants";
const db = new PrismaClient();

async function seed() {
  await Promise.all([
    ...getJobs().map((job) => {
      return db.job.create({ data: job });
    }),
    ...getEmployers().map((emp) => db.employer.create({ data: emp })),
    ...getJobSeekers().map((seeker) => db.jobSeeker.create({ data: seeker })),
  ]);
}

const job1Id = new ObjectId().toString();
const job2Id = new ObjectId().toString();
const job3Id = new ObjectId().toString();

const employer1Id = new ObjectId().toString();
const employer1Name = "Flerson";
const employer2Id = new ObjectId().toString();
const employer2Name = "WrittenTrove";
const employer3Id = new ObjectId().toString();
const employer3Name = "Kuzuli";

const jobseeker1Id = new ObjectId().toString();
const jobseeker2Id = new ObjectId().toString();

const category1Id = new ObjectId().toString();
const category2Id = new ObjectId().toString();
const category3Id = new ObjectId().toString();

const now = new Date();
const yesterday = subDays(now, 1);
const lastweek = subDays(now, 7);

function getJobs(): Job[] {
  return [
    {
      id: job1Id,
      title: "Social Media Manager",
      applyEmail: null,
      applyUrl: null,
      applicantLocationRequirements: "Antarctica",
      applicantIds: [jobseeker1Id],
      categories: ["Marketing"],
      datePosted: now,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      directApply: true,
      employerId: employer1Id,
      employerName: employer1Name,
      employmentType: ["FULL_TIME"],
      howToApply:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      priority: 1,
      savedByIds: [jobseeker1Id],
      tagIds: [],
      updatedAt: now,
      validThrough: null,
      highlight: null,
    },
    {
      id: job2Id,
      title: "Virtual Assistant",
      applyEmail: null,
      applyUrl: null,
      applicantLocationRequirements: "Philippines",
      applicantIds: [jobseeker2Id],
      categories: ["VA"],
      datePosted: yesterday,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      directApply: true,
      employerId: employer2Id,
      employerName: employer2Name,
      employmentType: ["FULL_TIME", "PART_TIME"],
      howToApply:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      priority: 2,
      savedByIds: [jobseeker2Id],
      tagIds: [],
      updatedAt: yesterday,
      validThrough: null,
      highlight: DEFAULT_HIGHLIGHT_HEX,
    },
    {
      id: job3Id,
      title: "Full Stack Developer",
      applyEmail: null,
      applyUrl: null,
      applicantLocationRequirements: "Worldwide",
      applicantIds: [],
      categories: ["Programming"],
      datePosted: lastweek,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      directApply: true,
      employerId: job3Id,
      employerName: employer2Name,
      employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
      howToApply:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      priority: 3,
      savedByIds: [jobseeker1Id, jobseeker2Id],
      tagIds: [],
      updatedAt: lastweek,
      validThrough: null,
      highlight: DEFAULT_HIGHLIGHT_HEX,
    },
  ];
}

function getEmployers(): Employer[] {
  return [
    {
      id: employer1Id,
      name: employer1Name,
      logo: null,
      type: "COMPANY",
      url: "https://flerson.com",
    },
    {
      id: employer2Id,
      name: employer2Name,
      logo: null,
      type: "COMPANY",
      url: "https://writtentrove.com",
    },
    {
      id: employer3Id,
      name: employer3Name,
      logo: null,
      type: "SINGLE",
      url: "https://kuzuli.com",
    },
  ];
}

function getJobSeekers(): JobSeeker[] {
  return [
    {
      id: jobseeker1Id,
      appliedIds: [job1Id],
      email: "sample@email.com",
      firstName: "John",
      lastName: "Doe",
      savedIds: [job1Id, job3Id],
    },
    {
      id: jobseeker2Id,
      appliedIds: [job2Id],
      email: "sample2@email.com",
      firstName: "Mark",
      lastName: "Kram",
      savedIds: [job2Id, job3Id],
    },
  ];
}

await seed();
