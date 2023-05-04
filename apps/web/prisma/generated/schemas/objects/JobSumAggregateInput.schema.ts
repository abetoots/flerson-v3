import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSumAggregateInputType> = z
  .object({
    priority: z.literal(true).optional(),
  })
  .strict();

export const JobSumAggregateInputObjectSchema = Schema;
