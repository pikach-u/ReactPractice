import Box from "./components/Box";

const boxList = [
  { id: 1, name: "1번 박스", backgroundColor: "#FFBFDD", isRounded: false },
  { id: 2, name: "2번 박스", backgroundColor: "#E0C2FF", isRounded: true },
  { id: 3, name: "3번 박스", backgroundColor: "#ABD1FF", isRounded: true },
];

const App = () => {
  return (
    <div
      style={{
        background: "pink",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* <Box /> */}
      {boxList.map((box) => (
        <Box
          key={box.id}
          name={box.name}
          backgroundColor={box.backgroundColor}
          isRounded={box.isRounded}
        />
      ))}
    </div>
  );
};

export default App;
