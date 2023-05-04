import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobCreateWithoutApplicantsInputObjectSchema } from "./JobCreateWithoutApplicantsInput.schema";
import { JobUncheckedCreateWithoutApplicantsInputObjectSchema } from "./JobUncheckedCreateWithoutApplicantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateOrConnectWithoutApplicantsInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => JobCreateWithoutApplicantsInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutApplicantsInputObjectSchema),
    ]),
  })
  .strict();

export const JobCreateOrConnectWithoutApplicantsInputObjectSchema = Schema;
