import { z } from "zod";
import { JobCreateWithoutApplicantsInputObjectSchema } from "./JobCreateWithoutApplicantsInput.schema";
import { JobUncheckedCreateWithoutApplicantsInputObjectSchema } from "./JobUncheckedCreateWithoutApplicantsInput.schema";
import { JobCreateOrConnectWithoutApplicantsInputObjectSchema } from "./JobCreateOrConnectWithoutApplicantsInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateNestedManyWithoutApplicantsInput> = z
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
    connect: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const JobCreateNestedManyWithoutApplicantsInputObjectSchema = Schema;
