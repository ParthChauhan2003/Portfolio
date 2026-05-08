import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      sections.unshift('hero'); // Add hero to sections

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4 transition-all duration-500">
      <nav
        className={`rounded-full border backdrop-blur-xl transition-all duration-300 px-4 py-2.5 ${scrolled
          ? (darkMode ? 'bg-slate-900/80 border-slate-700/50 shadow-[0_8px_30px_rgba(0,0,0,0.3)] shadow-blue-500/10' : 'bg-white/80 border-gray-200/50 shadow-xl shadow-gray-200/50')
          : (darkMode ? 'bg-slate-900/40 border-slate-800/30 shadow-lg' : 'bg-white/40 border-white/50 shadow-sm')
          }`}
      >
        <div className="flex items-center h-12">
          {/* Left: Logo & Name */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
              <span className="text-white  font-bold text-sm tracking-wide">PC</span>
            </div>
            <span className={`font-bold text-lg tracking-tight hidden sm:block transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Parth Chauhan
            </span>
          </a>

          {/* Right-aligned content: Links and Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 ml-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive
                    ? (darkMode ? 'text-white bg-slate-800/80 shadow-inner' : 'text-blue-700 bg-blue-50/80 shadow-sm')
                    : (darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100/50')
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3 ml-4">
            <div className={`w-px h-5 mr-1 ${darkMode ? 'bg-slate-600' : 'bg-gray-400'}`}></div>
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/80' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100/80'
                }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Actions - always push to right */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'text-slate-300 hover:bg-slate-800/80' : 'text-gray-600 hover:bg-gray-100/80'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'text-slate-300 hover:bg-slate-800/80' : 'text-gray-600 hover:bg-gray-100/80'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Collapsible */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`absolute top-20 left-4 right-4 rounded-3xl overflow-hidden backdrop-blur-xl border shadow-2xl md:hidden ${darkMode ? 'bg-slate-900/95 border-slate-700/50' : 'bg-white/95 border-gray-200/50'
              }`}
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${isActive
                      ? (darkMode ? 'text-white bg-slate-800/80' : 'text-blue-700 bg-blue-50')
                      : (darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50')
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-gray-200/50 dark:border-slate-800/50">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full text-center px-4 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/30 active:scale-95"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
