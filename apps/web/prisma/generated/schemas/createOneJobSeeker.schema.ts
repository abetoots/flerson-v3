import { z } from "zod";
import { JobSeekerCreateInputObjectSchema } from "./objects/JobSeekerCreateInput.schema";
import { JobSeekerUncheckedCreateInputObjectSchema } from "./objects/JobSeekerUncheckedCreateInput.schema";

export const JobSeekerCreateOneSchema = z.object({
  data: z.union([
    JobSeekerCreateInputObjectSchema,
    JobSeekerUncheckedCreateInputObjectSchema,
  ]),
});
