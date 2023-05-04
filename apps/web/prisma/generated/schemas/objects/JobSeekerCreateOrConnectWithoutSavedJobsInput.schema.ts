import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerCreateWithoutSavedJobsInput.schema";
import { JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutSavedJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateOrConnectWithoutSavedJobsInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => JobSeekerCreateWithoutSavedJobsInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedCreateWithoutSavedJobsInputObjectSchema),
      ]),
    })
    .strict();

export const JobSeekerCreateOrConnectWithoutSavedJobsInputObjectSchema = Schema;
