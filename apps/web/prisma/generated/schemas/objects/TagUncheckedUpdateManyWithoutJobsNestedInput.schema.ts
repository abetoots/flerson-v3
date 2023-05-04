import { z } from "zod";
import { TagCreateWithoutJobsInputObjectSchema } from "./TagCreateWithoutJobsInput.schema";
import { TagUncheckedCreateWithoutJobsInputObjectSchema } from "./TagUncheckedCreateWithoutJobsInput.schema";
import { TagCreateOrConnectWithoutJobsInputObjectSchema } from "./TagCreateOrConnectWithoutJobsInput.schema";
import { TagUpsertWithWhereUniqueWithoutJobsInputObjectSchema } from "./TagUpsertWithWhereUniqueWithoutJobsInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithWhereUniqueWithoutJobsInputObjectSchema } from "./TagUpdateWithWhereUniqueWithoutJobsInput.schema";
import { TagUpdateManyWithWhereWithoutJobsInputObjectSchema } from "./TagUpdateManyWithWhereWithoutJobsInput.schema";
import { TagScalarWhereInputObjectSchema } from "./TagScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutJobsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => TagUpsertWithWhereUniqueWithoutJobsInputObjectSchema),
        z
          .lazy(() => TagUpsertWithWhereUniqueWithoutJobsInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TagUpdateWithWhereUniqueWithoutJobsInputObjectSchema),
        z
          .lazy(() => TagUpdateWithWhereUniqueWithoutJobsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TagUpdateManyWithWhereWithoutJobsInputObjectSchema),
        z
          .lazy(() => TagUpdateManyWithWhereWithoutJobsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TagScalarWhereInputObjectSchema),
        z.lazy(() => TagScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateManyWithoutJobsNestedInputObjectSchema = Schema;
