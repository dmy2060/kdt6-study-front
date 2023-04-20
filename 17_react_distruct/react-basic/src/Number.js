import React, { useState } from "react";

const NumberSet = () => {
  const [number, setNumber] = useState("");
  const Increase = () => {
    setNumber(number + 2);
  };
  const Decrease = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={Increase}>
        증가
      </button>
      <button type="button" onClick={Decrease}>
        감소
      </button>
    </>
  );
};

export default NumberSet;
