import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutApplicantsInputObjectSchema } from "./JobUpdateWithoutApplicantsInput.schema";
import { JobUncheckedUpdateWithoutApplicantsInputObjectSchema } from "./JobUncheckedUpdateWithoutApplicantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutApplicantsInput> =
  z
    .object({
      where: z.lazy(() => JobWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => JobUpdateWithoutApplicantsInputObjectSchema),
        z.lazy(() => JobUncheckedUpdateWithoutApplicantsInputObjectSchema),
      ]),
    })
    .strict();

export const JobUpdateWithWhereUniqueWithoutApplicantsInputObjectSchema =
  Schema;
