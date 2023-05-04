import { z } from "zod";
import { EmployerWhereUniqueInputObjectSchema } from "./objects/EmployerWhereUniqueInput.schema";
import { EmployerCreateInputObjectSchema } from "./objects/EmployerCreateInput.schema";
import { EmployerUncheckedCreateInputObjectSchema } from "./objects/EmployerUncheckedCreateInput.schema";
import { EmployerUpdateInputObjectSchema } from "./objects/EmployerUpdateInput.schema";
import { EmployerUncheckedUpdateInputObjectSchema } from "./objects/EmployerUncheckedUpdateInput.schema";

export const EmployerUpsertSchema = z.object({
  where: EmployerWhereUniqueInputObjectSchema,
  create: z.union([
    EmployerCreateInputObjectSchema,
    EmployerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EmployerUpdateInputObjectSchema,
    EmployerUncheckedUpdateInputObjectSchema,
  ]),
});
