import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { TagUpdatejobIdsInputObjectSchema } from "./TagUpdatejobIdsInput.schema";
import { JobUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from "./JobUncheckedUpdateManyWithoutTagsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    jobIds: z
      .union([
        z.lazy(() => TagUpdatejobIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    jobs: z
      .lazy(() => JobUncheckedUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
