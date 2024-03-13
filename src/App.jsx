import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Apex from "./Components/Apex";
import Line from "./Components/Line";
import Graph from "./Components/Graph";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/apex" element={<Apex />}></Route>
        <Route path="/line" element={<Line />}></Route>
        <Route path="/graph" element={<Graph />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
