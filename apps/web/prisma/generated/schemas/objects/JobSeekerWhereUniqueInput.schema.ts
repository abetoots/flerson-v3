import { z } from "zod";
import { JobSeekerFirstNameLastNameCompoundUniqueInputObjectSchema } from "./JobSeekerFirstNameLastNameCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional(),
    firstName_lastName: z
      .lazy(() => JobSeekerFirstNameLastNameCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerWhereUniqueInputObjectSchema = Schema;
