import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LogoIntro from "./components/LogoIntro";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {showIntro && (
          <LogoIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;