import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobAvgAggregateInputType> = z
  .object({
    priority: z.literal(true).optional(),
  })
  .strict();

export const JobAvgAggregateInputObjectSchema = Schema;
