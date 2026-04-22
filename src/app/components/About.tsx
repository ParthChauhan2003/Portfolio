import React from 'react';
import { motion } from 'motion/react';
import { Target, Search, Settings, ShieldCheck } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Search className="w-6 h-6 text-google-blue" />,
      title: "Detail-Oriented",
      description: "Meticulous approach to identifying edge cases and complex scenarios."
    },
    {
      icon: <Settings className="w-6 h-6 text-google-green" />,
      title: "Automation First",
      description: "Passionate about building scalable automated testing frameworks."
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: "Quality Focused",
      description: "Driven to ensure the final product meets the highest standards."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
      title: "Security Minded",
      description: "Basic knowledge of application security and vulnerability testing."
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
          <h2 className={`text-3xl font-medium tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          <div className="w-16 h-1 bg-google-blue mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I am a dedicated Quality Assurance Engineer with a proven track record of ensuring software reliability, performance, and user satisfaction. With expertise in both manual and automated testing methodologies, I bridge the gap between development teams and end-users by proactively identifying risks and validating solutions.
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
              className={`p-8 rounded-xl border transition-all shadow-soft hover:shadow-hover hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-[#F8F9FA]'}`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
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
