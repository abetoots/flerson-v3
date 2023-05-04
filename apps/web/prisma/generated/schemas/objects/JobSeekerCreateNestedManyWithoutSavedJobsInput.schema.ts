import { z } from "zod";
import { JobSeekerCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateWithoutSavedJobsInput.schema";
import { JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutSavedJobsInput.schema";
import { JobSeekerCreateOrConnectWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateOrConnectWithoutSavedJobsInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateNestedManyWithoutSavedJobsInput> =
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
      connect: z
        .union([
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
          z.lazy(() => JobSeekerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const JobSeekerCreateNestedManyWithoutSavedJobsInputObjectSchema =
  Schema;
