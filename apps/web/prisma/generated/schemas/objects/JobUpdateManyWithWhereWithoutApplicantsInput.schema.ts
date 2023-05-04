import { z } from "zod";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";
import { JobUpdateManyMutationInputObjectSchema } from "./JobUpdateManyMutationInput.schema";
import { JobUncheckedUpdateManyWithoutAppliedInputObjectSchema } from "./JobUncheckedUpdateManyWithoutAppliedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateManyWithWhereWithoutApplicantsInput> = z
  .object({
    where: z.lazy(() => JobScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => JobUpdateManyMutationInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateManyWithoutAppliedInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpdateManyWithWhereWithoutApplicantsInputObjectSchema = Schema;
