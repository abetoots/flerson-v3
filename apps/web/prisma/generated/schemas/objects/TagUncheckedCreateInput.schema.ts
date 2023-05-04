import { z } from "zod";
import { TagCreatejobIdsInputObjectSchema } from "./TagCreatejobIdsInput.schema";
import { JobUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from "./JobUncheckedCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    jobIds: z
      .union([
        z.lazy(() => TagCreatejobIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    jobs: z
      .lazy(() => JobUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
