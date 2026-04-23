import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Search, Server, Activity, Database, Crosshair, Monitor, XCircle, CheckCircle } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

export const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const servicesList = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-500" />,
      title: "Functional Testing",
      desc: "Validate every feature across real-world scenarios and user flows"
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Automation Testing",
      desc: "Build fast, maintainable test suites that reduce manual effort"
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "API Testing",
      desc: "Ensure backend reliability, security, and data consistency"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Regression Testing",
      desc: "Prevent new updates from breaking existing functionality"
    },
    {
      icon: <Activity className="w-6 h-6 text-yellow-500" />,
      title: "Smoke Testing",
      desc: "Quickly verify build stability after deployments"
    },
    {
      icon: <Server className="w-6 h-6 text-cyan-500" />,
      title: "Integration Testing",
      desc: "Ensure seamless interaction between systems and services"
    },
    {
      icon: <Search className="w-6 h-6 text-purple-500" />,
      title: "Exploratory Testing",
      desc: "Uncover hidden issues through real-user simulation"
    },
    {
      icon: <Crosshair className="w-6 h-6 text-orange-500" />,
      title: "Performance Testing",
      desc: "Validate system stability under high load conditions"
    }
  ];

  const challenges = [
    "Bugs slipping into production",
    "Slow and inefficient testing cycles",
    "Lack of automation coverage",
    "Poorly documented defects",
    "Delayed product releases"
  ];

  const valueDelivered = [
    { title: "Business-Focused Testing", desc: "Protect critical user flows and revenue-driving features" },
    { title: "Reliable Releases", desc: "Minimize risks with strong validation before launch" },
    { title: "Faster Feedback", desc: "Enable quicker decisions with continuous testing" },
    { title: "Production Stability", desc: "Ensure consistency across environments" }
  ];

  return (
    <section id="services" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Services Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`}>
              Services
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Advanced QA Engineering Services
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I ensure your product is stable, scalable, and user-ready before it goes live.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  {service.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenges & Value */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-3xl border ${darkMode ? 'bg-red-900/10 border-red-500/20' : 'bg-red-50/50 border-red-100'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <XCircle className="text-red-500" /> Common QA Challenges I Eliminate
            </h3>
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-red-500 flex-shrink-0`}></div>
                  <p className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Value */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 rounded-3xl border ${darkMode ? 'bg-green-900/10 border-green-500/20' : 'bg-green-50/50 border-green-100'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <CheckCircle className="text-green-500" /> Quality That Impacts Growth
            </h3>
            <div className="space-y-6">
              {valueDelivered.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`mt-1 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
