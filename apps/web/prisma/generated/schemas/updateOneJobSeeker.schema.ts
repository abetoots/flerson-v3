import { z } from "zod";
import { JobSeekerUpdateInputObjectSchema } from "./objects/JobSeekerUpdateInput.schema";
import { JobSeekerUncheckedUpdateInputObjectSchema } from "./objects/JobSeekerUncheckedUpdateInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./objects/JobSeekerWhereUniqueInput.schema";

export const JobSeekerUpdateOneSchema = z.object({
  data: z.union([
    JobSeekerUpdateInputObjectSchema,
    JobSeekerUncheckedUpdateInputObjectSchema,
  ]),
  where: JobSeekerWhereUniqueInputObjectSchema,
});
