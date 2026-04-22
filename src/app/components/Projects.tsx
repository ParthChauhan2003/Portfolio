import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Wrench, CheckSquare, ListChecks } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    title: "E-Commerce Platform QA",
    description: "End-to-end testing for a major e-commerce platform. Led the automation team to reduce regression testing time by 60%.",
    tools: ["Selenium", "Java", "TestNG", "Jenkins"],
    contributions: ["Wrote 200+ automated test cases", "Setup Jenkins CI/CD pipelines", "Discovered critical payment gateway bug"],
    link: "#",
    github: "#"
  },
  {
    title: "Fintech Mobile App Testing",
    description: "Comprehensive mobile testing for a banking application focusing on security, usability, and API integrations.",
    tools: ["Appium", "Postman", "JIRA", "Charles Proxy"],
    contributions: ["API functional testing via Postman", "Mobile automation via Appium", "Performance testing under varied network conditions"],
    link: "#"
  },
  {
    title: "Healthcare Portal Automation",
    description: "Built a robust automation framework from scratch for a patient management portal with complex data structures.",
    tools: ["Cypress", "JavaScript", "Mocha", "Git"],
    contributions: ["Designed Cypress POM framework", "Integrated with GitHub Actions", "Mentored manual testers to write automation"],
    github: "#"
  }
];

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`text-3xl font-medium tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
          <div className="w-16 h-1 bg-google-blue mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of QA projects where I implemented test strategies, discovered critical bugs, and improved product quality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col rounded-2xl border overflow-hidden transition-all shadow-soft hover:shadow-hover hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-google-blue ${darkMode ? 'bg-google-blue/10' : 'bg-google-blue/10'}`}>
                    <CheckSquare size={24} />
                  </div>
                  <div className="flex gap-3 text-gray-400">
                    {project.github && (
                      <a href={project.github} className="hover:text-google-blue transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="hover:text-google-blue transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className={`text-xl font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-6 line-clamp-3 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className={`text-sm font-medium flex items-center gap-2 mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Wrench size={16} className="text-google-blue" /> Key Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className={`text-xs px-2.5 py-1 rounded-full font-medium border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-sm font-medium flex items-center gap-2 mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <ListChecks size={16} className="text-google-blue" /> Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.contributions.map((item, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-google-blue mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
