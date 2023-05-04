import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { JobOrderByRelationAggregateInputObjectSchema } from "./JobOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    jobIds: z.lazy(() => SortOrderSchema).optional(),
    jobs: z.lazy(() => JobOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
