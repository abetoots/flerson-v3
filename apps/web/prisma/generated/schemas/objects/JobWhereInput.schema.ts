import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { EnumEmploymentTypeNullableListFilterObjectSchema } from "./EnumEmploymentTypeNullableListFilter.schema";
import { EnumCountryFilterObjectSchema } from "./EnumCountryFilter.schema";
import { CountrySchema } from "../enums/Country.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { EnumCategoryFilterObjectSchema } from "./EnumCategoryFilter.schema";
import { CategorySchema } from "../enums/Category.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { EmployerRelationFilterObjectSchema } from "./EmployerRelationFilter.schema";
import { EmployerWhereInputObjectSchema } from "./EmployerWhereInput.schema";
import { TagListRelationFilterObjectSchema } from "./TagListRelationFilter.schema";
import { JobSeekerListRelationFilterObjectSchema } from "./JobSeekerListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => JobWhereInputObjectSchema),
        z.lazy(() => JobWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => JobWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => JobWhereInputObjectSchema),
        z.lazy(() => JobWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    howToApply: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    employerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    employmentType: z
      .lazy(() => EnumEmploymentTypeNullableListFilterObjectSchema)
      .optional(),
    applicantLocationRequirements: z
      .union([
        z.lazy(() => EnumCountryFilterObjectSchema),
        z.lazy(() => CountrySchema),
      ])
      .optional(),
    validThrough: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => EnumCategoryFilterObjectSchema),
        z.lazy(() => CategorySchema),
      ])
      .optional(),
    directApply: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    applyUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    applyEmail: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tagIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    datePosted: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    savedByIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    applicantIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    priority: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    highlight: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    employer: z
      .union([
        z.lazy(() => EmployerRelationFilterObjectSchema),
        z.lazy(() => EmployerWhereInputObjectSchema),
      ])
      .optional(),
    tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
    savedBy: z.lazy(() => JobSeekerListRelationFilterObjectSchema).optional(),
    applicants: z
      .lazy(() => JobSeekerListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const JobWhereInputObjectSchema = Schema;
