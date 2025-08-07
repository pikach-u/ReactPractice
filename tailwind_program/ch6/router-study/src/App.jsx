import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/Header";
import User from "./pages/user";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
