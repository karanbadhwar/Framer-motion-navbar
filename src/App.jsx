import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TransitionedHome from "./Components/Home";
import TransitionedAbout from "./Components/About";
import TransitionedContact from "./Components/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<TransitionedHome />} />
          <Route path="/about" element={<TransitionedAbout />} />
          <Route path="/contact" element={<TransitionedContact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
