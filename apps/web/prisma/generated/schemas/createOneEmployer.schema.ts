import { z } from "zod";
import { EmployerCreateInputObjectSchema } from "./objects/EmployerCreateInput.schema";
import { EmployerUncheckedCreateInputObjectSchema } from "./objects/EmployerUncheckedCreateInput.schema";

export const EmployerCreateOneSchema = z.object({
  data: z.union([
    EmployerCreateInputObjectSchema,
    EmployerUncheckedCreateInputObjectSchema,
  ]),
});
