import { z } from "zod";
import { EmployerWhereUniqueInputObjectSchema } from "./objects/EmployerWhereUniqueInput.schema";

export const EmployerDeleteOneSchema = z.object({
  where: EmployerWhereUniqueInputObjectSchema,
});
