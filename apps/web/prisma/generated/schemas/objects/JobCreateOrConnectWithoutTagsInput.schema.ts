import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";
import { JobCreateWithoutTagsInputObjectSchema } from "./JobCreateWithoutTagsInput.schema";
import { JobUncheckedCreateWithoutTagsInputObjectSchema } from "./JobUncheckedCreateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => JobWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => JobCreateWithoutTagsInputObjectSchema),
      z.lazy(() => JobUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const JobCreateOrConnectWithoutTagsInputObjectSchema = Schema;
