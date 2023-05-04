import { z } from "zod";

export const SalaryUnitTypeSchema = z.enum(["HOUR", "MONTH", "ANNUAL"]);
