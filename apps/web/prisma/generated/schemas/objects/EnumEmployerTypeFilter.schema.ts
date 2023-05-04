import { z } from "zod";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { NestedEnumEmployerTypeFilterObjectSchema } from "./NestedEnumEmployerTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumEmployerTypeFilter> = z
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
        z.lazy(() => NestedEnumEmployerTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumEmployerTypeFilterObjectSchema = Schema;
