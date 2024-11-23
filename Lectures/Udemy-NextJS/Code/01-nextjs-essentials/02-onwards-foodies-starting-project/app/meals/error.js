"use client";
export default function Error({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>Meals error occured!</h1>
      <p>Failed to fetch meal data.Please try again later</p>
    </main>
  );
}
