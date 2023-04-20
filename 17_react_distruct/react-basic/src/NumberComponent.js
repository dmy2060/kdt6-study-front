import React, { Component } from "react";

class NumberComponent extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          type="button"
          onClick={() => this.setState({ number: number + 2 })}
        >
          증가
        </button>
        <button
          type="button"
          onClick={() => this.setState({ number: number - 1 })}
        >
          감소
        </button>
      </div>
    );
  }
}

export default NumberComponent;
