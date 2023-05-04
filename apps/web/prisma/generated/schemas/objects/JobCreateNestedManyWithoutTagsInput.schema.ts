import { z } from "zod";
import { JobCreateWithoutTagsInputObjectSchema } from "./JobCreateWithoutTagsInput.schema";
import { JobUncheckedCreateWithoutTagsInputObjectSchema } from "./JobUncheckedCreateWithoutTagsInput.schema";
import { JobCreateOrConnectWithoutTagsInputObjectSchema } from "./JobCreateOrConnectWithoutTagsInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./JobWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobCreateNestedManyWithoutTagsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => JobCreateWithoutTagsInputObjectSchema),
        z.lazy(() => JobCreateWithoutTagsInputObjectSchema).array(),
        z.lazy(() => JobUncheckedCreateWithoutTagsInputObjectSchema),
        z.lazy(() => JobUncheckedCreateWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => JobCreateOrConnectWithoutTagsInputObjectSchema),
        z.lazy(() => JobCreateOrConnectWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => JobWhereUniqueInputObjectSchema),
        z.lazy(() => JobWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const JobCreateNestedManyWithoutTagsInputObjectSchema = Schema;
