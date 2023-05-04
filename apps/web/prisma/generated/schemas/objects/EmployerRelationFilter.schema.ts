import { z } from "zod";
import { EmployerWhereInputObjectSchema } from "./EmployerWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerRelationFilter> = z
  .object({
    is: z.lazy(() => EmployerWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => EmployerWhereInputObjectSchema).optional(),
  })
  .strict();

export const EmployerRelationFilterObjectSchema = Schema;
