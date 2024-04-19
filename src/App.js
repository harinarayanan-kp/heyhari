import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CanvasWin from "./components/ThreeD/Canvas";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/canvas' element={<CanvasWin />} />
      
    </Routes>
  );
}

export default App;
