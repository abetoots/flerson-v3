import { z } from "zod";
import { EmployerUpdateWithoutJobsInputObjectSchema } from "./EmployerUpdateWithoutJobsInput.schema";
import { EmployerUncheckedUpdateWithoutJobsInputObjectSchema } from "./EmployerUncheckedUpdateWithoutJobsInput.schema";
import { EmployerCreateWithoutJobsInputObjectSchema } from "./EmployerCreateWithoutJobsInput.schema";
import { EmployerUncheckedCreateWithoutJobsInputObjectSchema } from "./EmployerUncheckedCreateWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerUpsertWithoutJobsInput> = z
  .object({
    update: z.union([
      z.lazy(() => EmployerUpdateWithoutJobsInputObjectSchema),
      z.lazy(() => EmployerUncheckedUpdateWithoutJobsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmployerCreateWithoutJobsInputObjectSchema),
      z.lazy(() => EmployerUncheckedCreateWithoutJobsInputObjectSchema),
    ]),
  })
  .strict();

export const EmployerUpsertWithoutJobsInputObjectSchema = Schema;
