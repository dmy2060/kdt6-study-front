import React, { useState } from "react";

const ChangeText = () => {
  const [change, setChange] = useState(true);
  const textChange = () => {
    setChange(!change);
  };
  return (
    <>
      {change ? (
        <>
          <button type="button" onClick={textChange}>
            사라져라
          </button>
          <h1>안녕하세요</h1>
        </>
      ) : (
        <>
          <button type="button" onClick={textChange}>
            보여라
          </button>
        </>
      )}
    </>
  );
};

export default ChangeText;
