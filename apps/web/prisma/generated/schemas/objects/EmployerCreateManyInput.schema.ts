import { z } from "zod";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    logo: z.string().optional().nullable(),
    url: z.string(),
    type: z.lazy(() => EmployerTypeSchema).optional(),
  })
  .strict();

export const EmployerCreateManyInputObjectSchema = Schema;
