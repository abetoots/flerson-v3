import { z } from "zod";
import { JobSeekerScalarWhereInputObjectSchema } from "./JobSeekerScalarWhereInput.schema";
import { JobSeekerUpdateManyMutationInputObjectSchema } from "./JobSeekerUpdateManyMutationInput.schema";
import { JobSeekerUncheckedUpdateManyWithoutSavedByInputObjectSchema } from "./JobSeekerUncheckedUpdateManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpdateManyWithWhereWithoutSavedJobsInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => JobSeekerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => JobSeekerUncheckedUpdateManyWithoutSavedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const JobSeekerUpdateManyWithWhereWithoutSavedJobsInputObjectSchema =
  Schema;
