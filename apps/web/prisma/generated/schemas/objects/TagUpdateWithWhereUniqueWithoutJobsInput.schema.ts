import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithoutJobsInputObjectSchema } from "./TagUpdateWithoutJobsInput.schema";
import { TagUncheckedUpdateWithoutJobsInputObjectSchema } from "./TagUncheckedUpdateWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutJobsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutJobsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutJobsInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpdateWithWhereUniqueWithoutJobsInputObjectSchema = Schema;
