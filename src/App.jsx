import { useState } from 'react'
import viteLogo from '/vite.svg'
import Home from '../src/Pages/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch
} from "react-router-dom"

function App() {

  return (
    <>
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </>
  )
}

export default App
