// import ClassComponent from "./ClassComponent";
// import FunctionComponent from "./FunctionComponent";
// import Food from "./Food";
// import "./App.css";
// import Bestseller from "./Bestseller";
// import PropsComponent from "./PropsComponent";

import HiComponent from "./Hicomponent";

function App() {
  // const name = "통키";
  // const animal = "고양이";
  // const a = 10;
  // const b = 4;
  // const title = "Hello World";

  return (
    <>
      {/* <ClassComponent name="홍길동" age="13" />
    <ClassComponent name="성춘향" age="12" />
    <ClassComponent />
    <FunctionComponent name="통키" age="4" />
    <FunctionComponent name="율무" age="3" />
    <FunctionComponent /> */}
      {/* <div>
        이것은 div입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>
      <h2>
        제 반려동물의 이름은 {name}입니다.
        {name}는 {animal}입니다.
      </h2>
      {3 + 5 === 8 ? console.log("정답입니다!") : console.log("오답입니다!")}
      {a > b && console.log("a가 b보다 큽니다")}

      <div className="test">
        <h1>{title}</h1>
        <form>
          <div>
            <span>아이디 : </span>
            <input type="text" name="id" id="id" className="input" />
          </div>
          <div>
            <span>비밀번호 : </span>
            <input type="password" name="pw" id="pw" className="input" />
          </div>
        </form>
      </div>

      <div className="color-bar">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
      <Food food="떡볶이" />
      <Bestseller
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
      <PropsComponent
        text="App 컴포넌트에서 넘겨준 text props"
        valid="콘솔 띄우기 성공"
      /> */}
      {/* useState 이용 컴포넌트 */}
      <HiComponent />
    </>
  );
}

export default App;
