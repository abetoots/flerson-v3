import { z } from "zod";
import { CountrySchema } from "../enums/Country.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumCountryFilter> = z
  .object({
    equals: z.lazy(() => CountrySchema).optional(),
    in: z
      .lazy(() => CountrySchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => CountrySchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => CountrySchema),
        z.lazy(() => NestedEnumCountryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumCountryFilterObjectSchema = Schema;
