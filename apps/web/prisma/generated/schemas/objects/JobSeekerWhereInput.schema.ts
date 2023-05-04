import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema";
import { JobListRelationFilterObjectSchema } from "./JobListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => JobSeekerWhereInputObjectSchema),
        z.lazy(() => JobSeekerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => JobSeekerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => JobSeekerWhereInputObjectSchema),
        z.lazy(() => JobSeekerWhereInputObjectSchema).array(),
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
    savedJobs: z.lazy(() => JobListRelationFilterObjectSchema).optional(),
    applied: z.lazy(() => JobListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const JobSeekerWhereInputObjectSchema = Schema;
