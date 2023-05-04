import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutEmployerInputObjectSchema } from "./JobUpdateWithoutEmployerInput.schema";
import { JobUncheckedUpdateWithoutEmployerInputObjectSchema } from "./JobUncheckedUpdateWithoutEmployerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutEmployerInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => JobUpdateWithoutEmployerInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateWithoutEmployerInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpdateWithWhereUniqueWithoutEmployerInputObjectSchema = Schema;
