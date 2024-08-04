import PropTypes from "prop-types";

const ChildComponent = (props) => {
  const handleChildFunction = (key, value) => {
    props.handleChildFunction("some argument");
    props.updateData(key, value);
  };

  return (
    <>
      <p>{props?.data?.test}</p>
      <p>{props?.data?.a}</p>
      <p>{props?.data?.b ? "I'm true" : "I'm false"}</p>
      <button
        onClick={() => {
          handleChildFunction("test", "AJay");
        }}
      >
        Call Test
      </button>
      <button
        onClick={() => {
          handleChildFunction("a", 100);
        }}
      >
        Call A
      </button>
      <button
        onClick={() => {
          handleChildFunction("b", true);
        }}
      >
        Call B
      </button>
      <button
        onClick={() => {
          handleChildFunction();
        }}
      >
        One Arg
      </button>
    </>
  );
};

ChildComponent.propTypes = {
  data: PropTypes.shape({
    test: PropTypes.string,
    a: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    b: PropTypes.bool,
  }),
  handleChildFunction: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default ChildComponent;
