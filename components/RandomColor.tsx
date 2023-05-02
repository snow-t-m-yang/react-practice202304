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

  const handleClick = (answer: string) => {
    if (answer === color) {
      alert("Correct!");
      const randomColor = getRandomColor();
      setColor(randomColor);
      setAnswers(
        [randomColor, getRandomColor(), getRandomColor()].sort(
          () => Math.random() - 0.5,
        ),
      );
    } else {
      alert("Wrong!");
    }
  };

  return (
    <section className="min-h-screen ">
      <div className="pt-32 space-y-10 text-center">
        <h1 className="text-2xl ">What the HEX?</h1>
        <div className="grid justify-center gap-10">
          <div
            className={`w-64 h-64 rounded-2xl justify-self-center`}
            style={{ backgroundColor: color }}
          ></div>
          <div className="flex gap-10">
            {answers.map((answer) => (
              <button
                className="px-3 py-5 border rounded-2xl"
                key={answer}
                onClick={() => handleClick(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
