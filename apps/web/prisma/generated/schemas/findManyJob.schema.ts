import { z } from "zod";
import { JobOrderByWithRelationInputObjectSchema } from "./objects/JobOrderByWithRelationInput.schema";
import { JobWhereInputObjectSchema } from "./objects/JobWhereInput.schema";
import { JobWhereUniqueInputObjectSchema } from "./objects/JobWhereUniqueInput.schema";
import { JobScalarFieldEnumSchema } from "./enums/JobScalarFieldEnum.schema";

export const JobFindManySchema = z.object({
  orderBy: z
    .union([
      JobOrderByWithRelationInputObjectSchema,
      JobOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: JobWhereInputObjectSchema.optional(),
  cursor: JobWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(JobScalarFieldEnumSchema).optional(),
});
