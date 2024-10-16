import Link from "next/link";
import React from "react";

const BlogPage = () => (
  <main>
    <h1>The Blog</h1>
    <p>
      <Link href="/blog/post-1">Post - 1</Link>
    </p>
    <p>
      <Link href="/blog/post-2">Post - 2</Link>
    </p>
  </main>
);

export default BlogPage;
