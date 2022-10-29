import "./App.css";
import DataStructures from "./Pages/Data-Structures";
import Home from "./Pages/Home";
import Pathfinding from "./Pages/Pathfinding";
import Sorting from "./Pages/Sorting";
import { Route, Router, Routes } from "react-router-dom";

import Navbar from "./Navbar/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DataStructures" element={<DataStructures />} />
          <Route path="/Pathfinding" element={<Pathfinding />} />
          <Route path="/Sorting" element={<Sorting />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
