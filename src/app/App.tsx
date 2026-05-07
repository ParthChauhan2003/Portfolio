import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Workflow } from './components/Workflow';
import { Pipeline } from './components/Pipeline';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CertsTools } from './components/CertsTools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingSideProjects } from './components/FloatingSideProjects';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode for Google style
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ReactLenis root>
      <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-[#F8F9FA] text-[#202124]'}`}>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-google-blue border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Expertise darkMode={darkMode} />
            <Workflow darkMode={darkMode} />
            <Pipeline darkMode={darkMode} />
            <Services darkMode={darkMode} />
            <CertsTools darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Contact darkMode={darkMode} />
          </main>
          <FloatingSideProjects darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </>
      )}
    </div>
    </ReactLenis>
  );
}
