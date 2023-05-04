import { z } from "zod";
import { JobSeekerWhereUniqueInputObjectSchema } from "./objects/JobSeekerWhereUniqueInput.schema";
import { JobSeekerCreateInputObjectSchema } from "./objects/JobSeekerCreateInput.schema";
import { JobSeekerUncheckedCreateInputObjectSchema } from "./objects/JobSeekerUncheckedCreateInput.schema";
import { JobSeekerUpdateInputObjectSchema } from "./objects/JobSeekerUpdateInput.schema";
import { JobSeekerUncheckedUpdateInputObjectSchema } from "./objects/JobSeekerUncheckedUpdateInput.schema";

export const JobSeekerUpsertSchema = z.object({
  where: JobSeekerWhereUniqueInputObjectSchema,
  create: z.union([
    JobSeekerCreateInputObjectSchema,
    JobSeekerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    JobSeekerUpdateInputObjectSchema,
    JobSeekerUncheckedUpdateInputObjectSchema,
  ]),
});
