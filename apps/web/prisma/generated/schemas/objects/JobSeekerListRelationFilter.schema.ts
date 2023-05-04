import { z } from "zod";
import { JobSeekerWhereInputObjectSchema } from "./JobSeekerWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerListRelationFilter> = z
  .object({
    every: z.lazy(() => JobSeekerWhereInputObjectSchema).optional(),
    some: z.lazy(() => JobSeekerWhereInputObjectSchema).optional(),
    none: z.lazy(() => JobSeekerWhereInputObjectSchema).optional(),
  })
  .strict();

export const JobSeekerListRelationFilterObjectSchema = Schema;
