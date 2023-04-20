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

// 실습 풀이
// import { useState } from 'react';

// const Prob2 = () => {
//   const [visible, setVisible] = useState(true);

//   const toggle = () => {
//     setVisible(!visible);
//     // !true => flase
//     // !fale => true
//   };

//   return (
//     <>
//       <button onClick={toggle}>{visible ? ' 사라져라!' : '보여라!'}</button>
//       <h1>{visible && '안녕하세요'}</h1>
//     </>
//   );
// };

// export default Prob2;
