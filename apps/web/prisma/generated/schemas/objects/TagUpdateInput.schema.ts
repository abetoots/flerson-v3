import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { JobUpdateManyWithoutTagsNestedInputObjectSchema } from "./JobUpdateManyWithoutTagsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    jobs: z
      .lazy(() => JobUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateInputObjectSchema = Schema;
