import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const engagementModels = [
    { title: "Hourly QA Support", desc: "Flexible testing as needed" },
    { title: "Project-Based Testing", desc: "Dedicated scope and timeline" },
    { title: "Long-Term QA Collaboration", desc: "Seamless team integration" },
    { title: "Flexible Pricing Models", desc: "Tailored to your budget" }
  ];

  return (
    <section id="contact" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`}>
            Contact Section
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let’s Build Reliable Software Together
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Planning to launch or scale your product? I’ll help you ensure it's stable, secure, and ready for users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Engagement Options */}
            <div>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Engagement Options</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {engagementModels.map((model, index) => (
                  <div key={index} className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                    <h4 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{model.title}</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Get */}
            <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-blue-900/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>📝 What You’ll Get</h3>
              <ul className="space-y-4">
                {[
                  "Free 20-minute consultation",
                  "Identification of QA gaps",
                  "Automation strategy suggestions",
                  "Release optimization insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                  <a href="mailto:hello@parthchauhan.com" className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-600`}>hello@parthchauhan.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>LinkedIn</p>
                  <a href="#" className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-600`}>in/parthchauhan</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className={`p-8 rounded-3xl border shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100'}`} onSubmit={(e) => e.preventDefault()}>
              <h3 className={`text-xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Start a Free QA Consultation</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your product challenges..."
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'}`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex justify-center items-center gap-2 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95"
                >
                  <Send size={20} />
                  Book My Consultation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
