import { z } from "zod";

export const EmployerScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "logo",
  "url",
  "type",
]);
