import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagCreateWithoutJobsInputObjectSchema } from "./TagCreateWithoutJobsInput.schema";
import { TagUncheckedCreateWithoutJobsInputObjectSchema } from "./TagUncheckedCreateWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutJobsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutJobsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutJobsInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutJobsInputObjectSchema = Schema;
