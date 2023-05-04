import { z } from "zod";
import { EmployerWhereInputObjectSchema } from "./objects/EmployerWhereInput.schema";
import { EmployerOrderByWithAggregationInputObjectSchema } from "./objects/EmployerOrderByWithAggregationInput.schema";
import { EmployerScalarWhereWithAggregatesInputObjectSchema } from "./objects/EmployerScalarWhereWithAggregatesInput.schema";
import { EmployerScalarFieldEnumSchema } from "./enums/EmployerScalarFieldEnum.schema";

export const EmployerGroupBySchema = z.object({
  where: EmployerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EmployerOrderByWithAggregationInputObjectSchema,
      EmployerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EmployerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EmployerScalarFieldEnumSchema),
});
