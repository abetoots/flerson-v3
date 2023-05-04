import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { EnumEmployerTypeFilterObjectSchema } from "./EnumEmployerTypeFilter.schema";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { JobListRelationFilterObjectSchema } from "./JobListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmployerWhereInputObjectSchema),
        z.lazy(() => EmployerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmployerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmployerWhereInputObjectSchema),
        z.lazy(() => EmployerWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    logo: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    url: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumEmployerTypeFilterObjectSchema),
        z.lazy(() => EmployerTypeSchema),
      ])
      .optional(),
    jobs: z.lazy(() => JobListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EmployerWhereInputObjectSchema = Schema;
