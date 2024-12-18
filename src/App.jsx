import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import './index.css'
import Home from "./pages/home";
import Receptionist from "./pages/Receptionist";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receptionist" element={<Receptionist />} />
      </Routes>
    </Router>
  );
}

export default App;
