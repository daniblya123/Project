import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
