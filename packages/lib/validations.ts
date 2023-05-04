import { z } from "zod";

export const groupSchema = z.union([
  z.literal("priority"),
  z.literal("today"),
  z.literal("yesterday"),
  z.literal("past 7 days"),
  z.literal("past 30 days"),
]);

export const categorySchema = z.union([
  z.literal("Programming"),
  z.literal("VA"),
  z.literal("Marketing"),
  z.literal("Design"),
  z.literal("Writing"),
  z.literal("Teaching"),
  z.literal("NonTech"),
]);

export const employmentTypeSchema = z.union([
  z.literal("FULL_TIME"),
  z.literal("PART_TIME"),
  z.literal("CONTRACTOR"),
  z.literal("TEMPORARY"),
  z.literal("OTHER"),
]);

export type GroupType = z.infer<typeof groupSchema>;
