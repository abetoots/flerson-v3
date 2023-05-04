import { z } from "zod";

export const CategorySchema = z.enum([
  "Programming",
  "VA",
  "Marketing",
  "Design",
  "Writing",
  "Teaching",
  "NonTech",
]);
