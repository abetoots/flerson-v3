import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { JobUpdateemploymentTypeInputObjectSchema } from "./JobUpdateemploymentTypeInput.schema";
import { EmploymentTypeSchema } from "../enums/EmploymentType.schema";
import { CountrySchema } from "../enums/Country.schema";
import { EnumCountryFieldUpdateOperationsInputObjectSchema } from "./EnumCountryFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { CategorySchema } from "../enums/Category.schema";
import { EnumCategoryFieldUpdateOperationsInputObjectSchema } from "./EnumCategoryFieldUpdateOperationsInput.schema";
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { EmployerUpdateOneRequiredWithoutJobsNestedInputObjectSchema } from "./EmployerUpdateOneRequiredWithoutJobsNestedInput.schema";
import { TagUpdateManyWithoutJobsNestedInputObjectSchema } from "./TagUpdateManyWithoutJobsNestedInput.schema";
import { JobSeekerUpdateManyWithoutSavedJobsNestedInputObjectSchema } from "./JobSeekerUpdateManyWithoutSavedJobsNestedInput.schema";
import { JobSeekerUpdateManyWithoutAppliedNestedInputObjectSchema } from "./JobSeekerUpdateManyWithoutAppliedNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobUpdateInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    howToApply: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    employmentType: z
      .union([
        z.lazy(() => JobUpdateemploymentTypeInputObjectSchema),
        z.lazy(() => EmploymentTypeSchema).array(),
      ])
      .optional(),
    applicantLocationRequirements: z
      .union([
        z.lazy(() => CountrySchema),
        z.lazy(() => EnumCountryFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    validThrough: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => CategorySchema),
        z.lazy(() => EnumCategoryFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    directApply: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    applyUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    applyEmail: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    imageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    datePosted: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    priority: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    highlight: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    employer: z
      .lazy(() => EmployerUpdateOneRequiredWithoutJobsNestedInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagUpdateManyWithoutJobsNestedInputObjectSchema)
      .optional(),
    savedBy: z
      .lazy(() => JobSeekerUpdateManyWithoutSavedJobsNestedInputObjectSchema)
      .optional(),
    applicants: z
      .lazy(() => JobSeekerUpdateManyWithoutAppliedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobUpdateInputObjectSchema = Schema;
