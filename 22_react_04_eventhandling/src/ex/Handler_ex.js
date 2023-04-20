import React from "react";

class Handler_ex extends React.Component {
  state = {
    title: "Hello World!",
  };
  render() {
    const { title } = this.state;

    return (
      <>
        <h1>{title}</h1>
        <button onClick={() => this.setState({ title: "Goodbye World!" })}>
          문구 변경
        </button>
      </>
    );
  }
}

export default Handler_ex;
