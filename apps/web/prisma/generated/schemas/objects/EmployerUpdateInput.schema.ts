import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { EmployerTypeSchema } from "../enums/EmployerType.schema";
import { EnumEmployerTypeFieldUpdateOperationsInputObjectSchema } from "./EnumEmployerTypeFieldUpdateOperationsInput.schema";
import { JobUpdateManyWithoutEmployerNestedInputObjectSchema } from "./JobUpdateManyWithoutEmployerNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerUpdateInput> = z
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
      .lazy(() => JobUpdateManyWithoutEmployerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployerUpdateInputObjectSchema = Schema;
