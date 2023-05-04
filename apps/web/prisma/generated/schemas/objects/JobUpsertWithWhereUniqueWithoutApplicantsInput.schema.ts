import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutApplicantsInputObjectSchema } from "./JobUpdateWithoutApplicantsInput.schema";
import { JobUncheckedUpdateWithoutApplicantsInputObjectSchema } from "./JobUncheckedUpdateWithoutApplicantsInput.schema";
import { JobCreateWithoutApplicantsInputObjectSchema } from "./JobCreateWithoutApplicantsInput.schema";
import { JobUncheckedCreateWithoutApplicantsInputObjectSchema } from "./JobUncheckedCreateWithoutApplicantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutApplicantsInput> =
  z
    .object({
      where: z.lazy(() => JobWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => JobUpdateWithoutApplicantsInputObjectSchema),
        z.lazy(() => JobUncheckedUpdateWithoutApplicantsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => JobCreateWithoutApplicantsInputObjectSchema),
        z.lazy(() => JobUncheckedCreateWithoutApplicantsInputObjectSchema),
      ]),
    })
    .strict();

export const JobUpsertWithWhereUniqueWithoutApplicantsInputObjectSchema =
  Schema;
