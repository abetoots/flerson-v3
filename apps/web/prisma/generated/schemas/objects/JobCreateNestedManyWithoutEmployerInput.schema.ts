import { z } from "zod";
import { JobCreateWithoutEmployerInputObjectSchema } from "./JobCreateWithoutEmployerInput.schema";
import { JobUncheckedCreateWithoutEmployerInputObjectSchema } from "./JobUncheckedCreateWithoutEmployerInput.schema";
import { JobCreateOrConnectWithoutEmployerInputObjectSchema } from "./JobCreateOrConnectWithoutEmployerInput.schema";
import { JobCreateManyEmployerInputEnvelopeObjectSchema } from "./JobCreateManyEmployerInputEnvelope.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateNestedManyWithoutEmployerInput> = z
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
    createMany: z
      .lazy(() => JobCreateManyEmployerInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const JobCreateNestedManyWithoutEmployerInputObjectSchema = Schema;
