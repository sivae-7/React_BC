import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
