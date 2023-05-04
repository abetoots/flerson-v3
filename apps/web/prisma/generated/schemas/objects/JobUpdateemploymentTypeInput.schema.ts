import { z } from "zod";
import { EmploymentTypeSchema } from "../enums/EmploymentType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateemploymentTypeInput> = z
  .object({
    set: z
      .lazy(() => EmploymentTypeSchema)
      .array()
      .optional(),
    push: z
      .union([
        z.lazy(() => EmploymentTypeSchema),
        z.lazy(() => EmploymentTypeSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const JobUpdateemploymentTypeInputObjectSchema = Schema;
