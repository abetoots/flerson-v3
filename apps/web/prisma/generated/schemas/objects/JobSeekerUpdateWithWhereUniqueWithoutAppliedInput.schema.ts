import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerUpdateWithoutAppliedInputObjectSchema } from "./JobSeekerUpdateWithoutAppliedInput.schema";
import { JobSeekerUncheckedUpdateWithoutAppliedInputObjectSchema } from "./JobSeekerUncheckedUpdateWithoutAppliedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpdateWithWhereUniqueWithoutAppliedInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => JobSeekerUpdateWithoutAppliedInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedUpdateWithoutAppliedInputObjectSchema),
      ]),
    })
    .strict();

export const JobSeekerUpdateWithWhereUniqueWithoutAppliedInputObjectSchema =
  Schema;
