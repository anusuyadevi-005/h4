import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Machinery from "./pages/Machinery";
import Contact from "./pages/Contact";
import MembershipPage from "./pages/MembershipPage";
import TrainersPage from "./pages/TrainersPage";
import BranchesPage from "./pages/BranchesPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;