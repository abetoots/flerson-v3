import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => JobSeekerScalarWhereInputObjectSchema),
        z.lazy(() => JobSeekerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => JobSeekerScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => JobSeekerScalarWhereInputObjectSchema),
        z.lazy(() => JobSeekerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    savedIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    appliedIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const JobSeekerScalarWhereInputObjectSchema = Schema;
