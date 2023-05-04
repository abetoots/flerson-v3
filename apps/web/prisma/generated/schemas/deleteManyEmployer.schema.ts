import { z } from "zod";
import { EmployerWhereInputObjectSchema } from "./objects/EmployerWhereInput.schema";

export const EmployerDeleteManySchema = z.object({
  where: EmployerWhereInputObjectSchema.optional(),
});
