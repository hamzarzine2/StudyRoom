import Home from "../src/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "./Pages/Room";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
