import { useState } from "react";
import viteLogo from "/vite.svg";
import Home from "../src/Pages/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch,
} from "react-router-dom";
import Room from "./Pages/Room";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
