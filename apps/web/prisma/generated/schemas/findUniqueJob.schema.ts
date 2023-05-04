import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./objects/JobWhereUniqueInput.schema";

export const JobFindUniqueSchema = z.object({
  where: JobWhereUniqueInputObjectSchema,
});
