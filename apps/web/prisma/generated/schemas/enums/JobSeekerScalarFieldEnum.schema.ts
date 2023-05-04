import { z } from "zod";

export const JobSeekerScalarFieldEnumSchema = z.enum([
  "id",
  "firstName",
  "lastName",
  "email",
  "savedIds",
  "appliedIds",
]);
