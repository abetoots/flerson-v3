import { z } from "zod";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { JobCreateNestedManyWithoutEmployerInputObjectSchema } from "./JobCreateNestedManyWithoutEmployerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    logo: z.string().optional().nullable(),
    url: z.string(),
    type: z.lazy(() => EmployerTypeSchema).optional(),
    jobs: z
      .lazy(() => JobCreateNestedManyWithoutEmployerInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployerCreateInputObjectSchema = Schema;
