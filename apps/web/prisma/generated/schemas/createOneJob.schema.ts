import { z } from "zod";
import { JobCreateInputObjectSchema } from "./objects/JobCreateInput.schema";
import { JobUncheckedCreateInputObjectSchema } from "./objects/JobUncheckedCreateInput.schema";

export const JobCreateOneSchema = z.object({
  data: z.union([
    JobCreateInputObjectSchema,
    JobUncheckedCreateInputObjectSchema,
  ]),
});
