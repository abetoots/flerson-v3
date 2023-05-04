import { z } from "zod";
import { JobWhereUniqueInputObjectSchema } from "./objects/JobWhereUniqueInput.schema";
import { JobCreateInputObjectSchema } from "./objects/JobCreateInput.schema";
import { JobUncheckedCreateInputObjectSchema } from "./objects/JobUncheckedCreateInput.schema";
import { JobUpdateInputObjectSchema } from "./objects/JobUpdateInput.schema";
import { JobUncheckedUpdateInputObjectSchema } from "./objects/JobUncheckedUpdateInput.schema";

export const JobUpsertSchema = z.object({
  where: JobWhereUniqueInputObjectSchema,
  create: z.union([
    JobCreateInputObjectSchema,
    JobUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    JobUpdateInputObjectSchema,
    JobUncheckedUpdateInputObjectSchema,
  ]),
});
