import { z } from "zod";
import { JobScalarWhereInputObjectSchema } from "./JobScalarWhereInput.schema";
import { JobUpdateManyMutationInputObjectSchema } from "./JobUpdateManyMutationInput.schema";
import { JobUncheckedUpdateManyWithoutJobsInputObjectSchema } from "./JobUncheckedUpdateManyWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateManyWithWhereWithoutTagsInput> = z
  .object({
    where: z.lazy(() => JobScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => JobUpdateManyMutationInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateManyWithoutJobsInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpdateManyWithWhereWithoutTagsInputObjectSchema = Schema;
