import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, CheckCircle, Bug } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="hero" className={`pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-[#F8F9FA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide ${darkMode ? 'text-google-blue bg-google-blue/10 border border-google-blue/20' : 'text-google-blue bg-google-blue/10 border border-google-blue/20'}`}
              >
                QA Engineer / Software Tester
              </motion.span>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-[#202124]'}`}>
                Breaking Bugs, <br />
                <span className="text-google-blue">Building Quality Software</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-xl font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Hi, I'm Alex. I specialize in manual and automated testing, building robust testing frameworks, and ensuring flawless user experiences across web and mobile platforms.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-google-blue hover:bg-google-blue-dark text-white font-medium transition-all shadow-sm hover:shadow-md gap-2"
              >
                View Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className={`inline-flex justify-center items-center px-6 py-3 rounded-md border font-medium transition-all gap-2 ${darkMode ? 'border-gray-700 text-google-blue hover:bg-gray-800' : 'border-gray-300 text-google-blue hover:bg-gray-100 bg-white'}`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`grid grid-cols-3 gap-6 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
            >
              <div className="space-y-1">
                <h4 className={`text-3xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>5+</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Years Experience</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-3xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>99%</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Bug Free Rate</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-3xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>12+</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Projects Tested</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className={`relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[550px] shadow-hover border ${darkMode ? 'border-gray-800' : 'border-gray-200 bg-white'}`}>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1080"
                alt="Alex - QA Engineer"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Material Design Floating Cards */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className={`absolute top-8 right-[-16px] p-4 rounded-xl shadow-hover flex items-center gap-3 border hidden sm:flex ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
              >
                <div className="bg-google-green/10 text-google-green p-2 rounded-full">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>All Tests Passed</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>CI/CD Pipeline</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className={`absolute bottom-10 left-[-16px] p-4 rounded-xl shadow-hover flex items-center gap-3 border hidden sm:flex ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
              >
                <div className="bg-red-50 text-red-500 p-2 rounded-full">
                  <Bug size={20} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>0 Critical Bugs</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Production environment</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
