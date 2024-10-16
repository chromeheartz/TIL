import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <p>
        <Link href="/about" className="my-link">
          About Us
        </Link>
      </p>
    </main>
  );
}
