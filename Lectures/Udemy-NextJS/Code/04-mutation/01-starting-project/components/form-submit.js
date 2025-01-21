"use client";
export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>creating post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
