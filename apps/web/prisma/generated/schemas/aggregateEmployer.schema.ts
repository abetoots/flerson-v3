import { z } from "zod";
import { EmployerOrderByWithRelationInputObjectSchema } from "./objects/EmployerOrderByWithRelationInput.schema";
import { EmployerWhereInputObjectSchema } from "./objects/EmployerWhereInput.schema";
import { EmployerWhereUniqueInputObjectSchema } from "./objects/EmployerWhereUniqueInput.schema";
import { EmployerCountAggregateInputObjectSchema } from "./objects/EmployerCountAggregateInput.schema";
import { EmployerMinAggregateInputObjectSchema } from "./objects/EmployerMinAggregateInput.schema";
import { EmployerMaxAggregateInputObjectSchema } from "./objects/EmployerMaxAggregateInput.schema";

export const EmployerAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), EmployerCountAggregateInputObjectSchema])
    .optional(),
  _min: EmployerMinAggregateInputObjectSchema.optional(),
  _max: EmployerMaxAggregateInputObjectSchema.optional(),
});
