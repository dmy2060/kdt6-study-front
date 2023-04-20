function Clock() {
  return (
    <div className="clock-container">
      <h1>현재시간은 : {new Date().toLocaleTimeString()}</h1>;
    </div>
  );
}

// 한개 이상 내보내고 싶을 경우 아래와 같이 작성
// 컴포넌트에서는 거의 없음
// export function Clock2() {

// }

export default Clock;
//  export 는 한번만 가능!
