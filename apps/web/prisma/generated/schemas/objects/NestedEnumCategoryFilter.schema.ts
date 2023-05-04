import { z } from "zod";
import { CategorySchema } from "../enums/Category.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumCategoryFilter> = z
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
        z.lazy(() => NestedEnumCategoryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumCategoryFilterObjectSchema = Schema;
