import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./JobSeekerWhereUniqueInput.schema";
import { JobSeekerCreateWithoutAppliedInputObjectSchema } from "./JobSeekerCreateWithoutAppliedInput.schema";
import { JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema } from "./JobSeekerUncheckedCreateWithoutAppliedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerCreateOrConnectWithoutAppliedInput> = z
  .object({
    where: z.lazy(() => JobSeekerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => JobSeekerCreateWithoutAppliedInputObjectSchema),
      z.lazy(() => JobSeekerUncheckedCreateWithoutAppliedInputObjectSchema),
    ]),
  })
  .strict();

export const JobSeekerCreateOrConnectWithoutAppliedInputObjectSchema = Schema;
