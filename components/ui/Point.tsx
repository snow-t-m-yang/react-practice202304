"use client";
import { useState } from "react";

type Point = {
  x: number;
  y: number;
};

const Point = () => {
  const [pointPosition, setPointPosition] = useState<Point[]>([]);
  const [popedPoint, setPopedPoint] = useState<Point[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPointPosition([...pointPosition, { x: clientX, y: clientY }]);
  };

  const handleClear = () => {
    console.log("clear");
    setPointPosition([]);
  };

  const handleUndo = () => {
    const newPoints = [...pointPosition];
    const poped = newPoints.pop();
    if (!poped) return;
    setPopedPoint([...popedPoint, poped]);
    setPointPosition(newPoints);
  };

  const handleRedo = () => {
    const newPopedPoints = [...popedPoint];
    const justPoped = newPopedPoints.pop();
    if (!justPoped) return;
    setPointPosition([...pointPosition, justPoped]);
    setPopedPoint(newPopedPoints);
  };

  return (
    <>
      <section
        className="relative min-h-screen pt-32 cursor-pointer"
        onClick={handleClick}
      >
        {pointPosition.map((point) => (
          <div
            key={point.x}
            className={`absolute w-5 h-5 rounded-full `}
            style={{ left: point.x - 20, top: point.y - 15 }}
          >
            ❄️
          </div>
        ))}
      </section>
      <div className="fixed z-20 flex gap-12 gap-10rounded-2xl top-16">
        <button
          onClick={handleClear}
          disabled={!pointPosition.length}
          className="px-3 py-2 text-2xl rounded-md disabled:bg-sky-900 bg-sky-500"
        >
          Clear
        </button>
        <button
          disabled={!pointPosition.length}
          onClick={handleUndo}
          className="px-3 py-2 text-2xl rounded-md disabled:bg-sky-900 bg-sky-500"
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={!popedPoint.length}
          className="px-3 py-2 text-2xl rounded-md disabled:bg-sky-900 bg-sky-500"
        >
          Redo
        </button>
      </div>
    </>
  );
};

export default Point;
