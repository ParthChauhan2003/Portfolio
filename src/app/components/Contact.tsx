import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-24 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email Me</h4>
                <p className={`mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>For business inquiries and collaborations.</p>
                <a href="mailto:hello@qapro.com" className="text-teal-500 font-semibold hover:underline">hello@qapro.com</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn</h4>
                <p className={`mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Connect with me professionally.</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline">linkedin.com/in/alex-qa</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-500 flex-shrink-0">
                <Github size={24} />
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>GitHub</h4>
                <p className={`mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Check out my automation repositories.</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline">github.com/alex-qa</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className={`p-8 rounded-3xl border shadow-xl ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`} onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can I help you?"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-teal-500 outline-none transition-all resize-none ${darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold transition-colors flex justify-center items-center gap-2 shadow-lg shadow-teal-500/30"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
