import { z } from "zod";
import { JobSeekerCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateWithoutSavedJobsInput.schema";
import { JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutSavedJobsInput.schema";
import { JobSeekerCreateOrConnectWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateOrConnectWithoutSavedJobsInput.schema";
import { JobSeekerUpsertWithWhereUniqueWithoutSavedJobsInputObjectSchema } from "./JobSeekerUpsertWithWhereUniqueWithoutSavedJobsInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerUpdateWithWhereUniqueWithoutSavedJobsInputObjectSchema } from "./JobSeekerUpdateWithWhereUniqueWithoutSavedJobsInput.schema";
import { JobSeekerUpdateManyWithWhereWithoutSavedJobsInputObjectSchema } from "./JobSeekerUpdateManyWithWhereWithoutSavedJobsInput.schema";
import { JobSeekerScalarWhereInputObjectSchema } from "./JobSeekerScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUncheckedUpdateManyWithoutSavedJobsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => JobSeekerCreateWithoutSavedJobsInputObjectSchema),
          z
            .lazy(() => JobSeekerCreateWithoutSavedJobsInputObjectSchema)
            .array(),
          z.lazy(
            () => JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema
          ),
          z
            .lazy(
              () => JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => JobSeekerCreateOrConnectWithoutSavedJobsInputObjectSchema
          ),
          z
            .lazy(
              () => JobSeekerCreateOrConnectWithoutSavedJobsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              JobSeekerUpsertWithWhereUniqueWithoutSavedJobsInputObjectSchema
          ),
          z
            .lazy(
              () =>
                JobSeekerUpsertWithWhereUniqueWithoutSavedJobsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              JobSeekerUpdateWithWhereUniqueWithoutSavedJobsInputObjectSchema
          ),
          z
            .lazy(
              () =>
                JobSeekerUpdateWithWhereUniqueWithoutSavedJobsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => JobSeekerUpdateManyWithWhereWithoutSavedJobsInputObjectSchema
          ),
          z
            .lazy(
              () =>
                JobSeekerUpdateManyWithWhereWithoutSavedJobsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => JobSeekerScalarWhereInputObjectSchema),
          z.lazy(() => JobSeekerScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const JobSeekerUncheckedUpdateManyWithoutSavedJobsNestedInputObjectSchema =
  Schema;
