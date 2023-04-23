// [1] index 값으로 key 값 잡는
// import { useState } from "react";
// const Alphabet = () => {
//   const [alphabet, setAlphabet] = useState(["a", "p", "p", "l", "e"]);
//   console.log(alphabet); // ['a', 'p', 'p', 'l', 'e']
//   return (
//     <>
//       <ol>
//         {alphabet.map((value, idx) => (
//           <li key={idx}>{value}</li>
//         ))}
//       </ol>
//     </>
//   );
// };

// export default Alphabet;

// [2]
import { useState } from "react";
// alphabet state: 리스트에 대한 상태
const Alphabet = () => {
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "f" },
  ]);
  //   console.log(alphabet);

  // inputAlpha state: input에 넣은 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");
  const addAlpha = () => {
    // if (inputAlpha.trim().length > 0) {
    //   // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    //   const newAlphabet = alphabet.concat({
    //     id: alphabet.length + 1,
    //     alpha: inputAlpha,
    //   });
    //   setAlphabet(newAlphabet); // 리스트 상태 업데이트
    //   //   console.log(newAlphabet);
    //   setInputAlpha(""); // input 초기화
    // }

    if (inputAlpha.trim().length === 0) return;

    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlphabet); // 리스트 상태 업데이트
    //   console.log(newAlphabet);
    setInputAlpha(""); // input 초기화
  };

  const deleteAlpha = (id) => {
    // filter()
    // 콜백함수의 테스트를 통과하는 모든 요소를 모아서 "새로운 배열" 반환
    // true 요소 유지, false 요소 버림
    // => alphabet state 에서 매개변수로 받아오는 id와
    //    배열 각 원소의 id 값이 같은 경우 빼고 나머지를 모두 새로운 배열에 저장
    const newAlpha = alphabet.filter((obj) => obj.id !== id);
    setAlphabet(newAlpha);
  };

  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") addAlpha();
  };
  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addAlpha}>추가</button>
      {/* 리액트는 상태가 변화하면 다시 그림 */}
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Alphabet;
