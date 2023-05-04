import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobCreateWithoutSavedByInputObjectSchema } from "./JobCreateWithoutSavedByInput.schema";
import { JobUncheckedCreateWithoutSavedByInputObjectSchema } from "./JobUncheckedCreateWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateOrConnectWithoutSavedByInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => JobCreateWithoutSavedByInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutSavedByInputObjectSchema),
    ]),
  })
  .strict();

export const JobCreateOrConnectWithoutSavedByInputObjectSchema = Schema;
