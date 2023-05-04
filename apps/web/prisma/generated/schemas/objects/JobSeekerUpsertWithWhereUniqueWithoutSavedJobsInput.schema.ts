import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerUpdateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUpdateWithoutSavedJobsInput.schema";
import { JobSeekerUncheckedUpdateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedUpdateWithoutSavedJobsInput.schema";
import { JobSeekerCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateWithoutSavedJobsInput.schema";
import { JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutSavedJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpsertWithWhereUniqueWithoutSavedJobsInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => JobSeekerUpdateWithoutSavedJobsInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedUpdateWithoutSavedJobsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => JobSeekerCreateWithoutSavedJobsInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema),
      ]),
    })
    .strict();

export const JobSeekerUpsertWithWhereUniqueWithoutSavedJobsInputObjectSchema =
  Schema;
