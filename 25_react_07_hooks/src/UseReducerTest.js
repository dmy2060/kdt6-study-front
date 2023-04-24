import { useReducer } from "react";

const reducer = (prevNumber, action) => {
  // prevNumber: 현재 state
  // action: dispatch 에서 인자로 받고 있는 현재 액션 값
  // 조건의 4개 이상 넘어가면 보통 switch문을 사용
  // if else의 경우 가독성이 떨어짐
  console.log(prevNumber);
  //   [before]
  //   switch (action) {
  //     case "INCREMENT":
  //       return prevNumber + 1;
  //     case "DECREMENT":
  //       return prevNumber - 1;
  //     case "RESET":
  //       return 7;
  //     default:
  //       return prevNumber;
  //   }

  //   [after]
  switch (action.type) {
    case "INCREMENT":
      return { value: prevNumber.value + 1 };
    case "DECREMENT":
      return { value: prevNumber.value - 1 };
    case "RESET":
      return { value: 7 };
    default:
      return { value: prevNumber.value };
  }
};

const UseReducerTest = () => {
  //   [before]
  //   const [number, dispatch] = useReducer(reducer, 7);

  //   const increment = () => {
  //     dispatch("INCREMENT");
  //   };
  //   const decrement = () => {
  //     dispatch("DECREMENT");
  //   };
  //   const reset = () => {
  //     dispatch("RESET");
  //   };

  //   [after]
  const [number, dispatch] = useReducer(reducer, { value: 7 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <h1>useReducer hook</h1>
      <h2>{number.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducerTest;
