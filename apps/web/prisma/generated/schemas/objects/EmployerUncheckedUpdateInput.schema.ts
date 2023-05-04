import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { EnumEmployerTypeFieldUpdateOperationsInputObjectSchema } from "./EnumEmployerTypeFieldUpdateOperationsInput.schema";
import { JobUncheckedUpdateManyWithoutEmployerNestedInputObjectSchema } from "./JobUncheckedUpdateManyWithoutEmployerNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerUncheckedUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    logo: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    url: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EmployerTypeSchema),
        z.lazy(() => EnumEmployerTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    jobs: z
      .lazy(() => JobUncheckedUpdateManyWithoutEmployerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployerUncheckedUpdateInputObjectSchema = Schema;
