import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { JobUpdateManyWithoutSavedByNestedInputObjectSchema } from "./JobUpdateManyWithoutSavedByNestedInput.schema";
import { JobUpdateManyWithoutApplicantsNestedInputObjectSchema } from "./JobUpdateManyWithoutApplicantsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUpdateInput> = z
  .object({
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    savedJobs: z
      .lazy(() => JobUpdateManyWithoutSavedByNestedInputObjectSchema)
      .optional(),
    applied: z
      .lazy(() => JobUpdateManyWithoutApplicantsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const JobSeekerUpdateInputObjectSchema = Schema;
