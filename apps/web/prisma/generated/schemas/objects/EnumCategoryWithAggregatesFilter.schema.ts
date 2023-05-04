import { z } from "zod";
import { CategorySchema } from "../enums/Category.schema";
import { NestedEnumCategoryWithAggregatesFilterObjectSchema } from "./NestedEnumCategoryWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumCategoryFilterObjectSchema } from "./NestedEnumCategoryFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumCategoryWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => CategorySchema).optional(),
    in: z
      .lazy(() => CategorySchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => CategorySchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => CategorySchema),
        z.lazy(() => NestedEnumCategoryWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumCategoryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumCategoryFilterObjectSchema).optional(),
  })
  .strict();

export const EnumCategoryWithAggregatesFilterObjectSchema = Schema;
