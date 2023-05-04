import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { JobSeekerCountOrderByAggregateInputObjectSchema } from "./JobSeekerCountOrderByAggregateInput.schema";
import { JobSeekerMaxOrderByAggregateInputObjectSchema } from "./JobSeekerMaxOrderByAggregateInput.schema";
import { JobSeekerMinOrderByAggregateInputObjectSchema } from "./JobSeekerMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    savedIds: z.lazy(() => SortOrderSchema).optional(),
    appliedIds: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => JobSeekerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => JobSeekerMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => JobSeekerMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerOrderByWithAggregationInputObjectSchema = Schema;
