import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import PageWrapper from "./components/PageWrapper.jsx";

import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Preloader from "./components/Preloader.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import BottomNav from "./components/BottomNav.jsx";
import AvatarBackground from "./components/AvatarBackground.jsx";
import ResumeModal from "./components/ResumeModal.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import { AnimatePresence, motion } from "framer-motion";


function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <CustomCursor />
      <BottomNav />
      {/* Global magical background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <AvatarBackground />

        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} key="preloader" />
        )}
      </AnimatePresence>

      <div
        className={`min-h-screen flex flex-col text-text font-sans relative z-0 ${
          isLoading ? "overflow-hidden h-screen" : ""
        }`}
      >
        <Navbar onResumeClick={() => setIsResumeOpen(true)} />
        
        {/* Routes with animated page transitions */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper direction={location.state?.direction ?? 0}>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper direction={location.state?.direction ?? 0}>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/skills"
                element={
                  <PageWrapper direction={location.state?.direction ?? 0}>
                    <Skills />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageWrapper direction={location.state?.direction ?? 0}>
                    <Projects />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper direction={location.state?.direction ?? 0}>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        <MusicPlayer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
