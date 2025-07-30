const Box = ({ name, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name}
    </div>
  );
};

export default Box;
