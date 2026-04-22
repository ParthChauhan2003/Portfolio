import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    role: "Senior QA Engineer",
    company: "TechNova Solutions",
    duration: "Jan 2022 - Present",
    achievements: [
      "Architected a scalable Cypress automation framework reducing testing time by 40%.",
      "Mentored junior QA engineers in best practices for test case design and reporting.",
      "Integrated automated test suites into GitLab CI/CD pipelines.",
      "Reduced post-release critical bugs by 85% within the first year."
    ]
  },
  {
    role: "QA Analyst",
    company: "FinSecure Banking",
    duration: "Mar 2019 - Dec 2021",
    achievements: [
      "Conducted extensive API testing using Postman for microservices architecture.",
      "Managed bug tracking lifecycle in JIRA, collaborating closely with developers.",
      "Executed regression, smoke, and sanity tests for bi-weekly releases.",
      "Wrote comprehensive SQL queries for backend data validation."
    ]
  },
  {
    role: "Software Tester",
    company: "WebSpire Digital",
    duration: "Jul 2017 - Feb 2019",
    achievements: [
      "Performed cross-browser and cross-platform manual testing.",
      "Created highly detailed test plans and test cases from functional requirements.",
      "Participated in Agile ceremonies including sprint planning and daily standups."
    ]
  }
];

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`text-3xl font-medium tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Professional Experience</h2>
          <div className="w-16 h-1 bg-google-blue mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className={`absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 z-10 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-900 text-google-blue' : 'bg-white border-white text-google-blue shadow-md'}`}>
                  <Briefcase size={18} />
                </div>

                <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-14 text-left md:text-right' : 'md:pl-14 text-left'}`}>
                  <div className={`p-8 rounded-xl border shadow-soft ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                    <span className="text-sm font-bold text-google-blue mb-2 block">{exp.duration}</span>
                    <h3 className={`text-xl font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <h4 className={`text-md mb-4 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</h4>
                    <ul className={`space-y-2 text-sm text-left ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.achievements.map((item, i) => (
                        <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`} />
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
      </div>
    </section>
  );
};
