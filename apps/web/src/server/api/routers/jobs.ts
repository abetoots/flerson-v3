import type { Prisma } from "@prisma/client";
import {
  createTRPCRouter,
  publicProcedure,
  isCursorPaginable,
  isSearchable,
} from "~/server/api/trpc";
import { z } from "zod";
import { subDays, startOfYesterday, startOfToday } from "date-fns";
import { categorySchema, employmentTypeSchema, groupSchema } from "flerson-lib";

//https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#aggregateraw
const jobsRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      isCursorPaginable.merge(isSearchable).merge(
        z.object({
          group: groupSchema,
          category: z.array(categorySchema).nullish(),
          employmentType: z.array(employmentTypeSchema).nullish(),
          tag: z.string().nullish(),
        })
      )
    )
    .query(async ({ input, ctx }) => {
      console.log("input", input);
      //If cursor based, we set skip to 1 to skip the prevCursor itself
      //or not, depending on the behavior you want
      const filter = getPaginatedFilter({
        take: input.limit,
        cursor: input.cursor,
        skip: input.cursor ? 1 : undefined,
      });

      //only get valid posts
      filter.where = {
        ...filter.where,
        validThrough: {
          lte: new Date(),
        },
      };
      if (input.category && input.category.length > 0) {
        filter.where = {
          ...filter.where,
          category: {
            in: input.category,
          },
        };
      }

      if (input.employmentType && input.employmentType.length > 0) {
        filter.where = {
          ...filter.where,
          employmentType: { hasEvery: input.employmentType },
        };
      }

      if (input.tag) {
        filter.where = {
          ...filter.where,
          tags: {
            some: { name: input.tag }, //at least one tag: https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#filter-on-presence-of-related-records
            // every: {
            //   name: input.tag,
            // },
          },
        };
      }

      if (input.q) {
        filter.where = {
          ...filter.where,
          title: {
            contains: input.q,
            mode: "insensitive",
          },
        };
      }

      filter.orderBy = [
        {
          datePosted: "asc", //always oldest to newest first, first in first out
        },
      ];

      if (input.group === "priority") {
        filter.where = {
          ...filter.where,
          priority: {
            gt: 1,
          },
        };
        filter.orderBy = [
          ...filter.orderBy,
          {
            priority: "desc", //higher priority takes precedence
          },
        ];
      }

      //group by date ranges
      const today = startOfToday();
      const yesterday = startOfYesterday();
      const from7DaysAgo = subDays(new Date(), 7);
      const from30DaysAgo = subDays(new Date(), 30);

      if (input.group === "today") {
        yesterday.setHours(24, 0, 1);
        filter.where = {
          ...filter.where,
          //non-priority posts only
          priority: {
            equals: 1,
          },
          datePosted: {
            gte: today,
          },
        };
      }

      if (input.group === "yesterday") {
        yesterday.setHours(24, 0, 1);
        filter.where = {
          ...filter.where,
          //non-priority posts only
          priority: {
            equals: 1,
          },
          datePosted: {
            gte: yesterday,
            lt: today,
          },
        };
      }

      if (input.group === "past 7 days") {
        filter.where = {
          ...filter.where,
          //non-priority posts only
          priority: {
            equals: 1,
          },
          datePosted: {
            gte: from7DaysAgo,
            //don't include posts from yesterday
            //since they are already in the 'today' and 'yesterday' groups
            lt: yesterday,
          },
        };
      }

      if (input.group === "past 30 days") {
        filter.where = {
          ...filter.where,
          //non-priority posts only
          priority: {
            equals: 1,
          },
          datePosted: {
            gte: from30DaysAgo,
            //don't include posts from yesterday
            //since they are already in the 'today' and 'yesterday' groups
            lt: yesterday,
          },
        };
      }

      type JobWithEmployerAndTags = Prisma.JobGetPayload<{
        include: { employer: true; tags: true };
      }>;

      console.log("filter", filter);
      const data = (await ctx.prisma.job.findMany({
        ...filter,
        include: { employer: true, tags: true },
      })) as JobWithEmployerAndTags[];

      const lastEl = data[input.limit - 1];
      const nextCursor = lastEl?.id;

      //Instead of immediately awaiting the result of each operation when it's performed,
      //use transactions to batch queries and ensure that either all or none of them succeed
      //https://www.prisma.io/docs/concepts/components/prisma-client/transactions

      //1. Jobs with priority higher than 1 must be shown first.
      //Jobs with older priorityValidThrough must be first. This ensures a first in first out priority.

      return {
        data,
        prevCursor: input?.cursor || "",
        nextCursor,
      };
    }),
});

const getPaginatedFilter = ({
  take,
  skip,
  cursor,
}: {
  take: number;
  skip?: number;
  cursor?: string;
}) => {
  const filter: Prisma.JobFindManyArgs = {
    take,
    skip,
  };
  if (!!cursor) filter.cursor = { id: cursor };
  return filter;
};

export default jobsRouter;
