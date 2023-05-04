import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    howToApply: z.lazy(() => SortOrderSchema).optional(),
    employerId: z.lazy(() => SortOrderSchema).optional(),
    applicantLocationRequirements: z.lazy(() => SortOrderSchema).optional(),
    validThrough: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    directApply: z.lazy(() => SortOrderSchema).optional(),
    applyUrl: z.lazy(() => SortOrderSchema).optional(),
    applyEmail: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    datePosted: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
    highlight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const JobMaxOrderByAggregateInputObjectSchema = Schema;
