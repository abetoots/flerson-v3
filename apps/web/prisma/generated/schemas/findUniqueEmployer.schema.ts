import { z } from "zod";
import { EmployerWhereUniqueInputObjectSchema } from "./objects/EmployerWhereUniqueInput.schema";

export const EmployerFindUniqueSchema = z.object({
  where: EmployerWhereUniqueInputObjectSchema,
});
