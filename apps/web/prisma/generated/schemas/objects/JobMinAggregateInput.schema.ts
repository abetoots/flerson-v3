import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    howToApply: z.literal(true).optional(),
    employerId: z.literal(true).optional(),
    applicantLocationRequirements: z.literal(true).optional(),
    validThrough: z.literal(true).optional(),
    category: z.literal(true).optional(),
    directApply: z.literal(true).optional(),
    applyUrl: z.literal(true).optional(),
    applyEmail: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
    datePosted: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    priority: z.literal(true).optional(),
    highlight: z.literal(true).optional(),
  })
  .strict();

export const JobMinAggregateInputObjectSchema = Schema;
