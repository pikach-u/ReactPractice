const Box = ({ name, backgroundColor, isRounded }) => {
  return (
    <div
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: isRounded ? "9999px" : "",
      }}
    >
      {name}
    </div>
  );
};

export default Box;
