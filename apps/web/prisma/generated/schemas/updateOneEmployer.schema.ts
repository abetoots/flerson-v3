import { z } from "zod";
import { EmployerUpdateInputObjectSchema } from "./objects/EmployerUpdateInput.schema";
import { EmployerUncheckedUpdateInputObjectSchema } from "./objects/EmployerUncheckedUpdateInput.schema";
import { EmployerWhereUniqueInputObjectSchema } from "./objects/EmployerWhereUniqueInput.schema";

export const EmployerUpdateOneSchema = z.object({
  data: z.union([
    EmployerUpdateInputObjectSchema,
    EmployerUncheckedUpdateInputObjectSchema,
  ]),
  where: EmployerWhereUniqueInputObjectSchema,
});
