import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutSavedByInputObjectSchema } from "./JobUpdateWithoutSavedByInput.schema";
import { JobUncheckedUpdateWithoutSavedByInputObjectSchema } from "./JobUncheckedUpdateWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutSavedByInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => JobUpdateWithoutSavedByInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateWithoutSavedByInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpdateWithWhereUniqueWithoutSavedByInputObjectSchema = Schema;
