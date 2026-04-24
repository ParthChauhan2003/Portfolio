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
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide ${darkMode ? 'text-blue-400 bg-blue-900/20 border border-blue-500/20' : 'text-blue-600 bg-blue-50 border border-blue-200'}`}
              >
                Enterprise-Ready Software Quality
              </motion.span>
              <p className={`text-sm md:text-base font-medium tracking-wide uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                QA Engineering · Test Automation · Intelligent Testing Strategy
              </p>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-[#202124]'}`}>
                Deliver Software <br />
                <span className="text-blue-600">with Complete Confidence</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-xl font-light leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I partner with fast-scaling startups and enterprise teams to uncover critical issues early, reduce regression effort, and ensure seamless, high-quality digital experiences at every release.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 gap-2"
              >
                Book a QA Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className={`inline-flex justify-center items-center px-8 py-3 rounded-full border font-medium transition-all hover:-translate-y-0.5 active:scale-95 gap-2 ${darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}
              >
                Explore My Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
            >
              {/* <div className="space-y-1">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Zero</h4>
                <p className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Critical Defects</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Reaching production</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>65-75%</h4>
                <p className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Faster</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Regression cycles</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>100%</h4>
                <p className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Coverage</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Of core user journeys</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>4+</h4>
                <p className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Years</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>QA Engineering</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>20+</h4>
                <p className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>SaaS Products</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Tested & improved</p>
              </div>
              <div className="space-y-1">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Python</h4>
                <p className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>& Playwright</p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Automation Specialist</p>
              </div> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative px-4 lg:px-8"
          >
            <div className="relative group">
              {/* Image Container with overflow hidden */}
              <div className={`relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[550px] shadow-2xl border transition-transform duration-500 group-hover:scale-[1.01] ${darkMode ? 'border-gray-800 bg-[#080B12]' : 'border-gray-200 bg-white'}`}>
                <img
                  src="images/QA_Hero.png"
                  alt="QA Engineering Illustration"
                  className="w-full h-full object-cover object-center"
                />
                <div className={`absolute inset-0 pointer-events-none ${darkMode ? 'bg-gradient-to-t from-gray-900/40 via-transparent to-transparent' : 'bg-gradient-to-t from-white/20 via-transparent to-transparent'}`} />
              </div>

              {/* Material Design Floating Cards - Outside overflow-hidden */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, -12, 0]
                }}
                transition={{
                  x: { delay: 0.8, duration: 0.5 },
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                className={`absolute top-12 -right-6 md:-right-10 p-4 rounded-xl shadow-2xl flex items-center gap-4 border z-10 ${darkMode ? 'bg-gray-800/90 border-gray-700 backdrop-blur-md' : 'bg-white/90 border-gray-100 backdrop-blur-md'}`}
              >
                <div className="bg-green-500/10 text-green-500 p-2.5 rounded-full shadow-inner">
                  <CheckCircle size={22} className="drop-shadow-sm" />
                </div>
                <div>
                  <p className={`text-sm font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>All Tests Passed</p>
                  <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>CI/CD Pipeline Active</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, 12, 0]
                }}
                transition={{
                  x: { delay: 1, duration: 0.5 },
                  opacity: { delay: 1, duration: 0.5 },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
                }}
                className={`absolute bottom-16 -left-6 md:-left-10 p-4 rounded-xl shadow-2xl flex items-center gap-4 border z-10 ${darkMode ? 'bg-gray-800/90 border-gray-700 backdrop-blur-md' : 'bg-white/90 border-gray-100 backdrop-blur-md'}`}
              >
                <div className="bg-red-500/10 text-red-500 p-2.5 rounded-full shadow-inner">
                  <Bug size={22} className="drop-shadow-sm" />
                </div>
                <div>
                  <p className={`text-sm font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>0 Critical Bugs</p>
                  <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Verified in Production</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
