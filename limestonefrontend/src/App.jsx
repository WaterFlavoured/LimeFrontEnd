import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home'
import About from './pages/About'
import Pages from './pages/Pages';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/*" element={<Pages />} />
      </Routes>
    </>
  )
}

export default App
