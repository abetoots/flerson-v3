import { z } from "zod";
import { EmployerWhereUniqueInputObjectSchema } from "./EmployerWhereUniqueInput.schema";
import { EmployerCreateWithoutJobsInputObjectSchema } from "./EmployerCreateWithoutJobsInput.schema";
import { EmployerUncheckedCreateWithoutJobsInputObjectSchema } from "./EmployerUncheckedCreateWithoutJobsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerCreateOrConnectWithoutJobsInput> = z
  .object({
    where: z.lazy(() => EmployerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmployerCreateWithoutJobsInputObjectSchema),
      z.lazy(() => EmployerUncheckedCreateWithoutJobsInputObjectSchema),
    ]),
  })
  .strict();

export const EmployerCreateOrConnectWithoutJobsInputObjectSchema = Schema;
