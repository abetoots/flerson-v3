import { z } from "zod";
import { TagCreatejobIdsInputObjectSchema } from "./TagCreatejobIdsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    jobIds: z
      .union([
        z.lazy(() => TagCreatejobIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const TagCreateManyInputObjectSchema = Schema;
