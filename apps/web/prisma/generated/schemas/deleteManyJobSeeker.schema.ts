import { z } from "zod";
import { JobSeekerWhereInputObjectSchema } from "./objects/JobSeekerWhereInput.schema";

export const JobSeekerDeleteManySchema = z.object({
  where: JobSeekerWhereInputObjectSchema.optional(),
});
