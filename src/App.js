import "./App.css";
import DataStructures from "./Navbar/Pages/Data-Structures/Data-Structures";
import Home from "./Navbar/Pages/Home";
import Pathfinding from "./Navbar/Pages/Pathfinding/Pathfinding";
import Sorting from "./Navbar/Pages/Sorting/Sorting";
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
