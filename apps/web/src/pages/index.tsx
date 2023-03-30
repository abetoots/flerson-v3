import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import { notifyFetchError } from "~/components/notifications";

const Home: NextPage = () => {
  const query = api.jobs.list.useQuery(
    { ps: 20 },
    {
      onError: (error) => notifyFetchError(error, "Could not get job list"),
      refetchOnWindowFocus: false,
    }
  );

  console.log("query is working", query.data);

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
          {/* <section className="Home__searchWrap">
          <Search
            classes={{
              root: "Home__searchForm",
              input: "Home__searchInput",
            }}
            buttonIcon={searchIcon3}
            handleSubmit={searchHandler}
            state={searchState}
            stateHandler={setSearchState}
            label="Search job posts"
            enableAutoSearch={false}
            showLabel={false}
            placeholder="Search for jobs"
          />
          <Button
            classes={{
              root: "Home__showFiltersButton",
            }}
            onClick={mobileFiltersHandler}
          >
            <FontAwesomeIcon icon="filter" />
          </Button>
        </section>
        <section className="Home__filtersWrap">
          <JobFilters
            currentContextPosts={
              location.pathname === "/"
                ? jobNodes
                : location.pathname === "/filter"
                ? fetchedPosts
                : []
            }
            setCurrentPosts={setCurrentJobPosts}
            isHidden={!showJobFilters}
          />
        </section>
        <div className="Home__toggleJobsWrap">
          <h1 style={{ textAlign: "center" }}>Job Posts:</h1>
          <section className="Home__viewWrap">
            <ToggleJobs
              currentContextPosts={
                location.pathname === "/"
                  ? jobNodes
                  : location.pathname === "/filter"
                  ? fetchedPosts
                  : []
              }
              setCurrentPosts={setCurrentJobPosts}
            />
            <ViewJobs
              jobPosts={currentJobPosts}
              loading={searching || searchingByTag}
              message={message}
              handleTagClick={tagClickHandler}
            />
          </section>
        </div> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

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
