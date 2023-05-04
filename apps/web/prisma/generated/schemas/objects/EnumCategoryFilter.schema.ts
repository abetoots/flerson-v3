import { z } from "zod";
import { CategorySchema } from "../enums/Category.schema";
import { NestedEnumCategoryFilterObjectSchema } from "./NestedEnumCategoryFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumCategoryFilter> = z
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

export const EnumCategoryFilterObjectSchema = Schema;
