export function Person({ data }) {
  return (
    <li>
      {data.name}
      <ul>
        <li>hair: {data.hairColor}</li>
        <li>eyes: {data.eyeColor}</li>
      </ul>
    </li>
  );
}
