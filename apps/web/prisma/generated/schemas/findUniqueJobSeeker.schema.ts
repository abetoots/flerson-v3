import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./objects/JobSeekerWhereUniqueInput.schema";

export const JobSeekerFindUniqueSchema = z.object({
  where: JobSeekerWhereUniqueInputObjectSchema,
});
