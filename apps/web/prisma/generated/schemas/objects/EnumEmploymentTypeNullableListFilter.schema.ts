import { z } from "zod";
import { EmploymentTypeSchema } from "../enums/EmploymentType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumEmploymentTypeNullableListFilter> = z
  .object({
    equals: z
      .lazy(() => EmploymentTypeSchema)
      .array()
      .optional()
      .nullable(),
    has: z
      .lazy(() => EmploymentTypeSchema)
      .optional()
      .nullable(),
    hasEvery: z
      .lazy(() => EmploymentTypeSchema)
      .array()
      .optional(),
    hasSome: z
      .lazy(() => EmploymentTypeSchema)
      .array()
      .optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict();

export const EnumEmploymentTypeNullableListFilterObjectSchema = Schema;
