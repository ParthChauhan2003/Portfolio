import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Search, Layers, Code, Flag, Bug } from 'lucide-react';

interface WorkflowProps {
  darkMode: boolean;
}

const processSteps = [
  { 
    title: "Requirement Analysis", 
    desc: "Understand business goals and system behavior", 
    icon: <Lightbulb className="text-amber-500" />,
    glow: "rgba(245, 158, 11, 0.2)"
  },
  { 
    title: "Test Planning", 
    desc: "Design a comprehensive and scalable testing strategy", 
    icon: <Layers className="text-blue-500" />,
    glow: "rgba(59, 130, 246, 0.2)"
  },
  { 
    title: "Exploratory Testing", 
    desc: "Identify real-world issues and usability gaps", 
    icon: <Search className="text-emerald-500" />,
    glow: "rgba(16, 185, 129, 0.2)"
  },
  { 
    title: "Automation Development", 
    desc: "Build efficient regression suites using Playwright", 
    icon: <Code className="text-indigo-500" />,
    glow: "rgba(99, 102, 241, 0.2)"
  },
  { 
    title: "Defect Reporting", 
    desc: "Clear, actionable bug tracking for faster resolution", 
    icon: <Bug className="text-rose-500" />,
    glow: "rgba(244, 63, 94, 0.2)"
  },
  { 
    title: "Release Validation", 
    desc: "Ensure stability before production deployment", 
    icon: <Flag className="text-teal-500" />,
    glow: "rgba(20, 184, 166, 0.2)"
  }
];


export const Workflow: React.FC<WorkflowProps> = ({ darkMode }) => {
  return (
    <div className={`py-24 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      
      {/* 1. Testing Process / Workflow Steps Section */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`}>
            My Workflow
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Testing Process & Strategy
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A structured, engineering-first approach to quality that ensures consistency and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1] // cubic-bezier easing
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className={`group p-8 rounded-3xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-900 border-gray-800 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]' 
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100'
              }`}
            >
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110`}
                style={{ 
                  backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.8)',
                  boxShadow: `0 0 0px 0px transparent`,
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" style={{ backgroundColor: step.glow }}></div>
                  <div className="relative z-10 transition-transform duration-500 group-hover:rotate-12">
                    {step.icon}
                  </div>
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
