import React from 'react';
import { motion } from 'motion/react';
import { FileText, DownloadCloud, FileCode2, BugPlay } from 'lucide-react';

interface ArtifactsProps {
  darkMode: boolean;
}

const artifacts = [
  {
    title: "Sample Test Plan",
    type: "PDF Document",
    icon: <FileText className="w-8 h-8 text-google-blue" />,
    description: "Comprehensive test strategy, scope, and objectives for a fictional e-commerce platform.",
    size: "1.2 MB"
  },
  {
    title: "Bug Report Template",
    type: "Excel / Sheets",
    icon: <BugPlay className="w-8 h-8 text-red-500" />,
    description: "Standardized bug reporting format including steps to reproduce, environment details, and logs.",
    size: "45 KB"
  },
  {
    title: "Automation Scripts",
    type: "Code Snippet",
    icon: <FileCode2 className="w-8 h-8 text-google-green" />,
    description: "Cypress automated test suite examples covering login, checkout, and API mocking.",
    size: "View on GitHub"
  }
];

export const Artifacts: React.FC<ArtifactsProps> = ({ darkMode }) => {
  return (
    <section id="artifacts" className={`py-24 ${darkMode ? 'bg-[#202124]' : 'bg-[#F8F9FA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`text-3xl font-medium tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Test Artifacts</h2>
          <div className="w-16 h-1 bg-google-blue mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore sample documentation and code snippets demonstrating my methodology and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all shadow-soft hover:shadow-hover hover:-translate-y-1 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
            >
              <div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  {artifact.icon}
                </div>
                <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{artifact.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-4 inline-block ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {artifact.type}
                </span>
                <p className={`mb-6 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {artifact.description}
                </p>
              </div>

              <button className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${darkMode ? 'bg-google-blue/10 text-google-blue hover:bg-google-blue hover:text-white' : 'bg-google-blue/10 text-google-blue hover:bg-google-blue hover:text-white'}`}>
                <DownloadCloud size={18} />
                Download ({artifact.size})
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
