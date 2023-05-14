"use client";
import { ComponentProps, useReducer, memo, useMemo, useCallback } from "react";

type SwatchProps = {
  param: { color: string };
  onClick: Function;
};

const Swatch = ({ param, onClick }: SwatchProps) => {
  console.log(`🥈 render:${param.color}`);
  return (
    <div
      className="w-64 h-64 rounded-2xl"
      style={{ backgroundColor: param.color }}
    ></div>
  );
};

// const MemoSwatch = memo(Swatch, (next, prev) => {
//   return prev.param.color === next.param.color; //# Looking inside
// });
const MemoSwatch = memo(Swatch);

const Memo = () => {
  const [count, reCount] = useReducer((c, add = 1) => c + add, 0);
  const [color, reColor] = useReducer(
    (c) => (c === "red" ? "blue" : "red"),
    "red",
  );

  console.log(`🥇 ${count}`);

  const param = useMemo(
    () => ({
      color,
    }),
    [color],
  );

  const onClick = useCallback(() => {}, []);

  return (
    <section className="grid gap-12 pt-32 mx-auto place-items-center">
      <p className="text-5xl">{count}</p>
      <button className="p-3 border rounded-2xl" onClick={() => reCount()}>
        re-render
      </button>
      <button className="p-3 border rounded-2xl" onClick={() => reColor()}>
        re-color
      </button>

      {/* <div>
        <Swatch color={color} />
      </div> */}
      <div>
        <MemoSwatch param={param} onClick={onClick} />
      </div>
    </section>
  );
};
export default Memo;
