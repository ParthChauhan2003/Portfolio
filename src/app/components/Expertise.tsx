import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Code, TestTube, CheckCircle, Rocket, Search, Settings, ShieldCheck, BarChart, Flag, Layers } from 'lucide-react';

interface ExpertiseProps {
  darkMode: boolean;
}

// Simple Bug icon since it's used in the process array
const Bug = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m8 2 1.88 1.88"/>
    <path d="M14.12 3.88 16 2"/>
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/>
    <path d="M12 20v-9"/>
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5"/>
    <path d="M17.47 9c1.93-.2 3.53-1.9 3.53-4"/>
    <path d="M8 12H2"/>
    <path d="M22 12h-6"/>
    <path d="M8 17H2"/>
    <path d="M22 17h-6"/>
  </svg>
);

export const Expertise: React.FC<ExpertiseProps> = ({ darkMode }) => {
  const coreExpertise = [
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: "Manual Testing",
      description: "Deep exploratory and usability validation."
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      title: "Automation Engineering",
      description: "Scalable frameworks using Python."
    },
    {
      icon: <TestTube className="w-6 h-6 text-violet-500" />,
      title: "Playwright Testing",
      description: "Reliable end-to-end coverage."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-teal-500" />,
      title: "Agile QA Practices",
      description: "Sprint-aligned testing strategies."
    }
  ];

  return (
    <section id="expertise" className={`py-24 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Expertise Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-indigo-400 bg-indigo-900/20' : 'text-indigo-600 bg-indigo-50'}`}>
              Core Expertise
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Advanced Technical Competencies
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Specialized in engineering robust quality systems for complex SaaS and enterprise applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreExpertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-8 rounded-3xl border transition-all hover:-translate-y-2 ${darkMode ? 'bg-gray-900 border-gray-800 hover:border-indigo-500/30' : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform hover:scale-110 ${darkMode ? 'bg-gray-800' : 'bg-indigo-50'}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

