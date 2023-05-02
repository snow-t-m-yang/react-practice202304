"use client";

import { useState, useEffect } from "react";

const page = () => {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i: number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const randomColor = getRandomColor();
    setColor(randomColor);
    setAnswers(
      [randomColor, getRandomColor(), getRandomColor()].sort(
        () => Math.random() - 0.5,
      ),
    );
  }, []);

  return (
    <section className="grid min-h-screen place-items-center">
      <h1>What the HEX?</h1>
      <div>
        <div
          className={`w-64 h-64 rounded-2xl`}
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div className="flex gap-10">
        {answers.map((answer) => (
          <button className="px-3 py-5 border rounded-2xl" key={answer}>
            {answer}
          </button>
        ))}
      </div>
    </section>
  );
};
export default page;
