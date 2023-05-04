import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { JobOrderByRelationAggregateInputObjectSchema } from "./JobOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    savedIds: z.lazy(() => SortOrderSchema).optional(),
    appliedIds: z.lazy(() => SortOrderSchema).optional(),
    savedJobs: z
      .lazy(() => JobOrderByRelationAggregateInputObjectSchema)
      .optional(),
    applied: z
      .lazy(() => JobOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerOrderByWithRelationInputObjectSchema = Schema;
