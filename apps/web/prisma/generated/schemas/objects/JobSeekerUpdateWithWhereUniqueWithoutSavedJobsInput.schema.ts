import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerUpdateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUpdateWithoutSavedJobsInput.schema";
import { JobSeekerUncheckedUpdateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedUpdateWithoutSavedJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpdateWithWhereUniqueWithoutSavedJobsInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => JobSeekerUpdateWithoutSavedJobsInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedUpdateWithoutSavedJobsInputObjectSchema),
      ]),
    })
    .strict();

export const JobSeekerUpdateWithWhereUniqueWithoutSavedJobsInputObjectSchema =
  Schema;
