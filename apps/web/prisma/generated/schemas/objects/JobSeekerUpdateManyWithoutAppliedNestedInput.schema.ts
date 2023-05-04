import { z } from "zod";
import { JobSeekerCreateWithoutAppliedInputObjectSchema } from "./JobSeekerCreateWithoutAppliedInput.schema";
import { JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutAppliedInput.schema";
import { JobSeekerCreateOrConnectWithoutAppliedInputObjectSchema } from "./JobSeekerCreateOrConnectWithoutAppliedInput.schema";
import { JobSeekerUpsertWithWhereUniqueWithoutAppliedInputObjectSchema } from "./JobSeekerUpsertWithWhereUniqueWithoutAppliedInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerUpdateWithWhereUniqueWithoutAppliedInputObjectSchema } from "./JobSeekerUpdateWithWhereUniqueWithoutAppliedInput.schema";
import { JobSeekerUpdateManyWithWhereWithoutAppliedInputObjectSchema } from "./JobSeekerUpdateManyWithWhereWithoutAppliedInput.schema";
import { JobSeekerScalarWhereInputObjectSchema } from "./JobSeekerScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpdateManyWithoutAppliedNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => JobSeekerCreateWithoutAppliedInputObjectSchema),
        z.lazy(() => JobSeekerCreateWithoutAppliedInputObjectSchema).array(),
        z.lazy(() => JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema),
        z
          .lazy(() => JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => JobSeekerCreateOrConnectWithoutAppliedInputObjectSchema),
        z
          .lazy(() => JobSeekerCreateOrConnectWithoutAppliedInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => JobSeekerUpsertWithWhereUniqueWithoutAppliedInputObjectSchema
        ),
        z
          .lazy(
            () => JobSeekerUpsertWithWhereUniqueWithoutAppliedInputObjectSchema
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
          () => JobSeekerUpdateWithWhereUniqueWithoutAppliedInputObjectSchema
        ),
        z
          .lazy(
            () => JobSeekerUpdateWithWhereUniqueWithoutAppliedInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => JobSeekerUpdateManyWithWhereWithoutAppliedInputObjectSchema
        ),
        z
          .lazy(
            () => JobSeekerUpdateManyWithWhereWithoutAppliedInputObjectSchema
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

export const JobSeekerUpdateManyWithoutAppliedNestedInputObjectSchema = Schema;
