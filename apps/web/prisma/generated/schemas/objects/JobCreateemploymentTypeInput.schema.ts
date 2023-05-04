import { z } from "zod";
import { EmploymentTypeSchema } from "../enums/EmploymentType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateemploymentTypeInput> = z
  .object({
    set: z.lazy(() => EmploymentTypeSchema).array(),
  })
  .strict();

export const JobCreateemploymentTypeInputObjectSchema = Schema;
