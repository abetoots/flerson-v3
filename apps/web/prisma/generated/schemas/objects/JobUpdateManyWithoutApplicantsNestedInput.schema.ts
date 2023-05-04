import { z } from "zod";
import { JobCreateWithoutApplicantsInputObjectSchema } from "./JobCreateWithoutApplicantsInput.schema";
import { JobUncheckedCreateWithoutApplicantsInputObjectSchema } from "./JobUncheckedCreateWithoutApplicantsInput.schema";
import { JobCreateOrConnectWithoutApplicantsInputObjectSchema } from "./JobCreateOrConnectWithoutApplicantsInput.schema";
import { JobUpsertWithWhereUniqueWithoutApplicantsInputObjectSchema } from "./JobUpsertWithWhereUniqueWithoutApplicantsInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithWhereUniqueWithoutApplicantsInputObjectSchema } from "./JobUpdateWithWhereUniqueWithoutApplicantsInput.schema";
import { JobUpdateManyWithWhereWithoutApplicantsInputObjectSchema } from "./JobUpdateManyWithWhereWithoutApplicantsInput.schema";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateManyWithoutApplicantsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => JobCreateWithoutApplicantsInputObjectSchema),
        z.lazy(() => JobCreateWithoutApplicantsInputObjectSchema).array(),
        z.lazy(() => JobUncheckedCreateWithoutApplicantsInputObjectSchema),
        z
          .lazy(() => JobUncheckedCreateWithoutApplicantsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => JobCreateOrConnectWithoutApplicantsInputObjectSchema),
        z
          .lazy(() => JobCreateOrConnectWithoutApplicantsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => JobUpsertWithWhereUniqueWithoutApplicantsInputObjectSchema
        ),
        z
          .lazy(
            () => JobUpsertWithWhereUniqueWithoutApplicantsInputObjectSchema
          )
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
        z.lazy(
          () => JobUpdateWithWhereUniqueWithoutApplicantsInputObjectSchema
        ),
        z
          .lazy(
            () => JobUpdateWithWhereUniqueWithoutApplicantsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => JobUpdateManyWithWhereWithoutApplicantsInputObjectSchema),
        z
          .lazy(() => JobUpdateManyWithWhereWithoutApplicantsInputObjectSchema)
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

export const JobUpdateManyWithoutApplicantsNestedInputObjectSchema = Schema;
