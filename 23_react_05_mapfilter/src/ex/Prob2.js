import { useState } from "react";

const Prob2 = () => {
  const [inputWriter, setInputWriter] = useState(""); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(""); // 제목 input state
  const [comment, setComment] = useState([
    {
      writer: "민수",
      title: "안뇽",
    },
    {
      writer: "지민",
      title: "하이하이",
    },
    {
      writer: "희수",
      title: "멋쟁이",
    },
  ]);

  const addComment = () => {
    if (inputWriter.trim().length === 0 || inputTitle.trim().length === 0)
      return;
    const newComment = comment.concat({
      writer: inputWriter,
      title: inputTitle,
    });
    setComment(newComment);
    setInputWriter("");
    setInputTitle("");
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((obj, i) => {
            return (
              <tr>
                <th key={i}>{i + 1}</th>
                <th>{obj.writer}</th>
                <th>{obj.title}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Prob2;
