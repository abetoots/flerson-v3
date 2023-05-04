import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithoutJobsInputObjectSchema } from "./TagUpdateWithoutJobsInput.schema";
import { TagUncheckedUpdateWithoutJobsInputObjectSchema } from "./TagUncheckedUpdateWithoutJobsInput.schema";
import { TagCreateWithoutJobsInputObjectSchema } from "./TagCreateWithoutJobsInput.schema";
import { TagUncheckedCreateWithoutJobsInputObjectSchema } from "./TagUncheckedCreateWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutJobsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutJobsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutJobsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutJobsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutJobsInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithWhereUniqueWithoutJobsInputObjectSchema = Schema;
