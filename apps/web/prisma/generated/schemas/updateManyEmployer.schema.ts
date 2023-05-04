import { z } from "zod";
import { EmployerUpdateManyMutationInputObjectSchema } from "./objects/EmployerUpdateManyMutationInput.schema";
import { EmployerWhereInputObjectSchema } from "./objects/EmployerWhereInput.schema";

export const EmployerUpdateManySchema = z.object({
  data: EmployerUpdateManyMutationInputObjectSchema,
  where: EmployerWhereInputObjectSchema.optional(),
});
