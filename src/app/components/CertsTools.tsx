import React from 'react';
import { motion } from 'motion/react';
import { Award, Code2, Database, TerminalSquare, GitBranch, Layers, ShieldCheck, Zap, Search } from 'lucide-react';

interface CertsToolsProps {
  darkMode: boolean;
}

const toolCategories = [
  {
    title: "Automation",
    icon: <Code2 className="text-blue-500" />,
    items: ["Playwright (Python)", "Pytest", "CI/CD Pipelines"]
  },
  {
    title: "Manual Testing",
    icon: <Search className="text-green-500" />,
    items: ["Exploratory Testing", "Cross-browser validation", "UAT support"]
  },
  {
    title: "API Testing",
    icon: <Database className="text-purple-500" />,
    items: ["Postman", "REST API validation", "Data integrity checks"]  
  },
  {
    title: "Workflow",
    icon: <Layers className="text-orange-500" />,
    items: ["Jira", "Notion", "Trello", "Git"]
  }
];

export const CertsTools: React.FC<CertsToolsProps> = ({ darkMode }) => {
  return (
    <section id="tools" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`}>
            Tools & Technologies
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My QA Toolkit
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              transition={{ 
                layout: { duration: 0.3 },
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: { duration: 0.5, delay: index * 0.1 }
              }}
              className={`p-8 rounded-2xl border transition-all duration-300 group cursor-default relative overflow-hidden ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                  : 'bg-gray-50 border-gray-100 hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]'
              }`}
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-600/10 via-transparent to-transparent' 
                  : 'bg-gradient-to-br from-blue-500/5 via-transparent to-transparent'
              }`} />

              {/* Shine sweep effect */}
              <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20" />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg] relative z-10 ${
                darkMode ? 'bg-gray-900 shadow-inner' : 'bg-white shadow-sm'
              }`}>
                {category.icon}
              </div>
              <h3 className={`text-xl font-bold mb-6 relative z-10 transition-colors duration-300 ${
                darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
              }`}>
                {category.title}
              </h3>
              <ul className="space-y-4 relative z-10">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-150"></div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      darkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
