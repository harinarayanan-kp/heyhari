import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CanvasWin from "./components/ThreeD/Canvas";
import HomeNew from "./components/HomeNew";
import Music from "./components/Music";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/music' element={<Music/>} />
      <Route path='/canvas' element={<CanvasWin />} />
    </Routes>
  );
}

export default App;
