import { z } from "zod";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumEmployerTypeFilterObjectSchema } from "./NestedEnumEmployerTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumEmployerTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => EmployerTypeSchema).optional(),
    in: z
      .lazy(() => EmployerTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => EmployerTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => EmployerTypeSchema),
        z.lazy(() => NestedEnumEmployerTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumEmployerTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumEmployerTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumEmployerTypeWithAggregatesFilterObjectSchema = Schema;
