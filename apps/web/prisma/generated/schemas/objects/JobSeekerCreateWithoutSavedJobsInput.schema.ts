import { z } from "zod";
import { JobCreateNestedManyWithoutApplicantsInputObjectSchema } from "./JobCreateNestedManyWithoutApplicantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateWithoutSavedJobsInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    applied: z
      .lazy(() => JobCreateNestedManyWithoutApplicantsInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerCreateWithoutSavedJobsInputObjectSchema = Schema;
