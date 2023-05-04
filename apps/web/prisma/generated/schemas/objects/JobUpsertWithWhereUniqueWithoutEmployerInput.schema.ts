import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutEmployerInputObjectSchema } from "./JobUpdateWithoutEmployerInput.schema";
import { JobUncheckedUpdateWithoutEmployerInputObjectSchema } from "./JobUncheckedUpdateWithoutEmployerInput.schema";
import { JobCreateWithoutEmployerInputObjectSchema } from "./JobCreateWithoutEmployerInput.schema";
import { JobUncheckedCreateWithoutEmployerInputObjectSchema } from "./JobUncheckedCreateWithoutEmployerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutEmployerInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => JobUpdateWithoutEmployerInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateWithoutEmployerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => JobCreateWithoutEmployerInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutEmployerInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpsertWithWhereUniqueWithoutEmployerInputObjectSchema = Schema;
