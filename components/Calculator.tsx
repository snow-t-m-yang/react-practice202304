"use client";
import { useReducer } from "react";

type State = {
  output: string;
};

type Action =
  | { type: "SET_OUTPUT"; payload: string }
  | { type: "CLEAR_OUTPUT" };

const initialState: State = {
  output: "0",
};

const calcuReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_OUTPUT":
      return { output: action.payload };
    case "CLEAR_OUTPUT":
      return { output: "0" };
    default:
      return state;
  }
};

const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(calcuReducer, initialState);

  const handleInput = (e: React.MouseEvent<HTMLElement>) => {
    const input = (e.target as HTMLElement)?.textContent ?? "";
    if (input === "AC") {
      dispatch({ type: "CLEAR_OUTPUT" });
      return;
    }

    if (state.output === "0") {
      dispatch({ type: "SET_OUTPUT", payload: input });
    } else {
      dispatch({ type: "SET_OUTPUT", payload: state.output + input });
    }
  };

  const handleOperator = (e: React.MouseEvent) => {
    const operator = (e.target as HTMLElement)?.textContent ?? "";
    dispatch({ type: "SET_OUTPUT", payload: `${state.output}${operator}` });
  };

  const handleEqual = () => {
    const expression = state.output.split(/([-+*/])/);
    console.log(expression);
    let result = Number(expression[0]);

    for (let i = 1; i < expression.length; i += 2) {
      const operator = expression[i];
      const operand = Number(expression[i + 1]);

      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          result /= operand;
          break;
      }
    }
    console.log(expression);
    dispatch({
      type: "SET_OUTPUT",
      payload: (Math.round(result * 100) / 100).toString(),
    });
  };

  return (
    <section className="grid max-w-xl gap-10 pt-32 text-blue-200 text-7xl place-items-center">
      <div className="flex flex-wrap max-w-xl">
        <h1 className="">{state.output}</h1>
      </div>
      <div className="grid grid-cols-3 text-7xl">
        <button onClick={handleInput}>0</button>
        <button onClick={handleInput}>1</button>
        <button onClick={handleInput}>2</button>
        <button onClick={handleInput}>3</button>
        <button onClick={handleInput}>4</button>
        <button onClick={handleInput}>5</button>
        <button onClick={handleInput}>6</button>
        <button onClick={handleInput}>7</button>
        <button onClick={handleInput}>8</button>
        <button onClick={handleInput}>9</button>
        <button onClick={handleOperator}>+</button>
        <button onClick={handleOperator}>-</button>
        <button onClick={handleOperator}>*</button>
        <button onClick={handleOperator}>/</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={handleInput}>.</button>
        <button onClick={handleInput}>AC</button>
      </div>
    </section>
  );
};
export default Calculator;
