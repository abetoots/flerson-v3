import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";
import { subDays } from "date-fns";
import { DEFAULT_HIGHLIGHT_HEX } from "~/utils/constants";
import type { EmploymentType, Prisma, Category, Job } from "@prisma/client";
import { getRandomItems } from "~/utils/utils";
const db = new PrismaClient();

type Titles =
  | "Full Stack Developer"
  | "Virtual Assistant"
  | "Social Media Manager"
  | "Graphic Designer"
  | "Copywriter";

const titles: Titles[] = [
  "Full Stack Developer",
  "Virtual Assistant",
  "Social Media Manager",
  "Graphic Designer",
  "Copywriter",
];

const employmentTypes: EmploymentType[] = [
  "FULL_TIME",
  "PART_TIME",
  "CONTRACTOR",
  "OTHER",
  "TEMPORARY",
];

const programmingTags = [
  "typescript",
  "node",
  "react",
  "svelte",
  "rust",
  "solid",
  "c++",
  "vue",
  "angular",
  "php",
  "go",
  "java",
  "python",
  "laravel",
  "docker",
  "aws",
];
const marketingTags = ["facebook", "twitter", "tiktok", "pinterest", "email"];

const designTags = [
  "photoshop",
  "illustrator",
  "canva",
  "logo design",
  "adobe xd",
];

const vaTags = ["excel", "admin", "data entry", "smm", "customer service"];

const copyWritingTags = ["copywriting", "contentwriting"];

const hexColors = [
  "#D0EFB1",
  "#D0EFB1",
  "#613A3A",
  "#D8B4E2",
  "#55286F",
  "#E5F993",
  "#44FFD1",
  "#90FCF9",
  null,
  DEFAULT_HIGHLIGHT_HEX,
];

const priorities = [1, 2, 3];

const now = new Date();
const yesterday = subDays(now, 1);
const pastWeek = subDays(now, 7);
const past30days = subDays(now, 25);

const dates = [now, yesterday, pastWeek, past30days];

function getRandomJob(
  employers: Prisma.EmployerCreateInput[],
  jobseekers: Prisma.JobSeekerCreateInput[]
): Prisma.JobCreateInput {
  const title = getRandomItems(titles, 1)[0] as Titles;
  const date = getRandomItems(dates, 1)[0];
  const employer = getRandomItems(employers, 1)[0];
  const empType = getRandomItems(employmentTypes);
  const priority = getRandomItems(priorities, 1)[0] as 1 | 2 | 3;
  const savedBy = getRandomItems(jobseekers);
  let tagsToUse: string[] = [];
  let category: Category = "NonTech";
  if (title === "Full Stack Developer") {
    tagsToUse = programmingTags;
    category = "Programming";
  }
  if (title === "Virtual Assistant") {
    tagsToUse = vaTags;
    category = "VA";
  }
  if (title === "Social Media Manager") {
    tagsToUse = marketingTags;
    category = "Marketing";
  }

  if (title === "Graphic Designer") {
    tagsToUse = designTags;
    category = "Design";
  }
  if (title === "Copywriter") {
    tagsToUse = copyWritingTags;
    category = "Writing";
  }
  const tags = getRandomItems(tagsToUse);
  const highlight = getRandomItems(hexColors, 1)[0];

  return {
    title,
    applyEmail: null,
    applyUrl: null,
    applicantLocationRequirements: "Worldwide",
    category,
    imageUrl: null,
    datePosted: date,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    directApply: false,
    employer: {
      connect: {
        id: employer?.id,
      },
    },
    employmentType: empType,
    howToApply:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    priority,
    savedBy: {
      connect: savedBy.map((i) => ({ id: i.id })),
    },
    tags: {
      connectOrCreate: tags.map((t) => ({
        create: { name: t },
        where: { name: t },
      })),
    },
    updatedAt: date,
    validThrough: null,
    highlight,
  };
}

function getEmployers() {
  const employers: Prisma.EmployerCreateInput[] = [
    {
      id: new ObjectId().toString(),
      name: "Flerson",
      logo: null,
      type: "COMPANY",
      url: "https://flerson.com",
    },
    {
      id: new ObjectId().toString(),
      name: "WrittenTrove",
      logo: null,
      type: "COMPANY",
      url: "https://writtentrove.com",
    },
    {
      id: new ObjectId().toString(),
      name: "Kuzuli",
      logo: null,
      type: "SINGLE",
      url: "https://kuzuli.com",
    },
  ];
  return employers;
}

function getJobSeekers() {
  const jobseekers: Prisma.JobSeekerCreateInput[] = [
    {
      id: new ObjectId().toString(),
      email: "sample@email.com",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: new ObjectId().toString(),
      email: "sample2@email.com",
      firstName: "Mark",
      lastName: "Kram",
    },
  ];

  return jobseekers;
}

async function resetDb() {
  await db.job.deleteMany({});
  await db.jobSeeker.deleteMany({});
  await db.employer.deleteMany({});
  await db.tag.deleteMany({});
}

async function seed(iterations = 1) {
  const employers = getEmployers();
  const jobseekers = getJobSeekers();
  await Promise.all([
    ...employers.map((item) => db.employer.create({ data: item })),
    ...jobseekers.map((item) => db.jobSeeker.create({ data: item })),
  ]);

  const batchQueries: Prisma.Prisma__JobClient<Job, never>[] = [];

  for (let i = 0; i < iterations; i++) {
    batchQueries.push(
      db.job.create({ data: getRandomJob(employers, jobseekers) })
    );
  }

  await db.$transaction(batchQueries);
}

await resetDb();
await seed(50);
