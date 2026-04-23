import React from 'react';
import { motion } from 'motion/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface SkillsProps {
  darkMode: boolean;
}

const skillsData = [
  { name: 'Manual Testing', level: 95 },
  { name: 'Automation (Selenium/Cypress)', level: 85 },
  { name: 'API Testing (Postman)', level: 90 },
  { name: 'Bug Tracking (JIRA, Bugzilla)', level: 95 },
  { name: 'Performance (JMeter)', level: 75 },
  { name: 'CI/CD Pipelines', level: 80 },
];

const bugStats = [
  { name: 'Critical', value: 15 },
  { name: 'High', value: 30 },
  { name: 'Medium', value: 45 },
  { name: 'Low', value: 10 },
];

const coverageData = [
  { name: 'Frontend', coverage: 85 },
  { name: 'Backend API', coverage: 95 },
  { name: 'Database', coverage: 75 },
  { name: 'E2E', coverage: 80 },
];

const COLORS = ['#ea4335', '#fbbc04', '#34a853', '#1a73e8'];

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className={`py-24 ${darkMode ? 'bg-[#202124]' : 'bg-[#F8F9FA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`text-3xl font-medium tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Analytics</h2>
          <div className="w-16 h-1 bg-google-blue mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive overview of my technical expertise and QA performance metrics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-soft`}
          >
            <h3 className={`text-xl font-medium mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Core Competencies</h3>
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                    <span className="text-sm font-semibold text-google-blue">{skill.level}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-google-blue rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-soft h-[260px]`}>
              <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Test Coverage by Area</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={coverageData} margin={{ top: 0, right: 0, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} axisLine={false} tickLine={false} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: 'none', borderRadius: '8px', color: darkMode ? '#fff' : '#000', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    cursor={{fill: darkMode ? '#374151' : '#f3f4f6'}}
                  />
                  <Bar dataKey="coverage" fill="#1A73E8" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-soft sm:h-[220px]`}>
              <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bugs Caught</h3>
                <p className={`text-sm mb-4 font-light ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Distribution of bugs found before production release.</p>
                <div className="grid grid-cols-2 gap-2">
                  {bugStats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                      <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full sm:w-1/2 h-[200px] sm:h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={bugStats}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={75}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {bugStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
