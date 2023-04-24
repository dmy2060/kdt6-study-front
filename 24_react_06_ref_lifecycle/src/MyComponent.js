// import { useState, useEffect } from "react";

// const MyComponent = (props) => {
//   const { number } = props;
//   const [text, setText] = useState("");
//   useEffect(() => {
//     // mount 시점에 실행
//     console.log("functional component | mount!");
//     // unmount 시점에 실행
//     return () => {
//       console.log("functional component | unmount!");
//     };
//   }, []);

//   useEffect(() => {
//     // mount & update 시점에 실행
//     console.log("functional component | update!");
//   });
//   useEffect(() => {
//     // text가 바뀔 때만 실행
//     console.log("functional component | text update!");
//   }, [text]);

//   return (
//     <>
//       <p>MyComponent {number}</p>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </>
//   );
// };

// export default MyComponent;

import React from "react";

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Class component | mount!");
  }

  componentDidUpdate() {
    console.log("Class component | update!");
  }

  componentWillUnmount() {
    console.log("Class component | unmount!");
  }

  render() {
    return <h1>MyComponent {this.props.number}</h1>;
  }
}

export default MyComponent;
