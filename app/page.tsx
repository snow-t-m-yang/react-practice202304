import Image from "next/image";

export default async function Home() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <h1>Hokkaido</h1>;
}
