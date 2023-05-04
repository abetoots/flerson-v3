import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobCreateWithoutEmployerInputObjectSchema } from "./JobCreateWithoutEmployerInput.schema";
import { JobUncheckedCreateWithoutEmployerInputObjectSchema } from "./JobUncheckedCreateWithoutEmployerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateOrConnectWithoutEmployerInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => JobCreateWithoutEmployerInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutEmployerInputObjectSchema),
    ]),
  })
  .strict();

export const JobCreateOrConnectWithoutEmployerInputObjectSchema = Schema;
