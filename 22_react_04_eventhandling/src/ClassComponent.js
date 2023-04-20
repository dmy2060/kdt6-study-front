import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Codingon",
    };
    // this 현재 클래스가 뭔지 표시됨
    // console.log(this);

    // this 사용시
    // this.printConsole = this.printConsole.bind(this);
  }

  // this 사용시
  //   printConsole() {
  //     console.log("버튼 클릭! >>", this.state);
  //   }

  // 화살표 함수 사용시
  printConsole = () => {
    console.log("버튼 클릭! >>", this.state);
  };

  printConsole2 = (msg) => {
    console.log(msg);
  };
  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        {/* 클래스형 컴포넌트에서는 constructor에서 this를 바인드해야 함수를 찾아갈 수 있음 */}
        {/* 단, 화살표함수로 만들면 바인드 안해도 사용가능 */}
        <button onClick={this.printConsole}>print console</button>
        <button onClick={() => this.printConsole2("hihi")}>
          print console
        </button>
      </div>
    );
  }
}

export default ClassComponent;
