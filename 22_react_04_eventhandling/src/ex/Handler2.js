import { useState } from "react";

const Handler2 = () => {
  const [text, setText] = useState(true);
  function textChange() {
    setText(!text);
  }
  return (
    <>
      <h1>{text ? "Hello World" : "Goodbye World!"}</h1>
      <button onClick={textChange}>문구 변경</button>
    </>
  );
};

export default Handler2;
