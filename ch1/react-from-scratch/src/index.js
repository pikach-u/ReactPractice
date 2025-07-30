const React = require("react");
const ReactDOM = require("react-dom/client");

const h = React.createElement;

const App = () =>
  h(
    "div",
    null,
    h("h1", null, "Hello, React!"),
    h("p", null, "This is React project from scratch.")
  );

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(h(App));
