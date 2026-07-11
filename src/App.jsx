import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ijazat from "./pages/Ijazat";
import TechNXT from "./pages/TechNXT";
import Mindset from "./pages/Mindset";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ijazat" element={<Ijazat />} />
      <Route path="/technxt" element={<TechNXT />} />
      <Route path="/mindset" element={<Mindset />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}