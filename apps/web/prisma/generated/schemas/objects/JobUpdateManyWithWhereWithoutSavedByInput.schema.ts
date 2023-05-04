import { z } from "zod";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";
import { JobUpdateManyMutationInputObjectSchema } from "./JobUpdateManyMutationInput.schema";
import { JobUncheckedUpdateManyWithoutSavedJobsInputObjectSchema } from "./JobUncheckedUpdateManyWithoutSavedJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateManyWithWhereWithoutSavedByInput> = z
  .object({
    where: z.lazy(() => JobScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => JobUpdateManyMutationInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateManyWithoutSavedJobsInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpdateManyWithWhereWithoutSavedByInputObjectSchema = Schema;
