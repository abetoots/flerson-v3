import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { JobSeekerUpdatesavedIdsInputObjectSchema } from "./JobSeekerUpdatesavedIdsInput.schema";
import { JobSeekerUpdateappliedIdsInputObjectSchema } from "./JobSeekerUpdateappliedIdsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.JobSeekerUncheckedUpdateManyWithoutSavedByInput> =
  z
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
      savedIds: z
        .union([
          z.lazy(() => JobSeekerUpdatesavedIdsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      appliedIds: z
        .union([
          z.lazy(() => JobSeekerUpdateappliedIdsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const JobSeekerUncheckedUpdateManyWithoutSavedByInputObjectSchema =
  Schema;
