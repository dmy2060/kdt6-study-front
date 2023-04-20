import { Component } from "react";
import PropTypes from "prop-types";

class PropsComponent extends Component {
  render() {
    const { text, valid } = this.props;
    function validText() {
      console.log({ valid });
    }
    return (
      <>
        <h1>{text}</h1>
        <button type="button" onClick={validText}>
          콘솔 메세지
        </button>
      </>
    );
  }
}

PropsComponent.defaultProps = {
  text: "이건 기본 text props입니다.",
};

PropsComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
export default PropsComponent;
