import { z } from "zod";
import { JobCreateemploymentTypeInputObjectSchema } from "./JobCreateemploymentTypeInput.schema";
import { EmploymentTypeSchema } from "../enums/EmploymentType.schema";
import { CountrySchema } from "../enums/Country.schema";
import { CategorySchema } from "../enums/Category.schema";
import { JobCreatetagIdsInputObjectSchema } from "./JobCreatetagIdsInput.schema";
import { JobCreatesavedByIdsInputObjectSchema } from "./JobCreatesavedByIdsInput.schema";
import { JobCreateapplicantIdsInputObjectSchema } from "./JobCreateapplicantIdsInput.schema";
import { TagUncheckedCreateNestedManyWithoutJobsInputObjectSchema } from "./TagUncheckedCreateNestedManyWithoutJobsInput.schema";
import { JobSeekerUncheckedCreateNestedManyWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedCreateNestedManyWithoutSavedJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUncheckedCreateWithoutApplicantsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    howToApply: z.string(),
    employerId: z.string(),
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
    tagIds: z
      .union([
        z.lazy(() => JobCreatetagIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    datePosted: z.date().optional(),
    updatedAt: z.date().optional(),
    savedByIds: z
      .union([
        z.lazy(() => JobCreatesavedByIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    applicantIds: z
      .union([
        z.lazy(() => JobCreateapplicantIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    priority: z.number(),
    highlight: z.string().optional().nullable(),
    tags: z
      .lazy(() => TagUncheckedCreateNestedManyWithoutJobsInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(
        () =>
          JobSeekerUncheckedCreateNestedManyWithoutSavedJobsInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const JobUncheckedCreateWithoutApplicantsInputObjectSchema = Schema;
