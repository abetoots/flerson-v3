import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./objects/JobWhereUniqueInput.schema";

export const JobDeleteOneSchema = z.object({
  where: JobWhereUniqueInputObjectSchema,
});
