import { z } from "zod";
import { JobCreateNestedManyWithoutSavedByInputObjectSchema } from "./JobCreateNestedManyWithoutSavedByInput.schema";
import { JobCreateNestedManyWithoutApplicantsInputObjectSchema } from "./JobCreateNestedManyWithoutApplicantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    savedJobs: z
      .lazy(() => JobCreateNestedManyWithoutSavedByInputObjectSchema)
      .optional(),
    applied: z
      .lazy(() => JobCreateNestedManyWithoutApplicantsInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerCreateInputObjectSchema = Schema;
