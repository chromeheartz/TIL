import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error
  } = useInfiniteQuery(
    "swapi-people",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: lastPage => lastPage.next || undefined,
    }
  );

  console.log(data);

  if (isLoading) return <div className="loading">Loading...</div>
  if (isError) return <div>Error! {error.toString()}</div>
  return (
    <>
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {
        data.pages.map(item => {
          return item.results.map(spec => (
            <Species
              key={spec.name}
              name={spec.name}
              language={spec.language}
              averageLifespan={spec.average_lifespan}
            />
          ))
        })
      }
      </InfiniteScroll>
    </>
  );
}
