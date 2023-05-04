import { z } from "zod";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumEmployerTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => EmployerTypeSchema).optional(),
  })
  .strict();

export const EnumEmployerTypeFieldUpdateOperationsInputObjectSchema = Schema;
