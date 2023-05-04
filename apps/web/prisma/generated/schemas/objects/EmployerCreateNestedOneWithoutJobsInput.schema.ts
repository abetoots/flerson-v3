import { z } from "zod";
import { EmployerCreateWithoutJobsInputObjectSchema } from "./EmployerCreateWithoutJobsInput.schema";
import { EmployerUncheckedCreateWithoutJobsInputObjectSchema } from "./EmployerUncheckedCreateWithoutJobsInput.schema";
import { EmployerCreateOrConnectWithoutJobsInputObjectSchema } from "./EmployerCreateOrConnectWithoutJobsInput.schema";
import { EmployerWhereUniqueInputObjectSchema } from "./EmployerWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EmployerCreateNestedOneWithoutJobsInput> = z
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
    connect: z.lazy(() => EmployerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EmployerCreateNestedOneWithoutJobsInputObjectSchema = Schema;
