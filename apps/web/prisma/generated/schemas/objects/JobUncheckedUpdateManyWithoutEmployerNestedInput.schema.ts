import { z } from "zod";
import { JobCreateWithoutEmployerInputObjectSchema } from "./JobCreateWithoutEmployerInput.schema";
import { JobUncheckedCreateWithoutEmployerInputObjectSchema } from "./JobUncheckedCreateWithoutEmployerInput.schema";
import { JobCreateOrConnectWithoutEmployerInputObjectSchema } from "./JobCreateOrConnectWithoutEmployerInput.schema";
import { JobUpsertWithWhereUniqueWithoutEmployerInputObjectSchema } from "./JobUpsertWithWhereUniqueWithoutEmployerInput.schema";
import { JobCreateManyEmployerInputEnvelopeObjectSchema } from "./JobCreateManyEmployerInputEnvelope.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithWhereUniqueWithoutEmployerInputObjectSchema } from "./JobUpdateWithWhereUniqueWithoutEmployerInput.schema";
import { JobUpdateManyWithWhereWithoutEmployerInputObjectSchema } from "./JobUpdateManyWithWhereWithoutEmployerInput.schema";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUncheckedUpdateManyWithoutEmployerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => JobCreateWithoutEmployerInputObjectSchema),
          z.lazy(() => JobCreateWithoutEmployerInputObjectSchema).array(),
          z.lazy(() => JobUncheckedCreateWithoutEmployerInputObjectSchema),
          z
            .lazy(() => JobUncheckedCreateWithoutEmployerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => JobCreateOrConnectWithoutEmployerInputObjectSchema),
          z
            .lazy(() => JobCreateOrConnectWithoutEmployerInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => JobUpsertWithWhereUniqueWithoutEmployerInputObjectSchema
          ),
          z
            .lazy(
              () => JobUpsertWithWhereUniqueWithoutEmployerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => JobCreateManyEmployerInputEnvelopeObjectSchema)
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
          z.lazy(
            () => JobUpdateWithWhereUniqueWithoutEmployerInputObjectSchema
          ),
          z
            .lazy(
              () => JobUpdateWithWhereUniqueWithoutEmployerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => JobUpdateManyWithWhereWithoutEmployerInputObjectSchema),
          z
            .lazy(() => JobUpdateManyWithWhereWithoutEmployerInputObjectSchema)
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

export const JobUncheckedUpdateManyWithoutEmployerNestedInputObjectSchema =
  Schema;
