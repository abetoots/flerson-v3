import { z } from "zod";
import { JobSeekerScalarWhereInputObjectSchema } from "./JobSeekerScalarWhereInput.schema";
import { JobSeekerUpdateManyMutationInputObjectSchema } from "./JobSeekerUpdateManyMutationInput.schema";
import { JobSeekerUncheckedUpdateManyWithoutApplicantsInputObjectSchema } from "./JobSeekerUncheckedUpdateManyWithoutApplicantsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpdateManyWithWhereWithoutAppliedInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => JobSeekerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => JobSeekerUncheckedUpdateManyWithoutApplicantsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const JobSeekerUpdateManyWithWhereWithoutAppliedInputObjectSchema =
  Schema;
