import { useState } from "react";

function HiComponent() {
  const [massage, setMessage] = useState("");
  const Enter = () => {
    setMessage("입장하였습니다.");
  };
  const Out = () => {
    setMessage("퇴장하였습니다.");
  };
  return (
    <>
      <h1>{massage}</h1>
      <button type="button" onClick={Enter}>
        입장
      </button>
      <button type="button" onClick={Out}>
        퇴장
      </button>
    </>
  );
}

export default HiComponent;
