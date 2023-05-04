import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./objects/JobSeekerWhereUniqueInput.schema";

export const JobSeekerDeleteOneSchema = z.object({
  where: JobSeekerWhereUniqueInputObjectSchema,
});
