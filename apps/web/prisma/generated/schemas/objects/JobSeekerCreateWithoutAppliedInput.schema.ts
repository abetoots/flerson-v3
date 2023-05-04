import { z } from "zod";
import { JobCreateNestedManyWithoutSavedByInputObjectSchema } from "./JobCreateNestedManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateWithoutAppliedInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    savedJobs: z
      .lazy(() => JobCreateNestedManyWithoutSavedByInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerCreateWithoutAppliedInputObjectSchema = Schema;
