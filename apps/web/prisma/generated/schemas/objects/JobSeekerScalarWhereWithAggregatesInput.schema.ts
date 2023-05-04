import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => JobSeekerScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => JobSeekerScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => JobSeekerScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => JobSeekerScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => JobSeekerScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    savedIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    appliedIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const JobSeekerScalarWhereWithAggregatesInputObjectSchema = Schema;
