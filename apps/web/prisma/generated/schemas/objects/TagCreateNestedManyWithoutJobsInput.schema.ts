import { z } from "zod";
import { TagCreateWithoutJobsInputObjectSchema } from "./TagCreateWithoutJobsInput.schema";
import { TagUncheckedCreateWithoutJobsInputObjectSchema } from "./TagUncheckedCreateWithoutJobsInput.schema";
import { TagCreateOrConnectWithoutJobsInputObjectSchema } from "./TagCreateOrConnectWithoutJobsInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateNestedManyWithoutJobsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutJobsInputObjectSchema),
        z.lazy(() => TagCreateWithoutJobsInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutJobsInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutJobsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutJobsInputObjectSchema),
        z.lazy(() => TagCreateOrConnectWithoutJobsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagCreateNestedManyWithoutJobsInputObjectSchema = Schema;
