import { z } from "zod";
import { JobSeekerCreateWithoutAppliedInputObjectSchema } from "./JobSeekerCreateWithoutAppliedInput.schema";
import { JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutAppliedInput.schema";
import { JobSeekerCreateOrConnectWithoutAppliedInputObjectSchema } from "./JobSeekerCreateOrConnectWithoutAppliedInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUncheckedCreateNestedManyWithoutAppliedInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const JobSeekerUncheckedCreateNestedManyWithoutAppliedInputObjectSchema =
  Schema;
