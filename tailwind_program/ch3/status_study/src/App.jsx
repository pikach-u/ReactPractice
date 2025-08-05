import Button from "./components/Button";
import ColorButton from "./components/ColorButton";
import FocusInput from "./components/FocusInput";
import FullStateButton from "./components/FullStateButton";
import GroupHoverCard from "./components/GroupHoverCard";
import HoverButton from "./components/HoverButton";
import PressEffectButton from "./components/PressEffectButton";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <Button variant="outline" colorScheme="red" size="sm" isDisabled={true}>
        버튼 A
      </Button>
      <Button variant="ghost" colorScheme="gray" size="lg">
        버튼 B
      </Button>
      <Button isDisabled={true}>버튼 C</Button>
      <Button variant="solid" colorScheme="blue" size="lg">
        Button D
      </Button>
    </div>
  );
};

export default App;
