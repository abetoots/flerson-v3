import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutSavedByInputObjectSchema } from "./JobUpdateWithoutSavedByInput.schema";
import { JobUncheckedUpdateWithoutSavedByInputObjectSchema } from "./JobUncheckedUpdateWithoutSavedByInput.schema";
import { JobCreateWithoutSavedByInputObjectSchema } from "./JobCreateWithoutSavedByInput.schema";
import { JobUncheckedCreateWithoutSavedByInputObjectSchema } from "./JobUncheckedCreateWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutSavedByInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => JobUpdateWithoutSavedByInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateWithoutSavedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => JobCreateWithoutSavedByInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutSavedByInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpsertWithWhereUniqueWithoutSavedByInputObjectSchema = Schema;
