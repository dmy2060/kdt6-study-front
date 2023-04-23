const LifeCycleFuncChild = (props) => {
  console.log("props >>>>", props);
  const { number } = props;
  return (
    <>
      <p>LifeCycleFuncChild {number}</p>
      <input type="text" />
    </>
  );
};

export default LifeCycleFuncChild;
