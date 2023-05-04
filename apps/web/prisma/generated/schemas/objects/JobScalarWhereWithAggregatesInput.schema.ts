import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { EnumEmploymentTypeNullableListFilterObjectSchema } from "./EnumEmploymentTypeNullableListFilter.schema";
import { EnumCountryWithAggregatesFilterObjectSchema } from "./EnumCountryWithAggregatesFilter.schema";
import { CountrySchema } from "../enums/Country.schema";
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema";
import { EnumCategoryWithAggregatesFilterObjectSchema } from "./EnumCategoryWithAggregatesFilter.schema";
import { CategorySchema } from "../enums/Category.schema";
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => JobScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    howToApply: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    employerId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    employmentType: z
      .lazy(() => EnumEmploymentTypeNullableListFilterObjectSchema)
      .optional(),
    applicantLocationRequirements: z
      .union([
        z.lazy(() => EnumCountryWithAggregatesFilterObjectSchema),
        z.lazy(() => CountrySchema),
      ])
      .optional(),
    validThrough: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.date(),
      ])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => EnumCategoryWithAggregatesFilterObjectSchema),
        z.lazy(() => CategorySchema),
      ])
      .optional(),
    directApply: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    applyUrl: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    applyEmail: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    imageUrl: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    tagIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    datePosted: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    savedByIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    applicantIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    priority: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    highlight: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const JobScalarWhereWithAggregatesInputObjectSchema = Schema;
