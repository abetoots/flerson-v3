import { z } from "zod";

export const EmployerTypeSchema = z.enum(["SINGLE", "COMPANY"]);
