import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <>
      <h1>news page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
