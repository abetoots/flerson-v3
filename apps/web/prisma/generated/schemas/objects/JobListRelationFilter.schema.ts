import { z } from "zod";
import { JobWhereInputObjectSchema } from "./JobWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobListRelationFilter> = z
  .object({
    every: z.lazy(() => JobWhereInputObjectSchema).optional(),
    some: z.lazy(() => JobWhereInputObjectSchema).optional(),
    none: z.lazy(() => JobWhereInputObjectSchema).optional(),
  })
  .strict();

export const JobListRelationFilterObjectSchema = Schema;
