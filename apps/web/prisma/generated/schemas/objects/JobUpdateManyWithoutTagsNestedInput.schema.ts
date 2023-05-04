import { z } from "zod";
import { JobCreateWithoutTagsInputObjectSchema } from "./JobCreateWithoutTagsInput.schema";
import { JobUncheckedCreateWithoutTagsInputObjectSchema } from "./JobUncheckedCreateWithoutTagsInput.schema";
import { JobCreateOrConnectWithoutTagsInputObjectSchema } from "./JobCreateOrConnectWithoutTagsInput.schema";
import { JobUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from "./JobUpsertWithWhereUniqueWithoutTagsInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from "./JobUpdateWithWhereUniqueWithoutTagsInput.schema";
import { JobUpdateManyWithWhereWithoutTagsInputObjectSchema } from "./JobUpdateManyWithWhereWithoutTagsInput.schema";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateManyWithoutTagsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => JobCreateWithoutTagsInputObjectSchema),
        z.lazy(() => JobCreateWithoutTagsInputObjectSchema).array(),
        z.lazy(() => JobUncheckedCreateWithoutTagsInputObjectSchema),
        z.lazy(() => JobUncheckedCreateWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => JobCreateOrConnectWithoutTagsInputObjectSchema),
        z.lazy(() => JobCreateOrConnectWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => JobUpsertWithWhereUniqueWithoutTagsInputObjectSchema),
        z
          .lazy(() => JobUpsertWithWhereUniqueWithoutTagsInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => JobUpdateWithWhereUniqueWithoutTagsInputObjectSchema),
        z
          .lazy(() => JobUpdateWithWhereUniqueWithoutTagsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => JobUpdateManyWithWhereWithoutTagsInputObjectSchema),
        z
          .lazy(() => JobUpdateManyWithWhereWithoutTagsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => JobScalarWhereInputObjectSchema),
        z.lazy(() => JobScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const JobUpdateManyWithoutTagsNestedInputObjectSchema = Schema;
