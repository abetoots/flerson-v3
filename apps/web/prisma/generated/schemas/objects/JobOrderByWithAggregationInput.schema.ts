import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { JobCountOrderByAggregateInputObjectSchema } from "./JobCountOrderByAggregateInput.schema";
import { JobAvgOrderByAggregateInputObjectSchema } from "./JobAvgOrderByAggregateInput.schema";
import { JobMaxOrderByAggregateInputObjectSchema } from "./JobMaxOrderByAggregateInput.schema";
import { JobMinOrderByAggregateInputObjectSchema } from "./JobMinOrderByAggregateInput.schema";
import { JobSumOrderByAggregateInputObjectSchema } from "./JobSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    howToApply: z.lazy(() => SortOrderSchema).optional(),
    employerId: z.lazy(() => SortOrderSchema).optional(),
    employmentType: z.lazy(() => SortOrderSchema).optional(),
    applicantLocationRequirements: z.lazy(() => SortOrderSchema).optional(),
    validThrough: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    directApply: z.lazy(() => SortOrderSchema).optional(),
    applyUrl: z.lazy(() => SortOrderSchema).optional(),
    applyEmail: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    tagIds: z.lazy(() => SortOrderSchema).optional(),
    datePosted: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    savedByIds: z.lazy(() => SortOrderSchema).optional(),
    applicantIds: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
    highlight: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => JobCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => JobAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => JobMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => JobMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => JobSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const JobOrderByWithAggregationInputObjectSchema = Schema;
