import type { Prisma } from "@prisma/client";
import {
  createTRPCRouter,
  publicProcedure,
  isCursorPaginable,
  getSkipLimit,
} from "~/server/api/trpc";

const jobsRouter = createTRPCRouter({
  list: publicProcedure
    .input(isCursorPaginable)
    .query(async ({ input, ctx }) => {
      const { skip, limit } = getSkipLimit(input);
      const filter: Prisma.JobFindManyArgs = {
        take: limit,
        skip,
        orderBy: [
          {
            datePosted: "desc",
          },
          {
            priority: "desc", //higher priority takes precedence
          },
        ],
      };
      if (!!input?.prevCursor) filter.cursor = { id: input.prevCursor };
      const data = await ctx.prisma.job.findMany(filter);

      const lastEl = data[limit - 1];
      const nextCursor = lastEl?.id || "";

      return {
        data,
        prevCursor: input?.prevCursor || "",
        nextCursor,
      };
    }),
});

export default jobsRouter;
