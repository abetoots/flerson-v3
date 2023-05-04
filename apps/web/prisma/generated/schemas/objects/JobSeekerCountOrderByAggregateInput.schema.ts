import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    savedIds: z.lazy(() => SortOrderSchema).optional(),
    appliedIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const JobSeekerCountOrderByAggregateInputObjectSchema = Schema;
