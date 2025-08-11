import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      <UncontrolledForm />
      <ControlledForm />
    </div>
  );
};

export default App;
