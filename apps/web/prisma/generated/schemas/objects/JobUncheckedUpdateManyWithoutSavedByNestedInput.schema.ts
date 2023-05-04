import { z } from "zod";
import { JobCreateWithoutSavedByInputObjectSchema } from "./JobCreateWithoutSavedByInput.schema";
import { JobUncheckedCreateWithoutSavedByInputObjectSchema } from "./JobUncheckedCreateWithoutSavedByInput.schema";
import { JobCreateOrConnectWithoutSavedByInputObjectSchema } from "./JobCreateOrConnectWithoutSavedByInput.schema";
import { JobUpsertWithWhereUniqueWithoutSavedByInputObjectSchema } from "./JobUpsertWithWhereUniqueWithoutSavedByInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithWhereUniqueWithoutSavedByInputObjectSchema } from "./JobUpdateWithWhereUniqueWithoutSavedByInput.schema";
import { JobUpdateManyWithWhereWithoutSavedByInputObjectSchema } from "./JobUpdateManyWithWhereWithoutSavedByInput.schema";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUncheckedUpdateManyWithoutSavedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => JobCreateWithoutSavedByInputObjectSchema),
          z.lazy(() => JobCreateWithoutSavedByInputObjectSchema).array(),
          z.lazy(() => JobUncheckedCreateWithoutSavedByInputObjectSchema),
          z
            .lazy(() => JobUncheckedCreateWithoutSavedByInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => JobCreateOrConnectWithoutSavedByInputObjectSchema),
          z
            .lazy(() => JobCreateOrConnectWithoutSavedByInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => JobUpsertWithWhereUniqueWithoutSavedByInputObjectSchema),
          z
            .lazy(() => JobUpsertWithWhereUniqueWithoutSavedByInputObjectSchema)
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
          z.lazy(() => JobUpdateWithWhereUniqueWithoutSavedByInputObjectSchema),
          z
            .lazy(() => JobUpdateWithWhereUniqueWithoutSavedByInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => JobUpdateManyWithWhereWithoutSavedByInputObjectSchema),
          z
            .lazy(() => JobUpdateManyWithWhereWithoutSavedByInputObjectSchema)
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

export const JobUncheckedUpdateManyWithoutSavedByNestedInputObjectSchema =
  Schema;
