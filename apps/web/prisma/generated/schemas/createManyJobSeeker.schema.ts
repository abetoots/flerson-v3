import { z } from "zod";
import { JobSeekerCreateManyInputObjectSchema } from "./objects/JobSeekerCreateManyInput.schema";

export const JobSeekerCreateManySchema = z.object({
  data: z.union([
    JobSeekerCreateManyInputObjectSchema,
    z.array(JobSeekerCreateManyInputObjectSchema),
  ]),
});
