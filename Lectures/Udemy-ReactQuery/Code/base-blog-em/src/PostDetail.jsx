import { useMutation, useQuery } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  const { data, isLoading, isError, error } = useQuery(["comments", post.id], () => fetchComments(post.id));

  const deleteMutation = useMutation(() => deletePost(post.id));
  const updateMutation = useMutation(() => updatePost(post.id));

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) 
    return (
      <>
        <h3>Comments Loading Fail</h3>
      </>
    );

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate()}>Delete</button>
      <button onClick={() => updateMutation.mutate()}>Update title</button>
      <p>{post.body}</p>

      <>
        {
          deleteMutation.isError && <p style={{color: 'red'}}>Error deleting the post</p>
        }
        {
          deleteMutation.isLoading && <p style={{color: 'purple'}}>Deleting the post</p>
        }
        {
          deleteMutation.isSuccess && <p style={{color: 'blue'}}>Post has (not) been deleted</p>
        }  

        {
          updateMutation.isError && <p style={{color: 'red'}}>Error updating the post</p>
        }
        {
          updateMutation.isLoading && <p style={{color: 'purple'}}>Updating the post</p>
        }
        {
          updateMutation.isSuccess && <p style={{color: 'blue'}}>Post has (not) been updated</p>
        }  
      </>
      <h4>Comments</h4>
      {data.map(comment => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
