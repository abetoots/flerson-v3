import { z } from "zod";
import { EmployerOrderByWithRelationInputObjectSchema } from "./objects/EmployerOrderByWithRelationInput.schema";
import { EmployerWhereInputObjectSchema } from "./objects/EmployerWhereInput.schema";
import { EmployerWhereUniqueInputObjectSchema } from "./objects/EmployerWhereUniqueInput.schema";
import { EmployerScalarFieldEnumSchema } from "./enums/EmployerScalarFieldEnum.schema";

export const EmployerFindFirstSchema = z.object({
  orderBy: z
    .union([
      EmployerOrderByWithRelationInputObjectSchema,
      EmployerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EmployerWhereInputObjectSchema.optional(),
  cursor: EmployerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EmployerScalarFieldEnumSchema).optional(),
});
