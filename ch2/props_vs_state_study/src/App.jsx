import CounterProps from "./components/CounterProps";
import CounterState from "./components/CounterState";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <div>
      <CounterProps count={10} />
      <CounterState />
      <WelcomeMessage userName="pikachu" />
    </div>
  );
};

export default App;
