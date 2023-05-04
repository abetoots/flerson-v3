import { z } from "zod";
import { JobSeekerUpdateManyMutationInputObjectSchema } from "./objects/JobSeekerUpdateManyMutationInput.schema";
import { JobSeekerWhereInputObjectSchema } from "./objects/JobSeekerWhereInput.schema";

export const JobSeekerUpdateManySchema = z.object({
  data: JobSeekerUpdateManyMutationInputObjectSchema,
  where: JobSeekerWhereInputObjectSchema.optional(),
});
