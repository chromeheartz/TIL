import InfiniteScroll from "react-infinite-scroller";
import { useQuery } from "react-query";
import { Person } from "./Person";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  // TODO: get data for InfiniteScroll via React Query
  const { data, isLoading } = useQuery("infinity", () => fetchUrl(initialUrl));
  console.log(data);

  if(isLoading) <h3>hello</h3>
  
  // return <InfiniteScroll />;
  return (
    <>
      {
        data.results.map((v, i) => {
          return <Person data={v} />
        })
      }
    </>
  )
}
