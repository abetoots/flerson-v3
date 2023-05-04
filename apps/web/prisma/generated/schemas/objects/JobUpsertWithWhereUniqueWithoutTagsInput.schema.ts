import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobUpdateWithoutTagsInputObjectSchema } from "./JobUpdateWithoutTagsInput.schema";
import { JobUncheckedUpdateWithoutTagsInputObjectSchema } from "./JobUncheckedUpdateWithoutTagsInput.schema";
import { JobCreateWithoutTagsInputObjectSchema } from "./JobCreateWithoutTagsInput.schema";
import { JobUncheckedCreateWithoutTagsInputObjectSchema } from "./JobUncheckedCreateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => JobUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => JobUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => JobCreateWithoutTagsInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const JobUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
