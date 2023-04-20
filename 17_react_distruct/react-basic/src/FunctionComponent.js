import PropTypes from "prop-types";

function FunctionComponent({ name, age }) {
  //   console.log(props);
  //   props = { name:'통키', age:'4' };
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>
        {name}, {age}
      </h5>
    </div>
  );
}

// 아무것도 입력하지 않았을 경우 default값 설정
FunctionComponent.defaultProps = {
  name: "뮤",
  age: "11",
};

// 단점 : 오류는 발생시키나 실행이 안되진 않음
FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

// [화살표 함수]
// const FunctionComponent = () => {

// }

export default FunctionComponent;
