//Components
import Button from "~/components/Button/Button";
import Head from "next/head";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import { notifyFetchError } from "~/components/notifications";
import React, { useCallback, useRef, useState } from "react";
import Search from "~/components/Search/Search";
import { HiFunnel } from "react-icons/hi2";
import JobFilters from "~/components/composed/JobFilters/JobFilters";
import JobCard from "~/components/JobCard/JobCard";
import { RiLoader4Line } from "react-icons/ri";
import { H2, H3 } from "~/components/typography";

//Misc
import styles from "./index.module.css";
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { createQueryString } from "~/utils/utils";
import { debugPagination } from "flerson-lib";

//Types
import type { NextPage } from "next";
import type { JobCardProps } from "~/components/JobCard/JobCard";
import type { Category, EmploymentType, Prisma } from "@prisma/client";
import type { TagsProps } from "~/components/Tags/Tags";
import type { JobFiltersProps } from "~/components/composed/JobFilters/JobFilters";
import type { GroupType } from "flerson-lib";
import type { InfiniteData } from "@tanstack/react-query";

const groupOrder: GroupType[] = [
  "priority",
  "today",
  "yesterday",
  "past 7 days",
  "past 30 days",
];

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  queryClient.setQueryDefaults(getQueryKey(api.jobs), {
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const router = useRouter();
  const pathname = usePathname();

  const [showFilters, setShowFilters] = useState(false);
  const [pageExhausted, setPageExhausted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const searchParams = useSearchParams();

  const category = searchParams.getAll("category") as Category[];
  const employmentType = searchParams.getAll(
    "employmentTypes"
  ) as EmploymentType[];
  const search = searchParams.get("q") as string;
  const tag = searchParams.get("tag");

  const priorityGroupQuery = api.jobs.list.useInfiniteQuery(
    { limit: 10, group: "priority", category, employmentType, q: search, tag },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onError: (error) => notifyFetchError(error, "Could not get job list"),
    }
  );
  type InfiniteQueryType = typeof priorityGroupQuery;

  const todayGroupQuery = api.jobs.list.useInfiniteQuery(
    { limit: 10, group: "today", category, employmentType, q: search, tag },
    {
      enabled: false,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onError: (error) => notifyFetchError(error, "Could not get job list"),
    }
  );

  const yesterdayGroupQuery = api.jobs.list.useInfiniteQuery(
    { limit: 10, group: "yesterday", category, employmentType, q: search, tag },
    {
      enabled: false,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onError: (error) => notifyFetchError(error, "Could not get job list"),
    }
  );

  const past7DaysQuery = api.jobs.list.useInfiniteQuery(
    {
      limit: 10,
      group: "past 7 days",
      category,
      employmentType,
      q: search,
      tag,
    },
    {
      enabled: false,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onError: (error) => notifyFetchError(error, "Could not get job list"),
    }
  );

  const past30DaysQuery = api.jobs.list.useInfiniteQuery(
    {
      limit: 10,
      group: "past 30 days",
      category,
      employmentType,
      q: search,
      tag,
    },
    {
      enabled: false,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onError: (error) => notifyFetchError(error, "Could not get job list"),
    }
  );

  const observerRef = useRef<IntersectionObserver>();

  //load each group in order
  //when a group is exhausted, fetchNextPage for the next group
  //until every group is exhausted
  const loadMore = useCallback(
    async (groupToFetch: GroupType, query?: InfiniteQueryType) => {
      setLoading(true);
      if (!query) {
        query = priorityGroupQuery;
      }
      //if current group still hasNextPage, fetch it
      if (
        (!query.isFetching && query.hasNextPage === true) ||
        !query.isFetched
      ) {
        debugPagination("fetchingNextPage", { groupToFetch, query });
        await query.fetchNextPage();
      } else if (
        !query.isFetchingNextPage &&
        !query.hasNextPage &&
        !query.isFetching
      ) {
        //if current group doesnt have nextPage, load the next group if it exists

        const nextGroup =
          groupOrder[groupOrder.findIndex((i) => i === groupToFetch) + 1];
        let queryToUse: InfiniteQueryType = query;
        if (nextGroup) {
          if (nextGroup === "today") {
            queryToUse = todayGroupQuery;
          }
          if (nextGroup === "yesterday") {
            queryToUse = yesterdayGroupQuery;
          }
          if (nextGroup === "past 7 days") {
            queryToUse = past7DaysQuery;
          }
          if (nextGroup === "past 30 days") {
            queryToUse = past30DaysQuery;
          }

          debugPagination("fetchingNextGroup", {
            prevQuery: query,
            nextGroup,
            query: queryToUse,
          });
          await loadMore(nextGroup, queryToUse);
        } else {
          //else, signal that every group has been loaded
          debugPagination("loadMore exhausted");
          setPageExhausted(true);
        }
      }

      setLoading(false);
    },
    [
      priorityGroupQuery,
      past30DaysQuery,
      past7DaysQuery,
      todayGroupQuery,
      yesterdayGroupQuery,
    ]
  );

  //A ref callback.React will call the ref callback with the DOM element when the component mounts,
  //and call it with null when it unmounts.
  const observeElement = useCallback(
    (element: HTMLDivElement) => {
      if (observerRef.current) {
        debugPagination(
          "observer for previous rendered element exists. disconnecting"
        );
        observerRef.current.disconnect();
      }
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio === 1) {
              void loadMore("priority");
              //stop observing when loadmore is called
              observerRef.current?.unobserve(entry.target);
            }
          }
        },
        {
          threshold: 1,
        }
      );
      if (element && !loading) {
        debugPagination(
          "element rendered. observing element. calling callback when/if element is visible"
        );
        observerRef.current.observe(element);
      }
    },
    [loadMore, loading]
  );

  const applyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const tagClickHandler: TagsProps["onClick"] = (e, tag, isPrimary) => {
    e.preventDefault();
    if (isPrimary) {
      return void router.push(`${pathname}?category=${tag}`);
    }
    return void router.push(`${pathname}?tag=${tag}`);
  };

  //   useEffect(() => {
  //     const handler1 = () => {
  //       console.log("Current Active", document.activeElement);
  //     };
  //     document.addEventListener("mouseup", handler1);
  //     document.addEventListener("keyup", handler1);

  //     const handler2 = (e: KeyboardEvent) => {
  //       if (e.key === "Tab") {
  //         console.log("Current Active", document.activeElement);
  //       }
  //     };

  //     return () => {
  //       document.removeEventListener("mouseup", handler1);
  //       document.removeEventListener("keyup", handler2);
  //     };
  //   }, []);

  const searchHandler = (val: string) => {
    void router.push(`${pathname}?q=${val}`);
  };

  const showFiltersHandler = () => {
    setShowFilters((prevVal) => !prevVal);
  };

  const filterHandler: JobFiltersProps["onFilter"] = ({
    pickedCategories,
    pickedEmploymentTypes,
  }) => {
    const queries = ["?"];
    const categoryQueries = createQueryString("category", pickedCategories);
    categoryQueries && queries.push(categoryQueries) && queries.push("&");

    const employmentTypeQueries = createQueryString(
      "employmentTypes",
      pickedEmploymentTypes
    );
    employmentTypeQueries && queries.push(employmentTypeQueries);

    void router.push(`${pathname}${queries.join("")}`);
  };

  //https://developers.facebook.com/docs/sharing/webmasters/
  return (
    <>
      <Head>
        <title>Remote Job Board | Flerson</title>
        <meta
          name="description"
          content="A super simple job board platform for finding/posting remote jobs."
        />
        <meta name="og:url" content="https://flerson.com" />
        <meta name="og:title" content="Remote Job Board | Flerson" />
        <meta
          name="og:description"
          content="A super simple job board platform for finding/posting remote jobs."
        />
        <meta name="og:type" content="website" />
        <meta name="fb:app_id" content="596617162368872" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 p-3" style={{ backgroundColor: "#f1f5f9" }}>
          <section className={styles.Home__searchWrap}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (formRef.current) {
                  const searchData = new FormData(formRef.current).get(
                    "searchJob"
                  );
                  typeof searchData === "string" && searchHandler(searchData);
                }
              }}
              ref={formRef}
            >
              <Search
                name="searchJob"
                classes={{
                  root: "m-0 relative",
                  input: styles.Home__searchInput,
                  button: styles.Home__searchButton,
                  inputFocused: styles._focused,
                }}
                placeholder="Search for jobs"
              />
            </form>
            <Button
              classes={{
                root: styles.Home__showFiltersButton,
                focused: styles._focused,
              }}
              onClick={showFiltersHandler}
            >
              <HiFunnel width={20} className="mx-auto" />
            </Button>
          </section>
          <section className="mb-6">
            <JobFilters isHidden={!showFilters} onFilter={filterHandler} />
          </section>
          <div className="mx-auto md:w-9/12">
            <JobList
              data={[
                { header: null, items: priorityGroupQuery.data },
                { header: "Today", items: todayGroupQuery.data },
                { header: "Yesterday", items: yesterdayGroupQuery.data },
                { header: "Past 7 Days", items: past7DaysQuery.data },
                { header: "Past 30 Days", items: past30DaysQuery.data },
              ]}
              applyHandler={applyHandler}
              tagClickHandler={tagClickHandler}
            />
          </div>
          {loading ? (
            <div className="flex w-full items-center justify-center p-5">
              <RiLoader4Line className="h-8 w-8 animate-spin" />
            </div>
          ) : null}
          {pageExhausted ? (
            <div className="flex w-full justify-center p-5">
              <H3>No more jobs</H3>
            </div>
          ) : null}
          <div ref={observeElement}>{}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

type JobWithEmployerAndTags = Prisma.JobGetPayload<{
  include: { employer: true; tags: true };
}>;
type JobListProps = {
  data: {
    header: string | null;
    items:
      | InfiniteData<{
          data: JobWithEmployerAndTags[];
          prevCursor: string;
          nextCursor: string | undefined;
        }>
      | undefined;
  }[];
  applyHandler: JobCardProps["onApply"];
  tagClickHandler: TagsProps["onClick"];
};

const JobList = ({ data, applyHandler, tagClickHandler }: JobListProps) => {
  return (
    <>
      {data.map((i) => (
        <section key={i.header} className="mb-6">
          {i.items?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {i.header && index === 0 ? (
                <H2 className="mb-4">{i.header}</H2>
              ) : null}
              {page.data.map((item) => (
                <JobCard
                  key={item.id}
                  category={item.category}
                  employerName={item.employer.name}
                  employerWebsite={item.employer.url}
                  highlightColor={item.highlight}
                  imageUrl={item.imageUrl}
                  href={`/job/${item.id}`}
                  jobTitle={item.title}
                  location={item.applicantLocationRequirements}
                  tags={item.tags?.map((t) => t.name)}
                  onApply={applyHandler}
                  onTagClick={tagClickHandler}
                />
              ))}
            </React.Fragment>
          ))}
        </section>
      ))}
    </>
  );
};

export const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  //   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //     undefined, // no input
  //     { enabled: sessionData?.user !== undefined }
  //   );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {/* {secretMessage && <span> - {secretMessage}</span>} */}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
