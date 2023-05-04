import { z } from "zod";
import { JobSeekerCreatesavedIdsInputObjectSchema } from "./JobSeekerCreatesavedIdsInput.schema";
import { JobSeekerCreateappliedIdsInputObjectSchema } from "./JobSeekerCreateappliedIdsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateManyInput> = z
  .object({
    id: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    savedIds: z
      .union([
        z.lazy(() => JobSeekerCreatesavedIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    appliedIds: z
      .union([
        z.lazy(() => JobSeekerCreateappliedIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const JobSeekerCreateManyInputObjectSchema = Schema;
