function Food(props) {
  return (
    <>
      <p>
        <span style={{ color: "red" }}>{props.food}</span> 맵고달고
      </p>
    </>
  );
}

Food.defaultProps = {
  food: "라뗴",
};

export default Food;
