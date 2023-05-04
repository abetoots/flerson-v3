import { z } from "zod";
import { JobSeekerOrderByWithRelationInputObjectSchema } from "./objects/JobSeekerOrderByWithRelationInput.schema";
import { JobSeekerWhereInputObjectSchema } from "./objects/JobSeekerWhereInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./objects/JobSeekerWhereUniqueInput.schema";
import { JobSeekerCountAggregateInputObjectSchema } from "./objects/JobSeekerCountAggregateInput.schema";
import { JobSeekerMinAggregateInputObjectSchema } from "./objects/JobSeekerMinAggregateInput.schema";
import { JobSeekerMaxAggregateInputObjectSchema } from "./objects/JobSeekerMaxAggregateInput.schema";

export const JobSeekerAggregateSchema = z.object({
  orderBy: z
    .union([
      JobSeekerOrderByWithRelationInputObjectSchema,
      JobSeekerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: JobSeekerWhereInputObjectSchema.optional(),
  cursor: JobSeekerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), JobSeekerCountAggregateInputObjectSchema])
    .optional(),
  _min: JobSeekerMinAggregateInputObjectSchema.optional(),
  _max: JobSeekerMaxAggregateInputObjectSchema.optional(),
});
