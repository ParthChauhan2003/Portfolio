import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

interface WhatsAppWidgetProps {
  darkMode: boolean;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // We keep this empty or remove the timers since text should always be visible
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const waLink = "https://wa.me/919664639533?text=Hello+Parth,+I+visited+your+QA+Portfolio+and+would+like+to+discuss+a+project.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ willChange: 'transform' }}
            className={`mb-4 w-[320px] sm:w-[360px] rounded-2xl shadow-2xl overflow-hidden border origin-bottom-right ${
              darkMode ? 'bg-gray-900 border-gray-800 shadow-black/50' : 'bg-white border-gray-100 shadow-gray-200/50'
            }`}
          >
            {/* Header */}
            <div className="bg-[#2db742] p-5 text-white relative">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
              <h3 className="font-bold text-lg mb-1.5 pr-8">Start a Conversation</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Hi! I'm Parth Chauhan. Click below to discuss QA Testing, Test Automation, AI Testing Strategy.
              </p>
            </div>

            {/* Body */}
            <div className={`p-5 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner ${darkMode ? 'bg-gradient-to-br from-blue-600 to-indigo-800' : 'bg-gradient-to-br from-blue-500 to-indigo-600'}`}>
                    PC
                  </div>
                  {/* Online Status */}
                  <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 rounded-full ${darkMode ? 'border-gray-900' : 'border-white'}`}></div>
                </div>
                <div>
                  <h4 className={`font-semibold text-[15px] ${darkMode ? 'text-white' : 'text-gray-900'}`}>Parth Chauhan</h4>
                  <p className={`text-[13px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>QA Engineer | Test Automation</p>
                  <p className={`text-[11px] mt-1 flex items-center gap-1.5 font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span>
                    Typically replies within a few minutes
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#2db742] hover:bg-[#28a33b] text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-[#2db742] focus:ring-offset-2"
              >
                <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`hidden sm:flex px-4 py-2.5 rounded-full shadow-lg text-sm whitespace-nowrap cursor-pointer pointer-events-auto backdrop-blur-md items-center transition-transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800/95 text-gray-300 border border-gray-700/50 shadow-black/30' 
                  : 'bg-white/95 text-gray-600 border border-gray-100 shadow-gray-200/50'
              }`}
              onClick={handleOpen}
            >
              Need Help?&nbsp;<span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Chat with me</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={isOpen ? handleClose : handleOpen}
          style={{ willChange: 'transform' }}
          className={`relative flex items-center justify-center w-[60px] h-[60px] text-white rounded-full transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-[#2db742] hover:bg-[#28a33b] hover:scale-105 shadow-xl focus:ring-[#2db742]/50 ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}`}
          aria-label={isOpen ? 'Close Chat' : 'Open WhatsApp Chat'}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              {isOpen ? <X size={28} /> : <WhatsAppIcon size={32} className="text-white" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};
