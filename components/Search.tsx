"use client";
import { useState } from "react";
import axios from "axios";

interface Synonym {
  score: number;
  word: string;
}

const API_URL = process.env.API_URL ?? "https://api.datamuse.com";

const Search = () => {
  const [input, setInput] = useState<string>();
  const [data, setData] = useState<Synonym[]>();

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_URL}/words?rel_syn=${input}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOnItem = async (item: string) => {
    setInput(item);
    try {
      const response = await axios.get(`${API_URL}/words?rel_syn=${item}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid gap-10 pt-32 text-2xl text-blue-200 place-items-center">
      <form onSubmit={handleFetch} className="flex gap-5">
        <label htmlFor="search"></label>
        Word{" "}
        <input
          value={input}
          className="w-32 px-3 bg-gray-500 rounded-md "
          onChange={(e) => setInput(e.target.value)}
          id="search"
          type="text"
        />
        <button className="px-2 py-2 border rounded-md ">Submit</button>
      </form>
      <div className="text-4xl text-blue-500">
        {data?.map((item: Synonym) => (
          <p key={item.score} onClick={() => handleClickOnItem(item.word)}>
            {item.word}
          </p>
        ))}
      </div>
    </section>
  );
};
export default Search;
