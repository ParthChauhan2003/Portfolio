import React from 'react';
import { motion } from 'motion/react';
import { Target, Search, Settings, ShieldCheck } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: "Strategic Automation",
      description: "Up to 70% faster execution cycles through scalable automation systems."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Zero Defect Leakage",
      description: "Near-zero defect leakage into production environments."
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      title: "Business Alignment",
      description: "Aligning technical validation with real user expectations."
    },
    {
      icon: <Search className="w-6 h-6 text-purple-500" />,
      title: "Proactive Growth",
      description: "Shifting testing from a reactive task to a proactive growth driver."
    }
  ];

  return (
    <section id="about" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`}>
            Quality Mindset
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Testing That Drives Business Success
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg md:text-xl font-medium mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Turning QA into a Competitive Advantage
          </p>
          <p className={`text-lg leading-relaxed font-light space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="block mb-4">With over 4 years of experience in quality engineering, I help organizations shift testing from a reactive task to a proactive growth driver.</span>
            <span className="block">I focus on aligning technical validation with real user expectations — designing scalable automation systems and efficient testing strategies that allow teams to release faster, safer, and smarter.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'bg-white border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100'}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
