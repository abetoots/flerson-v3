import { z } from "zod";
import { JobSeekerOrderByWithRelationInputObjectSchema } from "./objects/JobSeekerOrderByWithRelationInput.schema";
import { JobSeekerWhereInputObjectSchema } from "./objects/JobSeekerWhereInput.schema";
import { JobSeekerWhereUniqueInputObjectSchema } from "./objects/JobSeekerWhereUniqueInput.schema";
import { JobSeekerScalarFieldEnumSchema } from "./enums/JobSeekerScalarFieldEnum.schema";

export const JobSeekerFindManySchema = z.object({
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
  distinct: z.array(JobSeekerScalarFieldEnumSchema).optional(),
});
