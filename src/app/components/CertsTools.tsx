import React from 'react';
import { motion } from 'motion/react';
import { Award, Code2, Database, TerminalSquare, GitBranch, Layers, ShieldCheck, Zap } from 'lucide-react';

interface CertsToolsProps {
  darkMode: boolean;
}

const certifications = [
  { title: "ISTQB Certified Tester Foundation Level (CTFL)", date: "2019" },
  { title: "Certified Agile Tester (CAT)", date: "2021" },
  { title: "AWS Certified Cloud Practitioner", date: "2023" }
];

const tools = [
  { name: "Selenium", icon: <Code2 size={24} />, color: "text-green-500" },
  { name: "Cypress", icon: <TerminalSquare size={24} />, color: "text-teal-400" },
  { name: "Postman", icon: <Zap size={24} />, color: "text-orange-500" },
  { name: "JIRA", icon: <Layers size={24} />, color: "text-blue-500" },
  { name: "SQL", icon: <Database size={24} />, color: "text-indigo-400" },
  { name: "Git", icon: <GitBranch size={24} />, color: "text-red-500" },
  { name: "Security", icon: <ShieldCheck size={24} />, color: "text-purple-500" },
  { name: "JMeter", icon: <Zap size={24} />, color: "text-red-600" },
];

export const CertsTools: React.FC<CertsToolsProps> = ({ darkMode }) => {
  return (
    <section id="certifications" className={`py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Certifications */}
          <div>
            <div className="mb-10">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Certifications</h2>
              <div className="w-16 h-1 bg-teal-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`p-5 rounded-xl border flex items-center justify-between transition-all hover:scale-[1.02] ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500">
                      <Award size={20} />
                    </div>
                    <h4 className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{cert.title}</h4>
                  </div>
                  <span className={`text-sm font-bold ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="mb-10">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Tools & Tech Stack</h2>
              <div className="w-16 h-1 bg-teal-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-all hover:-translate-y-1 ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-teal-500/30' : 'bg-white border-slate-200 hover:border-teal-500/30'}`}
                >
                  <div className={`mb-3 ${tool.color}`}>{tool.icon}</div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
