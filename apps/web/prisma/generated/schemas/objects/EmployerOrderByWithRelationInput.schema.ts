import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { JobOrderByRelationAggregateInputObjectSchema } from "./JobOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    logo: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    jobs: z.lazy(() => JobOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EmployerOrderByWithRelationInputObjectSchema = Schema;
