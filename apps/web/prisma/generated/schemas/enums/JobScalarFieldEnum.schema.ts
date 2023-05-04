import { z } from "zod";

export const JobScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "howToApply",
  "employerId",
  "employmentType",
  "applicantLocationRequirements",
  "validThrough",
  "category",
  "directApply",
  "applyUrl",
  "applyEmail",
  "imageUrl",
  "tagIds",
  "datePosted",
  "updatedAt",
  "savedByIds",
  "applicantIds",
  "priority",
  "highlight",
]);
