import { z } from "zod";
import { JobSeekerWhereInputObjectSchema } from "./objects/JobSeekerWhereInput.schema";
import { JobSeekerOrderByWithAggregationInputObjectSchema } from "./objects/JobSeekerOrderByWithAggregationInput.schema";
import { JobSeekerScalarWhereWithAggregatesInputObjectSchema } from "./objects/JobSeekerScalarWhereWithAggregatesInput.schema";
import { JobSeekerScalarFieldEnumSchema } from "./enums/JobSeekerScalarFieldEnum.schema";

export const JobSeekerGroupBySchema = z.object({
  where: JobSeekerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      JobSeekerOrderByWithAggregationInputObjectSchema,
      JobSeekerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: JobSeekerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(JobSeekerScalarFieldEnumSchema),
});
