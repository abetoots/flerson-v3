import { z } from "zod";
import { JobUpdateInputObjectSchema } from "./objects/JobUpdateInput.schema";
import { JobUncheckedUpdateInputObjectSchema } from "./objects/JobUncheckedUpdateInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./objects/JobWhereUniqueInput.schema";

export const JobUpdateOneSchema = z.object({
  data: z.union([
    JobUpdateInputObjectSchema,
    JobUncheckedUpdateInputObjectSchema,
  ]),
  where: JobWhereUniqueInputObjectSchema,
});
