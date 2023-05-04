import { z } from "zod";
import { EmployerCreateWithoutJobsInputObjectSchema } from "./EmployerCreateWithoutJobsInput.schema";
import { EmployerUncheckedCreateWithoutJobsInputObjectSchema } from "./EmployerUncheckedCreateWithoutJobsInput.schema";
import { EmployerCreateOrConnectWithoutJobsInputObjectSchema } from "./EmployerCreateOrConnectWithoutJobsInput.schema";
import { EmployerUpsertWithoutJobsInputObjectSchema } from "./EmployerUpsertWithoutJobsInput.schema";
import { EmployerWhereUniqueInputObjectSchema } from "./EmployerWhereUniqueInput.schema";
import { EmployerUpdateWithoutJobsInputObjectSchema } from "./EmployerUpdateWithoutJobsInput.schema";
import { EmployerUncheckedUpdateWithoutJobsInputObjectSchema } from "./EmployerUncheckedUpdateWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerUpdateOneRequiredWithoutJobsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EmployerCreateWithoutJobsInputObjectSchema),
          z.lazy(() => EmployerUncheckedCreateWithoutJobsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => EmployerCreateOrConnectWithoutJobsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => EmployerUpsertWithoutJobsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => EmployerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => EmployerUpdateWithoutJobsInputObjectSchema),
          z.lazy(() => EmployerUncheckedUpdateWithoutJobsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const EmployerUpdateOneRequiredWithoutJobsNestedInputObjectSchema =
  Schema;
