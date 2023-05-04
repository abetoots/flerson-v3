import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { EnumEmployerTypeWithAggregatesFilterObjectSchema } from "./EnumEmployerTypeWithAggregatesFilter.schema";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmployerScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => EmployerScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmployerScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmployerScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => EmployerScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    logo: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    url: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumEmployerTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => EmployerTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const EmployerScalarWhereWithAggregatesInputObjectSchema = Schema;
