import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerUpdateWithoutAppliedInputObjectSchema } from "./JobSeekerUpdateWithoutAppliedInput.schema";
import { JobSeekerUncheckedUpdateWithoutAppliedInputObjectSchema } from "./JobSeekerUncheckedUpdateWithoutAppliedInput.schema";
import { JobSeekerCreateWithoutAppliedInputObjectSchema } from "./JobSeekerCreateWithoutAppliedInput.schema";
import { JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutAppliedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpsertWithWhereUniqueWithoutAppliedInput> =
  z
    .object({
      where: z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => JobSeekerUpdateWithoutAppliedInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedUpdateWithoutAppliedInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => JobSeekerCreateWithoutAppliedInputObjectSchema),
        z.lazy(() => JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema),
      ]),
    })
    .strict();

export const JobSeekerUpsertWithWhereUniqueWithoutAppliedInputObjectSchema =
  Schema;
