import { z } from "zod";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { JobUncheckedCreateNestedManyWithoutEmployerInputObjectSchema } from "./JobUncheckedCreateNestedManyWithoutEmployerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    logo: z.string().optional().nullable(),
    url: z.string(),
    type: z.lazy(() => EmployerTypeSchema).optional(),
    jobs: z
      .lazy(() => JobUncheckedCreateNestedManyWithoutEmployerInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployerUncheckedCreateInputObjectSchema = Schema;
