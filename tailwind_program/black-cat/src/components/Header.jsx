const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}> 🐱 Black cats are not bad luck</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#000000",
    padding: "40px",
    fontFamily: "EF_jejudoldam",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  title: {
    margin: 0,
    fontSize: "30px",
    color: "#ffffff",
  },
};

export default Header;
