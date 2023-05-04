import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerFirstNameLastNameCompoundUniqueInput> =
  z
    .object({
      firstName: z.string(),
      lastName: z.string(),
    })
    .strict();

export const JobSeekerFirstNameLastNameCompoundUniqueInputObjectSchema = Schema;
