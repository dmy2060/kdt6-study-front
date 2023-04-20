// 첫번째 방법
// import React from "react";
// class ClassComponent extends React.Component {}

// 두번째 방법
import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  // 클래스형 컴포넌트 render() 함수 필수
  render() {
    // console.log(this.props);
    // 구조분해할당
    // this.props = {
    //   name: "",
    //   age: "",
    // };
    const { name, age } = this.props;
    // const name = "성춘향";
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>
          {name}, {age}
        </h5>
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  name: "뮤",
  age: "11",
};
// propTypes에서는 소문자로 시작해야함
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
