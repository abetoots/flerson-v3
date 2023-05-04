import { z } from "zod";
import { JobCreateManyEmployerInputObjectSchema } from "./JobCreateManyEmployerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateManyEmployerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => JobCreateManyEmployerInputObjectSchema),
      z.lazy(() => JobCreateManyEmployerInputObjectSchema).array(),
    ]),
  })
  .strict();

export const JobCreateManyEmployerInputEnvelopeObjectSchema = Schema;
