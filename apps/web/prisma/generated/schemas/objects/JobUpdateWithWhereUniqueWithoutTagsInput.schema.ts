import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutTagsInputObjectSchema } from "./JobUpdateWithoutTagsInput.schema";
import { JobUncheckedUpdateWithoutTagsInputObjectSchema } from "./JobUncheckedUpdateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => JobUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
