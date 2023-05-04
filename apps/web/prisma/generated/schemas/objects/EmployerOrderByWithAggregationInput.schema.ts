import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { EmployerCountOrderByAggregateInputObjectSchema } from "./EmployerCountOrderByAggregateInput.schema";
import { EmployerMaxOrderByAggregateInputObjectSchema } from "./EmployerMaxOrderByAggregateInput.schema";
import { EmployerMinOrderByAggregateInputObjectSchema } from "./EmployerMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    logo: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EmployerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EmployerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EmployerMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EmployerOrderByWithAggregationInputObjectSchema = Schema;
