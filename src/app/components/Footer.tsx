import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t relative transition-colors duration-300 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-[14px] tracking-wider">PC</span>
            </div>
            <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>Parth Chauhan</span>
          </div>

          <p className={`text-sm text-center md:text-left ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Parth Chauhan | Available for global freelance and contract opportunities
          </p>

          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full shadow-lg transition-transform hover:-translate-y-1 ${darkMode ? 'bg-slate-800 text-teal-400 hover:bg-slate-700' : 'bg-white text-teal-600 hover:bg-slate-50 border border-slate-200'}`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
