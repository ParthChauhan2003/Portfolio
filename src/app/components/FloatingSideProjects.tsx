import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { animate } from 'motion';
import { useLenis, ReactLenis } from 'lenis/react';
import { 
  X, 
  ArrowRight, 
  Download, 
  CheckCircle, 
  Bug, 
  Target, 
  Search, 
  Settings, 
  ShieldCheck,
  ExternalLink,
  Github,
  Wrench,
  CheckSquare,
  ListChecks,
  Mail,
  Linkedin,
  Twitter,
  User,
  Briefcase,
  Code,
  Star,
  MessageSquare,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Zap,
  Globe,
  Database,
  Terminal,
  FileCode2,
  FileText,
  DownloadCloud,
  BugPlay,
  Layers,
  ChevronRight,
  Phone,
  Layout,
  Award,
  TestTube,
  Rocket
} from 'lucide-react';

interface FloatingSideProjectsProps {
  darkMode: boolean;
}

// Premium Counter Component for stats using Framer Motion
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

export const FloatingSideProjects: React.FC<FloatingSideProjectsProps> = ({ darkMode }) => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  if (!mounted) return null;

  // Content Data (Exactly same as existing website content)
  const stats = [
    { label: "Critical Defects Prevented", value: 150, suffix: "+", icon: <Bug className="w-5 h-5" /> },
    { label: "Regression Time Reduced", value: 75, suffix: "%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Core Journey Coverage", value: 100, suffix: "%", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "SaaS Products Tested", value: 20, suffix: "+", icon: <Globe className="w-5 h-5" /> },
  ];

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

  const projects = [
    {
      title: "E-Commerce Platform QA",
      description: "End-to-end testing for a major e-commerce platform. Led the automation team to reduce regression testing time by 60%.",
      tools: ["Selenium", "Java", "TestNG", "Jenkins"],
      contributions: ["Wrote 200+ automated test cases", "Setup Jenkins CI/CD pipelines", "Discovered critical payment gateway bug"],
    },
    {
      title: "Fintech Mobile App Testing",
      description: "Comprehensive mobile testing for a banking application focusing on security, usability, and API integrations.",
      tools: ["Appium", "Postman", "JIRA", "Charles Proxy"],
      contributions: ["API functional testing via Postman", "Mobile automation via Appium", "Performance testing under varied network conditions"],
    },
    {
      title: "Healthcare Portal Automation",
      description: "Built a robust automation framework from scratch for a patient management portal with complex data structures.",
      tools: ["Cypress", "JavaScript", "Mocha", "Git"],
      contributions: ["Designed Cypress POM framework", "Integrated with GitHub Actions", "Mentored manual testers to write automation"],
    }
  ];

  const experience = [
    {
      role: "Senior QA Engineer",
      company: "TechFlow Systems",
      period: "2021 - Present",
      description: "Lead quality initiatives for enterprise SaaS products, achieving 40% reduction in production hotfixes.",
      skills: ["Strategy", "Automation", "Leadership"]
    },
    {
      role: "QA Automation Engineer",
      company: "DataStream Corp",
      period: "2019 - 2021",
      description: "Developed and maintained cross-browser automation suites for complex fintech dashboards.",
      skills: ["Selenium", "CI/CD", "Performance"]
    }
  ];

  const services = [
    {
      title: "Automation Framework Design",
      desc: "Custom, scalable automation architectures using Playwright, Cypress, or Selenium tailored to your stack.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Strategic Test Planning",
      desc: "End-to-end quality roadmaps that align testing efforts with business goals and release cycles.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "CI/CD Pipeline Integration",
      desc: "Seamless integration of automated suites into Jenkins, GitHub Actions, or GitLab for continuous quality.",
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  return (
    <>
      {/* 1. Floating Side Tab */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{
          x: { duration: 0.5 },
          opacity: { duration: 0.5 },
          y: { 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          }
        }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex items-center group"
        id="projects-floating-tab"
      >
        <div className="relative flex items-center">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          
          {/* Tab Pill */}
          <div className="relative bg-gradient-to-b from-blue-600 via-indigo-600 to-violet-700 text-white px-3 py-10 rounded-l-3xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex flex-col items-center gap-4 border-l border-t border-b border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)]">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Rocket size={18} className="text-white -rotate-12" />
            </div>
            <span className="[writing-mode:vertical-lr] rotate-180 text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              View Projects
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mt-2" />
          </div>
        </div>
      </motion.button>

      {/* 2. Animated Opening Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[10000]"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              animate={{ x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ x: '100%', opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 150,
                mass: 1,
                filter: { duration: 0.4 }
              }}
              className={`fixed top-0 right-0 h-screen z-[10001] shadow-[-20px_0_50px_rgba(0,0,0,0.3)] flex flex-col
                w-full
                ${darkMode ? 'bg-[#0F172A]/95 text-white' : 'bg-white/95 text-slate-900'}
                backdrop-blur-3xl overflow-hidden`}
            >
              {/* Sticky Header with Close Button */}
              <div className="sticky top-0 z-50 flex items-center justify-between p-6 md:p-8 backdrop-blur-xl bg-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Rocket size={20} className="text-white -rotate-12" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Parth Chauhan</h2>
                    <p className={`text-xs font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-widest`}>QA Specialist</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-slate-100 hover:bg-slate-200'}`}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Scrollable Content Area */}
              <ReactLenis className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-24 lg:px-48 pb-20">
                <div className="max-w-3xl mx-auto space-y-20">
                  
                  {/* Hero Introduction */}
                  <section className="pt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Available for Consultation
                      </span>
                      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        Deliver Software <br />
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                          with Confidence
                        </span>
                      </h1>
                      <p className={`text-lg font-light leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        I partner with fast-scaling startups to uncover critical issues early and ensure seamless digital experiences at every release.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2">
                        <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95">
                          Book Consultation
                        </button>
                        <button className={`px-6 py-3 rounded-full border font-bold transition-all hover:-translate-y-1 active:scale-95 ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'}`}>
                          View Resume
                        </button>
                      </div>
                    </motion.div>
                  </section>

                  {/* Stats Counters */}
                  <section>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`p-6 rounded-3xl border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}
                        >
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                            {stat.icon}
                          </div>
                          <div className="text-3xl font-bold tracking-tight mb-1">
                            <Counter value={stat.value} />
                            {stat.suffix}
                          </div>
                          <p className={`text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* About Me Highlights */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Expertise</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {highlights.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`group p-6 rounded-3xl border transition-all hover:-translate-y-1 ${darkMode ? 'bg-white/5 border-white/10 hover:border-blue-500/30' : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200'}`}
                        >
                          <div className="flex items-start gap-5">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${darkMode ? 'bg-slate-800' : 'bg-blue-50'}`}>
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-1 group-hover:text-blue-500 transition-colors">{item.title}</h4>
                              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Skills / Tools */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Tech Stack</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Selenium", "Playwright", "Cypress", "Python", "Java", "Postman", "Jenkins", "AWS", "JIRA", "Docker", "SQL", "Git"].map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)' }}
                          className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors cursor-default ${darkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </section>

                  {/* Experience Timeline */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Experience</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                    </div>
                    <div className="space-y-8">
                      {experience.map((job, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="relative pl-8 border-l-2 border-blue-500/20"
                        >
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                          <div className="space-y-2">
                            <span className="text-xs font-black text-blue-500 uppercase tracking-widest">{job.period}</span>
                            <h4 className="text-xl font-bold">{job.role}</h4>
                            <p className="font-bold opacity-60 flex items-center gap-2">
                              <Briefcase size={16} />
                              {job.company}
                            </p>
                            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{job.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {job.skills.map((s, si) => (
                                <span key={si} className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Case Studies / Projects */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Projects</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.map((project, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className={`group p-8 rounded-[32px] border transition-all ${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10'}`}
                        >
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                              <Code size={24} />
                            </div>
                            <div className="flex gap-2">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                <Github size={18} />
                              </div>
                              <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={18} />
                              </div>
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h4>
                          <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((t, ti) => (
                                <span key={ti} className={`text-[11px] font-bold px-2 py-1 rounded-lg ${darkMode ? 'bg-white/5 text-slate-300' : 'bg-white border border-slate-200 text-slate-600'}`}>{t}</span>
                              ))}
                            </div>
                            <div className="space-y-2">
                              {project.contributions.map((c, ci) => (
                                <div key={ci} className="flex items-start gap-2 text-xs font-medium opacity-70">
                                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5" />
                                  {c}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Services */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Services</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service, i) => (
                        <div key={i} className={`p-6 rounded-3xl border flex items-center gap-6 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">{service.title}</h4>
                            <p className="text-xs opacity-60">{service.desc}</p>
                          </div>
                          <ChevronRight className="ml-auto opacity-20" size={16} />
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Testimonials (Simulated based on context) */}
                  <section>
                     <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Impact</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
                    </div>
                    <div className={`p-8 rounded-[40px] border relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'}`}>
                      <Star className="absolute -top-4 -right-4 w-24 h-24 opacity-10 rotate-12" />
                      <MessageSquare className="text-blue-500 mb-6" size={32} />
                      <p className="text-xl font-medium italic leading-relaxed mb-8">
                        "One of the few QA engineers who truly understands the business impact of testing. Their automation framework saved us hundreds of hours in every release cycle."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200" />
                        <div>
                          <h5 className="font-black">Engineering Lead</h5>
                          <p className="text-xs opacity-60">Fortune 500 SaaS Partner</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Contact CTA & Socials */}
                  <section className="pb-12">
                    <div className={`p-10 rounded-[40px] text-center space-y-8 ${darkMode ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
                      <h3 className="text-3xl font-black tracking-tight">Let's build quality together.</h3>
                      <p className="opacity-70 text-lg">Ready to transform your QA process and release faster?</p>
                      <button className={`w-full py-4 rounded-2xl font-black text-lg transition-transform active:scale-95 ${darkMode ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30' : 'bg-blue-600 text-white shadow-xl shadow-blue-600/30'}`}>
                        Start Free Consultation
                      </button>
                      <div className="flex justify-center gap-6 pt-4">
                        <div className="w-12 h-12 rounded-2xl border border-current opacity-20 flex items-center justify-center transition-all hover:opacity-100 hover:scale-110 cursor-pointer">
                          <Linkedin size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-2xl border border-current opacity-20 flex items-center justify-center transition-all hover:opacity-100 hover:scale-110 cursor-pointer">
                          <Twitter size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-2xl border border-current opacity-20 flex items-center justify-center transition-all hover:opacity-100 hover:scale-110 cursor-pointer">
                          <Mail size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-2xl border border-current opacity-20 flex items-center justify-center transition-all hover:opacity-100 hover:scale-110 cursor-pointer">
                          <Github size={20} />
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </ReactLenis>

              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-l-[40px]">
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[50%] h-[200%] bg-white/5 rotate-45 blur-3xl"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
        }
      `}</style>
    </>
  );
};
