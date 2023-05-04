import { z } from "zod";
import { JobCreateWithoutSavedByInputObjectSchema } from "./JobCreateWithoutSavedByInput.schema";
import { JobUncheckedCreateWithoutSavedByInputObjectSchema } from "./JobUncheckedCreateWithoutSavedByInput.schema";
import { JobCreateOrConnectWithoutSavedByInputObjectSchema } from "./JobCreateOrConnectWithoutSavedByInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUncheckedCreateNestedManyWithoutSavedByInput> =
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
      connect: z
        .union([
          z.lazy(() => JobWhereUniqueInputObjectSchema),
          z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const JobUncheckedCreateNestedManyWithoutSavedByInputObjectSchema =
  Schema;
