import React from "react";

const BlogPostPage = ({ params }) => {
  return (
    <main>
      <h1>slug blog post page</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostPage;
