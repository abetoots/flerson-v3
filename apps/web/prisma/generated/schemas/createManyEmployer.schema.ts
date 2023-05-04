import { z } from "zod";
import { EmployerCreateManyInputObjectSchema } from "./objects/EmployerCreateManyInput.schema";

export const EmployerCreateManySchema = z.object({
  data: z.union([
    EmployerCreateManyInputObjectSchema,
    z.array(EmployerCreateManyInputObjectSchema),
  ]),
});
