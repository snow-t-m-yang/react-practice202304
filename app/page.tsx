import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();

  console.log(data);
  return (
    <>
      <h1>{data.count}</h1>
      <img src={data.results[2].url} width="500" height="600" alt="pokemon" />
    </>
  );
}
