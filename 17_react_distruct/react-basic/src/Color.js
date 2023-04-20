import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정");
  const redColor = () => {
    setColor("red");
    setText("빨간");
  };
  const blueColor = () => {
    setColor("blue");
    setText("파란");
  };
  return (
    <>
      <h1 style={{ color: color }}>{text}색 글씨</h1>
      <button type="button" onClick={redColor}>
        빨간색
      </button>
      <button type="button" onClick={blueColor}>
        파란색
      </button>
    </>
  );
};

export default Color;
