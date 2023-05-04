import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    logo: z.literal(true).optional(),
    url: z.literal(true).optional(),
    type: z.literal(true).optional(),
  })
  .strict();

export const EmployerMinAggregateInputObjectSchema = Schema;
