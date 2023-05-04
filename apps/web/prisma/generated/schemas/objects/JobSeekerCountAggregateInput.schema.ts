import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    email: z.literal(true).optional(),
    savedIds: z.literal(true).optional(),
    appliedIds: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const JobSeekerCountAggregateInputObjectSchema = Schema;
