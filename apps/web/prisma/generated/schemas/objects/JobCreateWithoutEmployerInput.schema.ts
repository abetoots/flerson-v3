import { z } from "zod";
import { JobCreateemploymentTypeInputObjectSchema } from "./JobCreateemploymentTypeInput.schema";
import { EmploymentTypeSchema } from "../enums/EmploymentType.schema";
import { CountrySchema } from "../enums/Country.schema";
import { CategorySchema } from "../enums/Category.schema";
import { TagCreateNestedManyWithoutJobsInputObjectSchema } from "./TagCreateNestedManyWithoutJobsInput.schema";
import { JobSeekerCreateNestedManyWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateNestedManyWithoutSavedJobsInput.schema";
import { JobSeekerCreateNestedManyWithoutAppliedInputObjectSchema } from "./JobSeekerCreateNestedManyWithoutAppliedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateWithoutEmployerInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    howToApply: z.string(),
    employmentType: z
      .union([
        z.lazy(() => JobCreateemploymentTypeInputObjectSchema),
        z.lazy(() => EmploymentTypeSchema).array(),
      ])
      .optional(),
    applicantLocationRequirements: z.lazy(() => CountrySchema).optional(),
    validThrough: z.date().optional().nullable(),
    category: z.lazy(() => CategorySchema),
    directApply: z.boolean(),
    applyUrl: z.string().optional().nullable(),
    applyEmail: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    datePosted: z.date().optional(),
    updatedAt: z.date().optional(),
    priority: z.number(),
    highlight: z.string().optional().nullable(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutJobsInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(() => JobSeekerCreateNestedManyWithoutSavedJobsInputObjectSchema)
      .optional(),
    applicants: z
      .lazy(() => JobSeekerCreateNestedManyWithoutAppliedInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobCreateWithoutEmployerInputObjectSchema = Schema;
