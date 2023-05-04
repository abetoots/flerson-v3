import { z } from "zod";
import { JobCreateNestedManyWithoutTagsInputObjectSchema } from "./JobCreateNestedManyWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    jobs: z
      .lazy(() => JobCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
